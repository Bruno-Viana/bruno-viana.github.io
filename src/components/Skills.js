import React, {useContext} from 'react';
import './Skills.css'
import {DarkmodeContext} from './DarkmodeContext';
import AOS from 'aos';
function Skills() {
  const [clickDk] = useContext(DarkmodeContext);
  AOS.init(); //Inicia AOS

  const scrollDown = () =>{
    window.scrollTo({ top: window.innerHeight*3-40, behavior: 'smooth' })
  };

  return (
    <div className={clickDk ? 'bgDK' : 'bg'}> 
        <div className='skillscontainer'>
          <div className='skilldesc'>
              <div className='eachItem'
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className='case'>
                  <h1><i className="fas fa-laptop-code"style={{color: clickDk ? '#F0F6FC' : 'black'}}></i></h1>
                  <h2 style={{color: clickDk ? '#F0F6FC' : 'black'}}>Front-end</h2>
                </div>
                <div className='tools'>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                </div>
                <hr className='bar'               
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-duration="2000"></hr>
              </div>

              <div className='eachItem' 
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className='case'>
                  <h1><i className="fas fa-cogs" style={{color: clickDk ? '#F0F6FC' : 'black'}}></i></h1>
                  <h2 style={{color: clickDk ? '#F0F6FC' : 'black'}}>Back-end</h2>
                </div>
                
                <div className='tools'>
                  <i className="fab fa-java"></i>
                  <i className="fab fa-python"></i>
                  <i className="fab fa-js-square"></i>
                  <i className="fab fa-node-js"></i>
                </div>
                <hr className='bar'                
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-duration="2000"></hr>
              </div>

              <div className='eachItem' 
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className='case'>
                  <h1><i className="fas fa-database"style={{color: clickDk ? '#F0F6FC' : 'black'}}></i></h1>
                  <h2 style={{color: clickDk ? '#F0F6FC' : 'black'}}>Database</h2>
                </div>
                <div className='tools'>
                  <img src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' alt='Firebase-logo'/>
                  <img src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' alt='MongoDB-logo'/>
                  <img src='https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' alt='MySQL-logo'/>
                </div>
                <hr className='bar-short'              
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-duration="2000">
                </hr>
              </div>
              <div className="arrow2 bounce"                 
                data-aos="fade-in"
                data-aos-delay="50"
                data-aos-offset="-30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
            <i className="fa fa-angle-down fa-5x" aria-hidden="true" onClick={scrollDown}style={{color: clickDk ? 'grey' : '#ababab'}}><span className='arrowdesc'>Projetos</span></i></div>
          </div> 
        </div>
    </div>
  );
}

export default Skills;