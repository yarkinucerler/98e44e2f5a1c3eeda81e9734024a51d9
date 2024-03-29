import Header from "./Header";
import styled from "styled-components";
import SubHeader from "./SubHeader";
import Aside from "./Aside";
import Modal from "../components/Modal";
import {useState} from "react";

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`
const LayoutPageContainer = styled.div`
  gap: 4px;
  width: 100%;
  display: flex;
  max-width: 1240px;
  margin: 15px auto 0 auto;
`;

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  margin-bottom: 108px;
`

export default function Layout ({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <LayoutWrapper>
      <Header />
      <SubHeader />
      <LayoutPageContainer>
        <MainWrapper>{children}</MainWrapper>
        <Aside setIsModalOpen={setIsModalOpen} />
      </LayoutPageContainer>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </LayoutWrapper>
  );
}