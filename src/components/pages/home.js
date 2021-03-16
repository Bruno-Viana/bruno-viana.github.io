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
import LazyLoad from 'react-lazyload';

function Home() {
  return (
    <>
      <HeroSection/>
      <HeroTransition/>
      <LazyLoad height={'100vh'} >
          <Skills/>
      </LazyLoad>
      <ProjTransition/>
      <LazyLoad height={'100vh'}>
         <Projects/>
      </LazyLoad>
      <Bandaid/>
      <ContatoTransition/>
      <Contato/>
    </>
  );
}

export default Home;