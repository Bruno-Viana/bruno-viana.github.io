import React, {useContext} from 'react';
import './Contato.css';
import {DarkmodeContext} from './DarkmodeContext';

export default function HeroTransition() {
  const [clickDk] = useContext(DarkmodeContext);
  const scrollDown = () =>{
    window.scrollTo({ top: window.innerHeight*2-40, behavior: 'smooth' })
  };
  return (
    <>
    <div className='bgTeste'></div>
    <div className='BgParallaxHero'>  
    <h1 className='ParallaxHeader' style={{color: clickDk ? 'rgba(209, 209, 209, 0.651)' : 'rgba(48, 47, 47, 0.651)'}}>Habilidades</h1>
    </div>
    <div className="arrow3 bounce">
            <i className="fa fa-angle-down fa-5x" aria-hidden="true" onClick={scrollDown}style={{color: clickDk ? 'grey' : '#ababab'}}></i></div>
    </>
  );
}
