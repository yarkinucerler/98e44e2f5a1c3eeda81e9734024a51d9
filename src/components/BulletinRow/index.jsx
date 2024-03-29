import React from "react";
import styled from "styled-components";

import {colors, muks} from "../../configs/config";

const RowWrapper = styled.div`
    display: flex;
    align-items: stretch;
  &:nth-child(odd) {
      background-color: #E8EDEF;
  }
`

const Cell = styled.div`
    align-self: center;
    
  &.mbs {
    padding: 8px 10px;
    border-right: 1px solid #DBE3E7;
    span {
      background-color: ${props => props.bgcolor};
      width: 16px;
      color: white;
      font-size: 11px;
      padding: 2px 5px;
      font-weight: 700;
      line-height: 12px;
      border-radius: 3px;
      text-align: center;
      display: inline-block;
      box-sizing: border-box;
    }
  }
    
  &.edh {
      width: 40px;
      font-size: 11px;
      font-weight: 700;
      line-height: 12px;
      text-align: center;
      box-sizing: border-box;
      padding: 9px 1px 9px 1px;
      
  }
    
  &.en {
      flex-grow: 1;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing:-0.2px;
      padding: 12px 8px 10px 8px;
      border-left: 1px solid #DBE3E7;
  }
    
  &.speacial {
    gap: 5px;
    display: flex;
    padding: 8px 10px;
    align-items: stretch;
    
    span {
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
          background: url(/images/icons/u_union.png) center center no-repeat;
          cursor: pointer;
          display: flex;
          height: 16px;
          margin-left: 5px;
          position: relative;
          width: 16px;
          background-color: #474C51;
      }
      &.live {
          cursor: pointer;
          background-color: #E84A00;
      }
    }
  },

  &.bets {
    display: flex;
    min-width: 135px;
    align-items: stretch;
    border-left: 1px solid #9BABB5;
    
    span {
      width: 100%;
      font-size: 11px;
      cursor: pointer;
      font-weight: 700;
      line-height: 15px;
      padding: 10px 5px;
      text-align: center;
      letter-spacing: -0.2px;
      border-right: 1px solid #F3F3F3;
      
      &:last-child {
        border-right-color: transparent;
      }
        
      &.selected {
          background-color: #F3E300;
      }
    }
  }
    
  &.more {
    display: flex;
    min-width: 35px;
    align-items: stretch;
    border-left: 1px solid #F3F3F3;
    
      span {
      width: 100%;
      font-size: 11px;
      cursor: pointer;
      font-weight: 700;
      line-height: 15px;
      padding: 10px 5px;
      text-align: center;
      letter-spacing: -0.2px;
    } 
  }
`

const BulletinRow = React.memo(({ match, branchId, handleSelectedMatch }) => {
  return  <RowWrapper>
    <Cell className="mbs" bgcolor={colors[match.mb]}>
      <span>{match.mb}</span>
    </Cell>
    <Cell className="edh">{match.edh}</Cell>
    <Cell className="en">{match.en}</Cell>
    <Cell className="speacial">
      {match.iskbet && <span className="iskbet"></span>}
      {match.live && <span className="live">C</span>}
    </Cell>
    <Cell className="bets">
      {(() => {
        const muk = match.m.find(m => m.muk === muks[branchId]);
        if (!muk) {
          return Array
            .from({ length: 3 }, (_, index) => index)
            .map(i => (<span key={i}>-</span>))
        }

        return muk.o.map(o => (<span
            key={`bet-${o.ou}`}
            className={o.selected ? 'selected' : ''}
            onClick={() => handleSelectedMatch(match,muk, o)}
          >{o.odd.toFixed(2)}</span>))
      })()}
    </Cell>
    <Cell className="more"><span>{match.m.length ? `+${match.m.length}` : '-'}</span></Cell>
  </RowWrapper>
});

export default BulletinRow