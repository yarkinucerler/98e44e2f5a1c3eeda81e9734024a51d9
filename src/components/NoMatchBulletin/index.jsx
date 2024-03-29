import styled from "styled-components";
import BrandLogo from "../../../public/images/icons/u_logo_2.svg";

const NoMatchWrapper = styled.div`
  row-gap: 28px;
  height: 350px;
  display: flex;
  padding: 30px 11px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #F5F5F5;
`

const NoMatchIcon = styled.span``

const NoMatchTitle = styled.h3`
    color: #536269;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
`

const NoMatchBulletin = () => {
  return <NoMatchWrapper>
    <NoMatchIcon><BrandLogo /></NoMatchIcon>
    <NoMatchTitle>Şu anda oynanabilir bahis bulunmamaktadır.</NoMatchTitle>
  </NoMatchWrapper>
}

export default NoMatchBulletin