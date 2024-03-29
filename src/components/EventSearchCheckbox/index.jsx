import styled from "styled-components";

const Wrapper = styled.div`
    
`
const Icon = styled.div`
  width: 25px;
  height: 20px;
  cursor: pointer;
  svg {
      fill: white;
  }
    
  &.active {
      svg {
          fill: rgb(247, 225, 2)
      }
  }
`

const EventSearchCheckbox = ({icon, action, value=false}) => {
  return (
    <Wrapper>
      <Icon className={value ? 'active': ''} onClick={() => action()}>
        {icon}
      </Icon>
    </Wrapper>
  )
}

export default EventSearchCheckbox