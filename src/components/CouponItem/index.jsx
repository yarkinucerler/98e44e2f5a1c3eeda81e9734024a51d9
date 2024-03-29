import React, {useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";

import {branchCode, colors, muks} from "../../configs/config";
import {getDateDifference} from "../../utils/date";
import {useDispatch} from "react-redux";
import {deleteMatchInCoupon} from "../../store/slices/coupon.slice";

const ItemWrapper = styled.div`
  display: flex;
  padding: 8px 9px;
  border-bottom: 1px solid #EDEFF1;
    
  &:last-child {
    border-bottom-color: transparent; 
  }
`

const ItemColumn = styled.div`
  gap: 10px;
  display: flex;
  margin-right: 8px;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(2) {
    flex-grow: 1;
  }


  &:last-child {
    margin-right: 0;
    align-items: flex-end;
  }
  
  h6 {
      font-size: 12px;
      font-weight: 500;
      line-height: 13px;
  }
  
  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
    
    &:last-child {
      display: flex;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.24px;
      justify-content: space-between;
      
      em {
       color: #008641;
       font-style: normal;
      }
        
      span:last-child {
          font-size: 12px;
          font-weight: 600;
          line-height: 12px;
      }
    }
  }
`

const Icon = styled.span`
  background-color: ${props => props.bgcolor};
  width: 15px;
  color: white;
  font-size: 11px;
  padding: 2px 4px;
  font-weight: 700;
  line-height: 12px;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
`
const BetIconWrapper = styled.div`
  gap:5px;
  display: flex;
`

const DeleteIcon = styled.span`
    background: url(/images/icons/u_delete_dark.svg) center center no-repeat #D9D9D9;
    width: 16px;
    height: 16px;
    display: flex;
    cursor: pointer;
    position: relative;
`

const BetIcon = styled.span`
  width: 16px;
  height: 16px;
  padding: 2px;
  color: white;
  font-size: 11px;
  line-height: 12px;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;

&.iskbet {
    background: url(/images/icons/u_union.png) center center no-repeat #474C51;
    cursor: pointer;
    display: flex;
    height: 16px;
    position: relative;
    width: 16px;
  }
&.live {
    cursor: pointer;
    background-color: #E84A00;
  }
`

const CouponItem = ({matchId, matchName, matchMbsColor, matchMbsValue, matchBranch, matchDateFull, matchHour, iskbet, live, matchBet}) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteMatchInCoupon(id))
  }

  return <ItemWrapper>
    <ItemColumn>
      <Image src={`/images/icons/${matchBranch}.png`} alt={matchName} width="15" height="15"/>
      <Icon bgcolor={matchMbsColor}>{matchMbsValue}</Icon>
    </ItemColumn>
    <ItemColumn>
      <h6>{matchName}</h6>
      <p>{matchDateFull} {matchHour}</p>
      <p key={`coupon-bet-${matchBet.ou}`}>
        <span>Maç Sonucu : <em>{matchBet.ona}</em></span>
        <span>{matchBet.odd.toFixed(2)}</span>
      </p>
    </ItemColumn>
    <ItemColumn>
      <DeleteIcon onClick={() => handleDelete(matchId)}/>
      <BetIconWrapper>
        {iskbet && <BetIcon className="iskbet"></BetIcon>}
        {live && <BetIcon className="live">C</BetIcon>}
      </BetIconWrapper>
    </ItemColumn>
  </ItemWrapper>
}

export default CouponItem