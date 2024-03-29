import styled from "styled-components";
import Image from "next/image";

const HeaderWrapper = styled.header`
  top:0;
  z-index: 9;
  position: sticky;
  padding: 10px 0 6px 0; 
  background-color: #008641;
`;

const HeaderContainer= styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1240px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderAccountNav= styled.nav`
  gap: 10px;
  display: flex;
  align-items: center;
`;

const AccountButton = styled.button`
    background-color: ${props => props.color};
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    padding: 8px 26px;
    border-radius: 3px;
    outline: 0;
    border: 0;
`;

export default function Header () {
  return (
      <HeaderWrapper>
        <HeaderContainer>
          <Image src="/images/logo.png" alt="logo" width="108" height="35" />
          <HeaderAccountNav>
            <AccountButton color="#F3E300">
              Giriş
            </AccountButton>
            <AccountButton>
              Üye Ol
            </AccountButton>
          </HeaderAccountNav>
        </HeaderContainer>
      </HeaderWrapper>
  );
}