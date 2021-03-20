import React, {useContext} from 'react';
import './Projects.css';
//import Badges
import logo_react from '../templates/react.webp';
import logo_nodejs from '../templates/nodejs.webp';
import logo_html from '../templates/html5.webp';
import logo_css from '../templates/css3.webp';
import logo_paypal from '../templates/paypal.webp';
import logo_django from '../templates/django.webp';
import logo_python from '../templates/python.webp';
//Import Darkmode
import {DarkmodeContext} from './DarkmodeContext';
//import Previews - React Ecommerce
import previewpc from '../templates/pewviewtest.webp';
import previewpcDK from '../templates/pewviewtest2.webp';
import previewmobile from '../templates/template-preview-mobile.webp';
import previewmobileDK from '../templates/template-preview-mobiledk.webp';
//import Previews - Covid
import previewCovid from '../templates/previewcovid.webp';
import previewCovidDK from '../templates/previewcovidDK.webp';
import previewCovidMobile from '../templates/previewcovidMobile.webp';
import previewCovidMobileDK from '../templates/previewCovidMobileDK.webp';
//import Previews - Django
import previewDjango from '../templates/previewdjango.webp'
import previewDjangoDK from '../templates/previewdjangoDK.webp'
function Projects() {



  const [clickDk] = useContext(DarkmodeContext);
  return (
    <>
    <div className={clickDk ? 'bgImgDK' : 'bgImg'} id='testprp'>

        <div className={clickDk ? 'bgprojDK' : 'bgproj'}>
            <div className='projcontainer'>
                <div className='card'>
                    <div className='left-column'>
                    <img src={clickDk ? previewpcDK : previewpc} alt='projpreview'>
                    </img>
                    </div>
                    <div className='right-column'>
                        <h1 style={{color: clickDk ? '#F0F6FC' : 'black'}}><i className="fas fa-angle-left"></i>React Ecommerce<i className="fas fa-angle-right"></i></h1>
                        <div className='card-tools'>
                                <img src={logo_react} alt='react-logo'></img>
                                <img src={logo_nodejs} alt='nodejs-logo'></img>
                                <img src={logo_html} alt='html-logo'></img>
                                <img src={logo_css} alt='css-logo'></img>
                                <img src={logo_paypal} alt='paypal-logo'/>
                        </div>
                        <div className='card-desc'>
                                    <p style={{color: clickDk ? '#F0F6FC' : 'black'}}>
                                        Website de ecommerce criado com React e Node.js totalmente responsivo com as features esperadas de toda
                                        plataforma de vendas utilizando tecnologias atuais assim como a API do PayPal que garante pagamentos livres de um SDK,
                                        o que gera uma longevidade maior por não precisar de atualizações tão frequentes para manutenção.
                                    </p>
                        </div>
                    </div>
                    <a className='demoAnchor' href="https://bruno-viana.github.io/react-ecommerce/" target='_blank' rel="noreferrer"><button className='btnDemo' style={{color: clickDk ? '#0C0C0C' : 'white'}}><i className="fas fa-play-circle"></i> Demo</button></a>
                    <a className='sourceAnchor' href="https://github.com/Bruno-Viana/react-ecommerce" target="_blank" rel="noreferrer"><button className='btnDemo' style={{color: clickDk ? '#0C0C0C' : 'white'}}><i className="fab fa-github"></i> Código</button></a>
                    <img className='previewmobile' src={clickDk ? previewmobileDK : previewmobile} alt='mobile'>
                    </img>
                </div>   
            </div>
            <div className='projcontainer2'>
                <div className='card'>
                <div className='right-column-alt'data-aos="fade-right">
                        <h1 style={{color: clickDk ? '#F0F6FC' : 'black'}}><i className="fas fa-angle-left"></i>COVID SCS e região + API<i className="fas fa-angle-right"></i></h1>
                        <div className='card-tools'>
                                <img src={logo_react} alt='react-logo'></img>
                                <img src={logo_nodejs} alt='nodejs-logo'></img>
                                <img src={logo_html} alt='html-logo'></img>
                                <img src={logo_css} alt='css-logo'></img>
                        </div>
                        <div className='card-desc'>
                                    <p style={{color: clickDk ? '#F0F6FC' : 'black'}}>
                                    API criada por mim em NodeJS e deploy no Heroku utilizando <i>Web Scraping</i> nos dados da Secretaria da Saúde do Rio Grand do Sul. Os dados são verificados a cada uma hora.<br/>
                                    Para o Front-End utilizei React com Axios para dar fetch na API e mostrar os dados, a biblioteca do mapa utilizada foi Leaflet, design totalmente responsivo e ordenação de tabelas.
                                    </p>
                        </div>
                    </div>
                    <div className='left-column-alt'>
                    <img src={clickDk ? previewCovidDK : previewCovid} alt='projpreview'>
                    </img>           
                    </div>
                </div>
                <a className='demoAnchor-alt' href="https://bruno-viana.github.io/covid-dosvales/" target='_blank' rel="noreferrer"><button className='btnDemo-alt' style={{color: clickDk ? '#0C0C0C' : 'white'}}><i className="fas fa-play-circle"></i> Demo</button></a>
                <a className='sourceAnchor-alt' href="https://github.com/Bruno-Viana/covid-dosvales" target="_blank" rel="noreferrer"><button className='btnDemo-alt' style={{color: clickDk ? '#0C0C0C' : 'white'}}><i className="fab fa-github"></i> Código</button></a>  
                <img className='previewmobile-alt' src={clickDk ? previewCovidMobileDK : previewCovidMobile} alt='mobile'>
                </img>
            </div>
            <div className='projcontainer3'>
                <div className='card'>
                        <div className='left-column'>
                        <img src={clickDk ? previewDjangoDK : previewDjango} alt='projpreview'>
                        </img>
                        </div>
                        <div className='right-column'>
                            <h1 style={{color: clickDk ? '#F0F6FC' : 'black'}}><i className="fas fa-angle-left"></i>PC Easy - Django<i className="fas fa-angle-right"></i></h1>
                            <div className='card-tools'>
                                    <img src={logo_django} alt='django-logo'></img>
                                    <img src={logo_python} alt='python-logo'></img>
                                    <img src={logo_html} alt='html-logo'></img>
                                    <img src={logo_css} alt='css-logo'></img>
                            </div>
                            <div className='card-desc'>
                                        <p style={{color: clickDk ? '#F0F6FC' : 'black'}}>
                                            Como projeto pessoal em 2020, criei essa aplicação com método de <i>Web Scraping</i> em sites conhecidos de hardware do Brasil para auxiliar na buscar do melhor preço por uma peça específica.
                                            <br/><br/><br/>
                                            OBS: Passe o mouse abaixo para mais informações.
                                        </p>
                            </div>
                        </div>
                        <button className='btnDemoOFF' style={{color: clickDk ? '#0C0C0C' : 'white'}}>
                            <i className="fas fa-play-circle"></i>
                             Demo</button>
                            <div className="hideProj">Pelo nível de recursos necessários para hospedar uma aplicação feita com Back-end em Django/Python não tive opções acessíveis para dar deploy e gerar uma demo.</div>
                        <a className='sourceAnchor' href="https://github.com/Bruno-Viana/pc-easy" target="_blank" rel="noreferrer"><button className='btnDemo' style={{color: clickDk ? '#0C0C0C' : 'white'}}><i className="fab fa-github"></i> Código</button></a>
                        {/* Template para preview de celular lado Esquerdo
                        <img className='previewmobile' src={clickDk ? previewmobileDK : previewmobile} alt='mobile'  
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                        </img> */}
                </div>  
            </div>
        </div>
    </div>
    </>
  );
}

export default Projects;