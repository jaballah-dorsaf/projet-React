import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return ( <
    div className = "App" >
    <
    header className = "App-header" >
    <
    img src = {
      logo
    }
    className = "App-logo"
    alt = "logo" / >
    <
    p >
    Edit < code > src / App.js < /code> and save to reload.   <
    /p>   <
    a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >
    Learn React <
    /a>   <
    /header>  <
    /div>
  );
}


export default App; <
div style = {
    {
      border: "solid 1px black",
      maxwidth: "100vw"
    }
  } >

  <
  h1 className = {
    {
      title: 'red'
    }
  } > My title < /h1>


  <
  img src = "/imageInSrc.jpg" / >


  <
  img src = "/imageInPublic.jpg" / >


  <
  /div>