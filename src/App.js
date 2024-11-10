

import React from "react";
import Header from "./components/header.js";
import Hero from "./components/hero.js"
import Content from "./components/content.js";
import Gen from "./components/gen.js";
import Gallery from "./components/gallery.js";
import Container from "./components/container.js";
import Footer from "./components/footer.js";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

  const GlobalStyle = createGlobalStyle`
  * {
   
    padding: 0;
    box-sizing: border-box;
  }
     body {
    background-color: #FBECDD;
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    line-height: 1.6; 
    margin: 0; /
    padding: 0;
  }
    `
function App() {
  return (
    <>
    <GlobalStyle/>
    <div>
      <Header />
    </div>
    <div>
<Hero/>
    </div>
    <div>
      <Content/>
    </div>
    <div>
      <Gen />
    </div>
    <div>
      <Gallery/>
    </div>
    <div>
      <Container/>
    </div>
    <div>
      <Footer/>
    </div>
    
   </>
   
  );
}

export default App;
