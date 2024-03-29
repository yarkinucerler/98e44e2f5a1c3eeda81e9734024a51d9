import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

import useDebounce from "../../hooks/useDebounce";

const Wrapper = styled.div`
    gap: 7px;
    display: flex;
    padding: 7px 8px;
    margin-right: 10px;
    align-items: center;
    background-color: #212629;
`

const Input = styled.input`
    border: 0;
    color: white;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    
    &::-webkit-input-placeholder {
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
    }
`

const Icon = styled.span`
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url(${props => props.url}) center center no-repeat;
`

const EventSearchInput = ({value, action}) => {
  const inputRef = useRef(null);

  const [searchText, setSearchText] = useState(value);
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    action(debouncedSearchText);
  }, [debouncedSearchText]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "f" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        event.stopPropagation();
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  return (<Wrapper>
    <Input
      id="search-input"
      value={searchText}
      placeholder="Takım adı giriniz"
      ref={inputRef}
      onChange={handleSearchChange}/>
    {searchText.length ?
      <Icon url={"/images/icons/u_close.svg"} onClick={() => setSearchText('')}/> :
      <Icon url={"/images/icons/u_search.png"} htmlFor="search-input"/>}
  </Wrapper>)
}

export default EventSearchInput