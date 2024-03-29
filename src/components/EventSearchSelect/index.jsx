import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import {getDateDifference} from "../../utils/date";

const Wrapper = styled.div`
    position: relative;
`;

const Button = styled.button`
    border: 0;
    gap: 24px;
    height: 100%; 
    color: white;
    display: flex;
    box-shadow: none;
    padding: 7.5px 8px;
    align-items: center;
    background-color: #212629;

    span {
        font-weight: 500;
        font-size: 15px;
        line-height: 17px;
    }

    i {
        width: 8px;
        height: 8px;
        display: inline-block;
        background-image: url("/images/icons/u_arrow_down.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    &[aria-expanded='true'] i {
        transform: rotate(180deg);
    }
`;

const Menu = styled.ul`
    left: 0;
    top: 100%;
    z-index: 2;
    width: 230%;
    padding: 8px;
    list-style: none;
    position: absolute;
    background-color: rgb(46, 52, 56);

    li {
        gap: 3px;
        color: white;
        display: flex;
        cursor: pointer;
        font-size: 12px;
        line-height: 12px;
        position: relative;
        align-items: center;
        letter-spacing: -0.2px;
        padding: 8px 10px 6px 10px;

        &:hover {
            background-color: rgba(255,255,255, 0.2);
        }
        
        &:before {
            content: '';
            width: 12px;
            height: 12px;
            display: inline-block;
            border: 2px solid rgb(199, 205, 207);
            transition: transform 120ms ease-in-out 0s;
        }
        
        &.selected {
            color: rgb(247, 225, 2);
            &:before {
                border-color: rgb(247, 225, 2);
                background-color: rgb(0, 109, 53);
            }
            &:after {
                content: '';
                top: 9px;
                left: 15px;
                width: 5px;
                height: 8px;
                position: absolute;
                border: solid white;
                transform: rotate(45deg);
                border-width: 0 2px 2px 0;
                -ms-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                
            }
        }
    }
`;

const EventSearchSelect = ({ data = [], action }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  const handleClick = (id) => {
    action(id)
  }

  return (
    <Wrapper>
      <Button onClick={toggleDropdown} aria-expanded={isVisible}>
        <span>Tarih</span>
        <i></i>
      </Button>
      {isVisible && (
        <Menu ref={menuRef}>
          {data?.map((item) => (
            <li key={item.id}
                className={item.selected ? 'selected' : ''}
                onClick={() => handleClick(item.id)}
            >
              <span>{getDateDifference(item.value)}</span>
            </li>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
}

export default EventSearchSelect;
