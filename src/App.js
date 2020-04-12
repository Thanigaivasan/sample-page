import React from 'react';
import { Header } from './Components/Header'
import { HowItWorks } from "./Components/HowItWorks";
import { Benefits } from "./Components/Benefits";
import { SignUp } from "./Components/SignUp";
import { Footer } from "./Components/Footer";
import './style.css'

function App() {
  return (
    <>
      <Header/>
      <HowItWorks />
      <Benefits />
      <SignUp />
      {/*<Footer />*/}
    </>
  );
}

export default App;
