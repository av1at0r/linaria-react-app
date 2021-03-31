import { styled } from '@linaria/react';
import React from 'react';
import './App.css';
import cover from './cover';
import CustomLink from './CustomLink';
import logo from './logo.svg';

const Link = styled(CustomLink)`
  color: #61dafb;
  ${cover()}
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
