import React, {useEffect, useState} from "react";
import styled from "styled-components";

import CouponItem from "../CouponItem";
import NoMatchCoupon from "../NoMatchCoupon";
import {multiplier} from "../../configs/config";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedMultiplier} from "../../store/slices/coupon.slice";


const Wrapper = styled.div`
  top: 51px;
  display: flex;
  position: sticky;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  padding: 10px 12px;
  align-items: center;
  background-color: #3A4449;
  border-radius: 0 4px 4px 0;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div`
  color: white;
  row-gap: 4px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;

const Badge = styled.span`
    color: #282F33;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    padding: 6px 11px;
    border-radius: 3px;
    margin-right: 25px;
    position: relative;
    background-color: #F3E300;

    &:after {
      right: -25px;
      position: absolute;
      content: url("/images/icons/u_angel_arrow_up.svg");
    }
`

const Icon = styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 100%;
    justify-content: center;
    background-color: rgba(255,255,255, 0.4);
    &:before {
        content: url("/images/icons/u_angel_arrow_up.svg");
    }
    &:after {
      content: attr(data-totalmatch);
      top: -50%;
      left: 50%;
      width: 14px;
      height: 14px;
      display: block;
      font-size: 10px;
      padding: 2px 2px;
      line-height: 12px;
      text-align: center;
      position: absolute;
      border-radius: 100%;
      transform: translateY(50%);
      background-color: #F3E300;
      border: 1px solid #3A4449;
    }
`;

const Container = styled.main`
  display: flex;
  overflow: auto;
  flex-direction: column;
  min-height: calc(305px - 62px);
  max-height: calc(85px * 5.5);
  border-radius: 0 4px 4px 0;
  border: 1px solid #282F33;
    
    &[aria-expanded="false"] {
        height: 0;
        min-height: 0;
    }
`;

const Footer = styled.footer`
  row-gap: 11px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  background-color: #282F33;
  padding: 10px 9px 17px 9px;
  border-radius: 0 0 6px 6px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;

    p {
        color: white;
        row-gap: 11px;
        display: flex;
        font-size:11px;
        font-weight: 500;
        line-height: 13px;
        flex-direction: column;
    }

    strong {
        font-weight: 700;
    }
`

const Button = styled.button`
  width: 100%;
  color: white;
  border: none;
  font-size: 12px;
  padding: 10px 0;
  font-weight: 600;
  max-height: 35px;
  line-height: 15px;
  border-radius: 5px;
  background-color: #008641;
`

const Select = styled.select`
  color: white;
  border: none;
  outline: none;
  padding: 8px 11px;
  background-color: #1D2225;
`

const Coupon = ({data = [], setIsModalOpen}) => {
  const dispatch = useDispatch()

  const [totalRatio, setTotalRatio] = useState(0)
  const [isExpand, setIsExpand] = useState(true)

  const selectedMultiplier = useSelector((state) => state.coupon.selectedMultiplier)
  const selectOptions = Array.from({ length: multiplier.end - multiplier.start + 1 }, (v, k) => k + multiplier.start);

  useEffect(() => {
    const newTotalRatio = data.reduce((acc, item) => acc * item.matchBet.odd, 1);
    setTotalRatio(newTotalRatio);
  }, [data]);

  const handleChange = (value) => {
    dispatch(updateSelectedMultiplier(Number(value)))
  }

  const applyCoupon = () => {
    setIsModalOpen(true)
  }

  return (
    <Wrapper>
      <Header>
        <HeaderWrapper>
          <Title>Kuponum</Title>
          <SubTitle>T. Oran: {!data.length ? Number("0").toFixed(2) : totalRatio.toFixed(2)}</SubTitle>
        </HeaderWrapper>
        {(!data.length || !isExpand) && <Icon data-totalmatch={data.length} onClick={() => {data.length && setIsExpand(!isExpand)}}/>}
        {(!!data.length && isExpand) && <Badge onClick={() => {setIsExpand(!isExpand)}}>{data.length} Maç</Badge>}
      </Header>
      <Container aria-expanded={isExpand}>
        {data.length ? data.map((item, index) => <CouponItem key={`coupon-${index}`} {...item} />) : (<NoMatchCoupon />)}
      </Container>
      {(!!data.length && isExpand) && <Footer>
        <Select value={selectedMultiplier} onChange={(event) => handleChange(event.target.value)}>
          {selectOptions.map(item => <option key={`native-select-${item}`}>{item}</option>)}
        </Select>
        <Detail>
          <p>
            <span>Kupon Bedeli :</span>
            <span>Toplam Oran :</span>
            <span>Maksimum Kazanç :</span>
          </p>
          <p>
            <span>{Number(selectedMultiplier).toFixed(2).replace('.', ',')} TL</span>
            <span>{totalRatio.toFixed(2).replace('.', ',')}</span>
            <strong>{(totalRatio * selectedMultiplier).toFixed(2).replace('.', ',')} TL</strong>
          </p>
        </Detail>
        <Button onClick={applyCoupon}>Hemen oyna</Button>
      </Footer>}
    </Wrapper>
  )
}
export default Coupon