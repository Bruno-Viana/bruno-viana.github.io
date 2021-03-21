import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {DarkmodeContext} from './DarkmodeContext';
import {useSpring, animated} from 'react-spring'

function Navbar() {
    //Navlinks

    const scrollSkills = () =>{
        window.scrollTo({ top: window.innerHeight*2-40, behavior: 'smooth' })
        closeMobileMenu()
    };

    const scrollProjects = () =>{
        window.scrollTo({ top: window.innerHeight*4-40, behavior: 'smooth' })
        closeMobileMenu()
    };

    const scrollContato = () =>{
        window.scrollTo({ top: window.innerHeight*8+250, behavior: 'smooth' })
        closeMobileMenu()
    };

    //Darkmode
    const [clickDk, setDk] = useContext(DarkmodeContext);
    const Darkmode = () => setDk(!clickDk);

    if(clickDk){
        document.body.style.backgroundColor = "#0C0C0C";
      } else{
        document.body.style.backgroundColor = "white";

    }



    //Menu e mobile da Navbar
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton= () =>{
        if(window.innerHeight>=768){
            setButton(true);
        } else{
            setButton(false);
        }
        if(window.innerHeight>=768 && window.innerWidth<1024){
            setButton(false)
        }

    };

    useEffect(() => {
        showButton();
    }, [])

    //Refresh Page
    function refreshPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    window.addEventListener('resize', showButton);
    return (
        <>
            <animated.nav className={clickDk ? 'navbar' : 'navbarDK'} style={useSpring({
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                  from: { opacity: 0, transform: "translate(0px, -400px)" }, delay: 4500
            })}>
                <div className="navbar-container">
                    <Link className="navbar-logo" onClick={refreshPage} style={{textDecoration: 'none'}}>
                        <span className='namenavbar' style={{color: clickDk ? 'white' : 'black',
                        border: clickDk ? '1px solid white'  : '1px solid black' }}>Bruno Viana</span>
                    </Link>
                    <div className="menu-icon" onClick={handleClick} style={{color: clickDk ? 'white' : 'black'}}>
                           <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{color: clickDk ? 'white' : 'black'}}/>   
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'} style={{backgroundColor: clickDk ? '#151515' : 'white'}}> {/* Adicionar aqui quantos links teram na Nav-bar */}
                    <div className="nav-links" onClick={scrollSkills}>
                        <span style={{color: clickDk ? 'white' : 'black'}}>Habilidades</span>   
                    </div>

                    <div className="nav-links" onClick={scrollProjects}>
                        <span style={{color: clickDk ? 'white' : 'black'}}>Projetos</span>   
                    </div>

                    <div className="nav-links" onClick={scrollContato}>
                        <span style={{color: clickDk ? 'white' : 'black'}}>Contato</span>   
                    </div>
                    
                    </ul>
                    <div className="Darkmode" onClick={Darkmode}>
                        <i className={clickDk ? 'fas fa-sun' : 'fas fa-moon'}/>   
                    </div>
                </div>

            </animated.nav>
        </>
    )
}

export default Navbar