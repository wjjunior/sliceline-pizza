import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Banner/>
      <div>Hello Wagner</div>
    </>
  );
}

export default App;
