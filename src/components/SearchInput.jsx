import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

import useSearchInput from '../hooks/useSearchInput';

const WrapperInput = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  @media(max-width: 767px) {
    order: 3;
    grid-column: 1 / -1;
  }
`

const Input = styled.input`
  background-color: #EEEEEE;
  border-radius: 0;
  border: none;
  height: 40px;
  padding: 0 15px;
  width: 100%;
  &::placeholder {
    font-size: 14px;
    color: #6B6B6B;
  }
  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  background-color: #DEDEDE;
  border-radius: 0;
  border: none;
  cursor: pointer;
  width: 40px;
`

const Error = styled.p`
  bottom: -30px;
  color: red;
  font-size: 12px;
  left: 15px;
  position: absolute;
`

const SearchInput = () => {
  const { query, onChange, error, handleSubmit } = useSearchInput()

  return (
    <WrapperInput>
      <Input 
        name="search" 
        value={query} 
        onChange={onChange} 
        placeholder="Buscar aquí producto"/>
      <Button onClick={handleSubmit}>
        <IoSearch/>
      </Button>
      {error && <Error>{error}</Error>}
    </WrapperInput>
  )
}

export default SearchInput
