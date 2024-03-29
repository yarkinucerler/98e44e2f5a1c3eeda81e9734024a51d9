import styled from "styled-components";

const NoMatchWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 30px 11px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

const NoMatchIcon = styled.span`
  &:before {
    color: #8BA1AD;
    content: url("/images/icons/u_logo.svg");
  }
`

const NoMatchTitle = styled.h3`
    color: #8BA1AD;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
`

const NoMatchSubTitle = styled.p`
    color: #8BA1AD;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
`

const NoMatchCoupon = () => {
  return <NoMatchWrapper>
    <NoMatchIcon />
    <NoMatchTitle>Kuponunuzda maç bulunmamaktadır.</NoMatchTitle>
    <NoMatchSubTitle>Hemen bültene göz atarak maç ekleyebilirsin.</NoMatchSubTitle>
  </NoMatchWrapper>
}

export default NoMatchCoupon