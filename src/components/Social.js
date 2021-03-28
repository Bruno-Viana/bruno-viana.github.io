import React, {useContext} from 'react';
import './Social.css'
import {DarkmodeContext} from './DarkmodeContext';

export default function Social() {
    const [clickDk] = useContext(DarkmodeContext);

    return(
    <>
    <div className='Socialbar'>

            <li>
                <a href="https://api.whatsapp.com/send?phone=+5551999220553&text=Olá%21%20Gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noreferrer"><div className="myDIV"><i className="fab fa-whatsapp" id={ clickDk ? 'socialStyleDK' : 'socialStyle'}></i></div>
                <div className="hide">whatsapp</div></a>
            </li>
            <li>
                <a href="https://github.com/Bruno-Viana/" target="_blank" rel="noreferrer"><div className="myDIV"><i className="fab fa-github" id={ clickDk ? 'socialStyleDK' : 'socialStyle'}></i></div>
                <div className="hide">Github</div></a>
            </li>
            <li>
                <a href="mailto:bvianascs@gmail.com" target="_blank" rel="noreferrer"><div className="myDIV"><i className="far fa-envelope" id={ clickDk ? 'socialStyleDK' : 'socialStyle'}></i></div>
                <div className="hide">Email</div></a>
            </li>

            <div className="vl"style={{borderColor: clickDk ? '#F0F6FC' : 'black'}}></div>
    </div>
    </>
  );
}