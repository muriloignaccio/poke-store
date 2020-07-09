import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

import Logo from '../assets/logo.png';

export default () => {
  const Navbar = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;

    img {
      width: 200px;
    }
  `;

  const Input = styled.input`
    background: #fff;
    border: solid 1.5px #dcdce5;
    border-radius: 8px;
    padding: 20px 70px 20px 24px;
    font-size: 18px;
    color: #a8a8b3;

    &::placeholder {
      color: #a8a8b3;
    }

    &:focus {
      outline-color: #e02041;
    }
  `;

  const Button = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    right: 24px;
    top: calc(50% - 15px);
  `;

  return (
    <Navbar>
      <form style={{ position: 'relative' }}>
        <Input placeholder='Digite o nome do Pokémon' />
        <Button>
          <Search color='#E02041' />
        </Button>
      </form>
      <img src={Logo} alt='Logo de Pokemon' />
    </Navbar>
  );
};
