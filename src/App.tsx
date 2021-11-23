import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_SINGLE_ECDH_USE } from 'constants';
import { myObj } from '../src/modules/shared/utility/messages'

console.log(myObj)

interface CoolProps {
  foo: number;
  bar: string;
}

const Cool:FC<any> = (props) => {

  return <>
  { props.foo }
  { props.bar }
  </>
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cool foo={1} bar={'Hello Panupan'} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
