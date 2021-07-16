import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperNav = styled.nav`
  background-color: black;
  display: flex;
  height: 50px;
  @media(max-width: 767px) {
    bottom: 0;
    height: auto;
    left: 0;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ease .4s;
  }
`

const ListNav = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 50px;
  @media(max-width: 767px) { 
    align-items: flex-start;
    flex-direction: column;
    height: auto;
    margin-top: 35px;
    width: 100%;
  }
`

const ItemNav = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  border-right: 1px solid rgba(255,255,255, 0.5);
  &:last-child {
    border: none;
  }
  a {
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 0 25px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media(max-width: 767px) {  
    border-bottom: 1px solid rgba(255,255,255, 0.5);
    border-right: none;
    padding: 20px 0;
    width: 100%;
  }
`
const ButtonMenu = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  @media(min-width: 768px) {
    display: none;
  }
`

const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 13px;
  position: absolute; 
  right: 20px;
  text-align: right;
  top: 20px;
`

const Navbar = () => {
  const [openMenu, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ButtonMenu onClick={handleOpen}>MENÚ</ButtonMenu>
      <WrapperNav open={openMenu}>
        <ButtonClose onClick={handleClose}>Cerrar</ButtonClose>
        <ListNav className="container">
          <ItemNav>
            <Link to="">Hombre</Link>
          </ItemNav>
          <ItemNav>
            <Link to="">Mujer</Link>
          </ItemNav>
          <ItemNav>
            <Link to="">Junior</Link>
          </ItemNav>
          <ItemNav>
            <Link to="">Niños</Link>
          </ItemNav>
          <ItemNav>
            <Link to="">Accesorios</Link>
          </ItemNav>
          <ItemNav>
            <Link to="">Ofertas</Link>
          </ItemNav>
        </ListNav>
      </WrapperNav>
    </>
  )
}

export default Navbar
