import React from "react";
import "./styles/App.css";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Section1 from './components/Section1.jsx'
import MainBody from './components/MainBody.jsx'


function App() {
 
  return (
   <>
    <Header/>
    <br/> 
    <Section1/>
    <br/> 
    <MainBody />
    <br/>
    <Footer/>
  </>
  );
}

export default App;
