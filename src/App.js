import React from 'react';
import styled from 'styled-components';

import SearchBar from './Components/SearchBar';

import './styles.css';

export default function App() {
  const App = styled.div`
    height: 100%;
    background: #f0f0f5;
  `;
  return (
    <App>
      <SearchBar />
    </App>
  );
}
