import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { StyledHeader } from './style';
import { Container } from '../../styles/global';
import headerLogo from '../../assets/headerLogo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Container>
        <div className='header'>
          <div onClick={() => navigate('/')} className='logo-box'>
            <img src={headerLogo} alt='logo' />
            <h2>Gabriel Maciel</h2>
          </div>
          <ul className='desktop-menu'>
            <li>
              <Link to={'/'}>Início</Link>
            </li>
            <li>
              <Link to={'/projetos'}>Projetos</Link>
            </li>
            <li>
              <Link to={'/contato'}>Contato</Link>
            </li>
          </ul>
        </div>
      </Container>
      <Menu id='mobile-menu'>
        <Link className='menu-item' to={'/'}>
          Início
        </Link>
        <Link className='menu-item' to={'/projetos'}>
          Projetos
        </Link>
        <Link className='menu-item' to={'/contato'}>
          Contato
        </Link>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
