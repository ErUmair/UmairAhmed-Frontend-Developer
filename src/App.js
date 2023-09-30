import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Search from './components/Search';
import { useSelector } from 'react-redux'
import React from 'react';

function App() {
  const capsuleState = useSelector(state => state.capsuleData) || [];

  return (
    <>
      <Header />
      <Banner />
      <Search />
      <LandingPage data={capsuleState} />
    </>
  );
}

export default App;
