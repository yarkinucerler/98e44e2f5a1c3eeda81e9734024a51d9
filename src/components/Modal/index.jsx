import {useDispatch} from "react-redux";
import styled from "styled-components";

import {useLock} from "../../hooks/useLock";
import {resetAllMatchInCoupon} from "../../store/slices/coupon.slice";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: none;

    &.active {
        display: block;
    }
`

const Content = styled.div`
    top: 50%;
    gap: 24px;
    left: 50%;
    width: 430px;
    height: 245px;
    padding: 20px;
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
`

const Body = styled.main`
  width: 100%;
  max-width: 255px;
    
    h4 {
      color: #008641;
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
`
const Footer = styled.footer`
  width: 100%;
  max-width: 219px;
`
const Button = styled.button`
  width: 100%;
  color: white;
  border: none;
  outline: none;
  padding: 15px 0;
  border-radius: 4px;
  background-color: #008641;
`


const Modal = ({isModalOpen, setIsModalOpen}) => {
  const dispatch = useDispatch()

  useLock(isModalOpen)

  return <Wrapper className={isModalOpen && 'active'}>
    <Content>
      <Body>
        <h4>Kuponunuz Başarıyla oluşturulmuştur</h4>
      </Body>
      <Footer>
        <Button type="button" onClick={() => {
          dispatch(resetAllMatchInCoupon())
          setIsModalOpen(false)
        }}>Yeni Kupon Yap</Button>
      </Footer>
    </Content>
  </Wrapper>
}

export default Modal