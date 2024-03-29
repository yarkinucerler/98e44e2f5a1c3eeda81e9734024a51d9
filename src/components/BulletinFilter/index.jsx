import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {
  setFilterText,
  setFilterDate,
  setFilterKingRatio,
  setFilterOneMatch,
  clearAllFilters
} from "../../store/slices/filter.slice";

import KingSvg from '../../../public/images/icons/u_king.svg';
import OneMatchSvg from '../../../public/images/icons/u_one_match.svg';
import Delete from '../../../public/images/icons/u_delete.svg';

import EventSearchInput from "../EventSearchInput";
import EventSearchSelect from "../EventSearchSelect";
import EventSearchCheckbox from "../EventSearchCheckbox";
import {clearAllListeners} from "@reduxjs/toolkit";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  background-color: #282F33;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  padding: 14px;
  box-sizing: border-box;
`

const MarketGroup = styled.div`
  width: 134px;
  display: flex;
  margin-right: 36px;
  align-items: stretch;
  border-left: 1px solid #414E55;
  border-right: 1px solid #414E55;
`

const MarketItem = styled.span`
    width: 100%;
    color: white;
    font-size: 11px;
    font-weight: 700;
    line-height: 60px;
    padding: 10px 5px;
    text-align: center;
    letter-spacing: -0.2px;
`

const EventSearchIconWrapper= styled.div`
  gap: 20px;
  display: flex;
  margin-left: 17px;
  align-items: center;
`

const BulletinFilter = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.filter.searchText);
  const dates = useSelector((state) => state.filter.dates);
  const OneMatch = useSelector((state) => state.filter.oneMatch);
  const kingRatio = useSelector((state) => state.filter.kingRatio);
  return (<Wrapper>
    <Container>
      <EventSearchInput value={searchText} action={(value) => {
        dispatch(setFilterText(value))
      }}/>
      <EventSearchSelect data={dates} action={(id) => {
        dispatch(setFilterDate(id))
      }}/>
      <EventSearchIconWrapper>
        <EventSearchCheckbox
          icon={<KingSvg />}
          value={kingRatio}
          action={(e) => {
            dispatch(setFilterKingRatio())
          }}
        />
        <EventSearchCheckbox
          icon={<OneMatchSvg />}
          value={OneMatch}
          action={(e) => {
            dispatch(setFilterOneMatch())
          }}
        />
        <EventSearchCheckbox
          icon={<Delete />}
          action={(e) => {
            dispatch(clearAllFilters())
          }}
        />
      </EventSearchIconWrapper>
    </Container>
    <MarketGroup>
      <MarketItem>Maç Sonucu</MarketItem>
    </MarketGroup>
  </Wrapper>)
}

export default BulletinFilter