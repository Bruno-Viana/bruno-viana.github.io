import React, {useContext} from 'react';
import './Social.css'
import {DarkmodeContext} from './DarkmodeContext';

export default function Social() {
    const [clickDk] = useContext(DarkmodeContext);
    return(
    <>
    <div className='Socialbar'>

            <li>
                <a href="https://github.com/Bruno-Viana/" target="_blank" rel="noreferrer"><div className="myDIV"><i className="fab fa-github"style={{color: clickDk ? '#F0F6FC' : 'black'}}></i></div>
                <div className="hide">Github</div></a>
            </li>
            <li>
                <a href="mailto:bvianascs@gmail.com" target="_blank" rel="noreferrer"><div className="myDIV"><i className="far fa-envelope"style={{color: clickDk ? '#F0F6FC' : 'black'}}></i></div>
                <div className="hide">E-Mail</div></a>
            </li>

            <div className="vl"style={{borderColor: clickDk ? '#F0F6FC' : 'black'}}></div>
    </div>
    </>
  );
}