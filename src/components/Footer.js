import React, {useContext} from 'react';
import './Footer.css';
import {DarkmodeContext} from './DarkmodeContext';


function Footer() {
  const [clickDk] = useContext(DarkmodeContext);
  return (
    <>
    <div className="footer">
        <div className="about">
            <h1 style={{color: clickDk ? '#F0F6FC' : 'black'}}>Sobre</h1>
            <p className="text-justify" style={{color: clickDk ? '#F0F6FC' : 'black'}}>Portfolio de projetos criado por <a className="github" href="https://github.com/Bruno-Viana" target="_blank" rel="noreferrer">@Bruno Viana</a>.<br/>
            Copyright © 2021 Bruno-Viana. Todos os direitos reservados.</p>
        </div>
        <div className="test">
            <h1 style={{color: clickDk ? '#F0F6FC' : 'black'}}>Contato Rápido</h1>
            <p className="text-justify-test" style={{color: clickDk ? '#F0F6FC' : 'black'}}>E-Mail: bvianascs@gmail.com <br/>
            Telefone: (51)9 9922-0553 </p>
        </div>
      <div className="social">
            <ul className="social-icons">
            <h1 style={{color: clickDk ? '#F0F6FC' : 'black'}}>Social</h1>
              <a className="github" href="https://github.com/Bruno-Viana" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            </ul>
          </div>
    </div>
    </>
  );
}

export default Footer;