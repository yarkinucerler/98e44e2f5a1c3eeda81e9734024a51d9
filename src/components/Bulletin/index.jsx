import React, {useEffect, useCallback, useState} from 'react'
import {useDispatch} from "react-redux";

import styled from "styled-components";

import {getDateDifference} from "../../utils/date";
import {matchBetByBranch, muks} from "../../configs/config"

import {updateMatchInCoupon} from "../../store/slices/coupon.slice";

import BulletinRow from "../BulletinRow";
import BulletinFilter from "../BulletinFilter";
import NoMatchBulletin from "../NoMatchBulletin";
import {log} from "next/dist/server/typescript/utils";
import {slugify} from "../../utils/slug";

const Wrapper = styled.div``
const GroupContainer = styled.div``

const GroupHeader = styled.header`
  top: 51px;
  z-index: 1;
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  position: sticky;
  line-height: 14px;
  padding-left: 15px;
  align-items: stretch;
  background-color: #353F45;
  justify-content: space-between;
`
const GroupTitle = styled.h3`
  line-height: 35px;
`

const MarketGroup = styled.div`
    width: 136px;
    display: flex;
    margin-right: 36px;
    align-items: stretch;
`

const MarketItem = styled.span`
    width: 100%;
    font-size: 11px;
    cursor: pointer;
    font-weight: 700;
    line-height: 15px;
    padding: 10px 5px;
    text-align: center;
    letter-spacing: -0.2px;
    border-left: 1px solid #414E55;
    
    &:last-child {
      border-right: 1px solid #414E55;
    }
`

const Bulletin = ({data: program  = [], branchId}) => {
  const dispatch = useDispatch();

  const handleSelectedMatch = ((match, muk, bet) => {
    dispatch(updateMatchInCoupon({match, muk, bet}))
  });

  return (
    <Wrapper>
      <BulletinFilter/>
      {
        program?.some(item => item.groupData.length) ? program.map((event) => (
          !!event.groupData.length && <GroupContainer key={slugify(event.groupDate)}>
            <GroupHeader>
              <GroupTitle>{getDateDifference(event.groupDate)}</GroupTitle>
              <MarketGroup>
                {matchBetByBranch[branchId].map(type => {
                  return <MarketItem key={`type_${type}`}>{type}</MarketItem>
                })}
              </MarketGroup>
            </GroupHeader>
            {event.groupData.map((match, index) => (
              <BulletinRow
                key={`bulletin-${index}`}
                match={match}
                branchId={branchId}
                handleSelectedMatch={handleSelectedMatch}/>
            ))}
          </GroupContainer>
        )) : <NoMatchBulletin />
      }
    </Wrapper>
  );
}
export default Bulletin