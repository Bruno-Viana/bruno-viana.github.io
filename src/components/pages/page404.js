import React, {useContext} from 'react';
import './page404.css'
import {DarkmodeContext} from '../DarkmodeContext';

function Page404() {
    const [clickDk] = useContext(DarkmodeContext);
    return (
        <>
        <a href="https://www.brunoviana.info">
        <div className="wrapper_404">
          <h1 className="labeltop"style={{color: clickDk ? '#F0F6FC' : 'black'}}>404</h1>
          <p className="desc404" style={{color: clickDk ? '#F0F6FC' : 'black'}}>Página não encontrada <i className="far fa-times-circle"></i><br/>Clique para voltar.</p>
        </div>
        </a>
        </>
      );
    };


export default Page404;