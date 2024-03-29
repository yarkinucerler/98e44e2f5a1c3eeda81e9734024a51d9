import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import branchConfig from '../../configs/branch.json';

import {makeStore} from "../../store/store";
import {selectItem} from "../../store/slices/branch.slice";
import {fetchProgramDetails} from "../../store/queries/program.query";

import {useMerged} from "../../hooks/useMerged";
import {useFiltered} from "../../hooks/useFiltered";

import Layout from "../../layout";
import Bulletin from "../../components/Bulletin";


export const getServerSideProps = async (context) => {
  const store = makeStore();
  const branch = branchConfig.find(branch => branch.slug === context.params.branch);
  await store.dispatch(fetchProgramDetails(branch.id));
  await store.dispatch(selectItem(branch.id));
  return { props: { initialState: store.getState() } };
};

const BranchPage = ({ initialState }) => {
  const {data} = initialState.program.programs
  const filterState = useSelector((state) => state.filter);
  const couponMatches = useSelector((state) => state.coupon.matches);
  const mergedData = useMerged(data, couponMatches)

  const filteredData = useFiltered(mergedData, filterState);

  return (
    <Layout>
      <Bulletin data={filteredData} branchId={initialState.branch.selectedItemId}/>
    </Layout>
  );
}

export default BranchPage