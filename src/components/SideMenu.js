import React from 'react';
import './SideMenu.css';
function SideMenu() {

    const checkScrollTop = () => {
        if (window.pageYOffset <= 200){ // Hero Section
            document.getElementById("opacityChanger1").style.opacity = 1;
            document.getElementById("opacityChanger2").style.opacity = 0.5;
            document.getElementById("opacityChanger3").style.opacity = 0.5;
          } else if(window.pageYOffset >= document.body.clientHeight/3.95){ // Skills Section
            document.getElementById("opacityChanger1").style.opacity = 0.5;
            document.getElementById("opacityChanger2").style.opacity = 1;
            document.getElementById("opacityChanger3").style.opacity = 0.5;
          } else if (window.pageYOffset >= document.body.clientHeight/2){
            document.getElementById("opacityChanger1").style.opacity = 0.5;
            document.getElementById("opacityChanger2").style.opacity = 0.5;
            document.getElementById("opacityChanger3").style.opacity = 1;
          }
      };
    window.addEventListener('scroll', checkScrollTop)

    
    const scrollHero = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
        };
    const scrollSkills = () =>{
        window.scrollTo({ top: 900, behavior: 'smooth' })
        };
    const scrollProjects = () =>{
        window.scrollTo({ top: document.body.clientHeight/2, behavior: 'smooth' })
        };


  return (
    <>
    <ul className='sideList'>
        <li onClick={scrollHero}><i className="fas fa-circle" id='opacityChanger1'></i></li>
        <li onClick={scrollSkills}><i className="fas fa-circle" id='opacityChanger2'></i></li>
        <li onClick={scrollProjects}><i className="fas fa-circle" id='opacityChanger3'></i></li>
    </ul>

    </>
  );
}

export default SideMenu;