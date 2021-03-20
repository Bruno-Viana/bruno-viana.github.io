import React, {useContext} from 'react';
import './Contato.css';
import {DarkmodeContext} from './DarkmodeContext';
export default function ContatoTransition() {
  const [clickDk] = useContext(DarkmodeContext);
  //rgba(48, 47, 47, 0.651)

  const scrollDown = () =>{
    window.scrollTo({ top: window.innerHeight*8+250, behavior: 'smooth' })
  };
  return (
    <>
    <div className='bgTeste'></div>
    <div className='BgParallax'>
    <h1 className='ParallaxHeader'style={{color: clickDk ? 'rgba(209, 209, 209, 0.651)' : 'rgba(48, 47, 47, 0.651)'}}>Contato</h1>
    </div>
    <div className="arrow3 bounce">
            <i className="fa fa-angle-down fa-5x" aria-hidden="true" onClick={scrollDown}style={{color: clickDk ? 'rgba(209, 209, 209, 0.651)' : 'rgba(48, 47, 47, 0.651)'}}></i></div>
    </>
  );
}
