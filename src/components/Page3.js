import React from 'react';
import logo from '../logo.svg';

const Page3 = ({onRouteChange}) =>
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> This is page 3</p>
      </header>
      <button onClick={()=>onRouteChange('page1')}>Page1</button>
      <button onClick={()=>onRouteChange('page2')}>Page2</button>
    </div>

export default Page3;