import styled from "styled-components";
import Coupon from "../../components/Coupon";
import {useSelector} from "react-redux";

const AsideWrapper = styled.aside`
  width: 239px;
  flex-shrink: 0;
`

const Aside = ({setIsModalOpen}) => {
  const matches = useSelector((state) => state.coupon.matches);

  return (
    <AsideWrapper>
      <Coupon data={matches} totalMatch={matches.length} setIsModalOpen={setIsModalOpen}/>
    </AsideWrapper>
  )
}

export default Aside