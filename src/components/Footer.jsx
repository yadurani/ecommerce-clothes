import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const WrapperFooter = styled.footer`
  background-color: black;
  color: white;
  padding-top: 70px;
`
const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 100px;
  max-width: 1000px;
  margin: auto;
  @media(max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 15px 0;
    margin: 0 15px;
  }
`

const Copyrigth = styled.div`
  border-top: 1px solid rgba(255, 255, 255 , 0.5);
  color: white;
  font-size: 14px;
  margin: 50px 15px 0;
  padding: 15px 15px;
  text-align: center;
`

const Columns = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const TitleColumn = styled.li`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 25px;;
`
const ItemColumn = styled.li`
  font-size: 14px;
  margin-bottom: 15px;
  * {
    color: white;
    text-decoration: none;
  }
`

const Social = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`

const ItemSocial = styled.li`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: black;
  }
`

const Footer = () => {
  return (
    <WrapperFooter>
      <ContainerFooter>
        <Columns>
          <TitleColumn>Políticas</TitleColumn>
          <ItemColumn><Link to="">Políticas de privacidad</Link></ItemColumn>
          <ItemColumn><Link to="">Políticas de cambio</Link></ItemColumn>
          <ItemColumn><Link to="">Políticas de envío</Link></ItemColumn>
          <ItemColumn><Link to="">Términos y condicioneso</Link></ItemColumn>
          <ItemColumn><Link to="">Responsabilidad social</Link></ItemColumn>
        </Columns>
        <Columns>
          <TitleColumn>Sobre nosotros</TitleColumn>
          <ItemColumn><Link to="">Encuentra tu tienda</Link></ItemColumn>
          <ItemColumn><Link to="">Contáctanos</Link></ItemColumn>
          <ItemColumn><Link to="">Trabaja con nosotros</Link></ItemColumn>
        </Columns>
        <Columns>
          <TitleColumn>Síguenos</TitleColumn>
          <Social>
            <ItemSocial><FaFacebookF/></ItemSocial>
            <ItemSocial><FaTwitter/></ItemSocial>
            <ItemSocial><FaInstagram/></ItemSocial>
            <ItemSocial><FaYoutube/></ItemSocial>
          </Social>
        </Columns>
      </ContainerFooter>
      <Copyrigth>© Copyright Colombia. Todos los derechos reservados</Copyrigth>
    </WrapperFooter>
  )
}

export default Footer
