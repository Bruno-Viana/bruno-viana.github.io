import React from 'react';
import HeroSection from '../Herosection';
import Skills from '../Skills';
import Projects from '../Projects';
import Bandaid from '../Bandaid';
import Contato from '../Contato';
//Transições
import HeroTransition from '../HeroTransition';
import ContatoTransition from '../ContatoTransition';
import ProjTransition from '../ProjTransition';

function Home() {
  return (
    <>
      <HeroSection/>
      <HeroTransition/>
          <Skills/>
      <ProjTransition/>
         <Projects/>
      <Bandaid/>
      <ContatoTransition/>
        <Contato/>
    </>
  );
}

export default Home;