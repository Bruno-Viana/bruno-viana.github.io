import React, {useContext} from 'react';
import './HeroSection.css';
import {DarkmodeContext} from './DarkmodeContext';
import {useSpring, animated} from 'react-spring'
import Profilefull from '../templates/face.webp';

function HeroSection() {

  const scrollDown = () =>{
    window.scrollTo({ top: window.innerHeight-40, behavior: 'smooth' })
  };
  const [clickDk] = useContext(DarkmodeContext);
  
  //Mensagem Handler
  let Mensagem = "Olá."
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 13) {
    Mensagem="Olá. Bom dia."
  } else if (curHr < 18) {
    Mensagem="Olá. Boa tarde."
  } else {
    Mensagem="Olá. Boa noite."
  }
  
  return (
    <>
    <div className={clickDk ? 'hero-containerDK' : 'hero-container'}> 
    <animated.img className='orangeBG' src='https://images-na.ssl-images-amazon.com/images/I/01fnVfMakPL.png' alt='bgprofile'style={useSpring({
                  opacity: 1,
                  from: { opacity: 0}, delay: 5500,
                  config:{ duration: 1000 },
    })}>            
    </animated.img>
        <animated.div className='floater' style={useSpring({
                  transform: "translate(0px, 0px)",
                  from: { transform: "translate(0px, -1px)" }, delay: 5500,
                  config:{ duration: 1000 },
            })}>            
            <div className='left'>
                 <img src={Profilefull} alt='profilePic'/>
            </div>
            <div className='right'>
            <h2 style={{color: clickDk ? '#F0F6FC' : 'black'}}>{Mensagem}</h2>
                <span className='location'><i className="fas fa-map-marker-alt"/> Santa Cruz do Sul, Rio Grande do Sul.</span> <hr/>
                <p> Desenvolvedor Júnior </p>
                <span className='desc'style={{color: clickDk ? '#F0F6FC' : 'black'}}>Meu nome é <b>Bruno Viana</b>, estudande de Ciência da Computação pela UNISC. Apaixonado pelo <b>Fullstack</b> com uma atenção especial pelo <b>Back-end</b> sem esquecer a <b>UI/UX</b>. Sempre procurando evoluir como desenvolvedor.
                </span>
            </div>
        </animated.div>

              <animated.div className='loader' style={useSpring({
                opacity: 0,
                from: { opacity: 1,  }, delay: 4500,
                config:{ duration: 800 },
              })}>

              <animated.svg id="svglogo" width="70%" height="20%" viewBox="0 0 624 122" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="624" height="122" fill="black">
              <rect fill="white" width="624" height="122"/>
              <path d="M2 2H28.784C39.344 2 47.168 4.4 52.256 9.2C57.344 13.904 59.888 21.248 59.888 31.232C59.888 46.112 54.32 54.32 43.184 55.856C50.096 57.488 55.136 60.752 58.304 65.648C61.472 70.448 63.056 77.024 63.056 85.376C63.056 95.84 60.56 104 55.568 109.856C50.672 115.712 43.184 118.64 33.104 118.64H2V2ZM27.92 50.672C34.64 50.672 39.296 49.232 41.888 46.352C44.48 43.376 45.776 38.336 45.776 31.232C45.776 26.048 44.96 22.256 43.328 19.856C41.792 17.36 39.44 15.776 36.272 15.104C33.104 14.432 28.4 14.096 22.16 14.096H18.272V50.672H27.92ZM29.216 106.976C34.016 106.976 37.712 106.256 40.304 104.816C42.992 103.28 44.864 100.976 45.92 97.904C46.976 94.832 47.504 90.656 47.504 85.376C47.504 77.888 45.968 72.32 42.896 68.672C39.824 64.928 34.832 63.056 27.92 63.056H18.272V106.976H29.216Z"/>
              <path d="M76.6516 35.408H92.0596V47.216C94.9396 42.512 97.8676 39.2 100.844 37.28C103.916 35.36 107.132 34.4 110.492 34.4C111.356 34.4 112.172 34.448 112.94 34.544V51.536C109.868 50.384 107.036 49.808 104.444 49.808C101.948 49.808 99.6916 50.432 97.6756 51.68C95.7556 52.832 93.8836 54.896 92.0596 57.872V118.64H76.6516V35.408Z"/>
              <path d="M134.437 119.792C129.925 119.792 126.709 118.16 124.789 114.896C122.869 111.632 121.909 107.6 121.909 102.8V35.408H137.317V98.192C137.317 101.36 137.797 103.76 138.757 105.392C139.717 106.928 141.445 107.696 143.941 107.696C147.013 107.696 150.613 105.968 154.741 102.512V35.408H170.149V118.64H154.741V110.432C148.117 116.672 141.349 119.792 134.437 119.792Z"/>
              <path d="M185.907 35.408H201.315V43.616C207.939 37.376 214.707 34.256 221.619 34.256C226.131 34.256 229.347 35.888 231.267 39.152C233.187 42.416 234.147 46.448 234.147 51.248V118.64H218.739V55.712C218.739 52.544 218.259 50.192 217.299 48.656C216.339 47.12 214.611 46.352 212.115 46.352C209.043 46.352 205.443 48.08 201.315 51.536V118.64H185.907V35.408Z"/>
              <path d="M272.084 119.792C263.252 119.792 256.964 117.2 253.22 112.016C249.572 106.736 247.748 99.104 247.748 89.12V64.928C247.748 54.944 249.572 47.36 253.22 42.176C256.964 36.896 263.252 34.256 272.084 34.256C280.82 34.256 287.012 36.896 290.66 42.176C294.404 47.36 296.276 54.944 296.276 64.928V89.12C296.276 99.104 294.404 106.736 290.66 112.016C287.012 117.2 280.82 119.792 272.084 119.792ZM272.084 108.416C274.868 108.416 276.884 107.6 278.132 105.968C279.38 104.336 280.148 102.32 280.436 99.92C280.724 97.52 280.868 94.256 280.868 90.128V64.064C280.868 59.936 280.724 56.672 280.436 54.272C280.148 51.776 279.38 49.712 278.132 48.08C276.884 46.448 274.868 45.632 272.084 45.632C269.3 45.632 267.236 46.448 265.892 48.08C264.644 49.712 263.876 51.776 263.588 54.272C263.3 56.672 263.156 59.936 263.156 64.064V90.128C263.156 94.256 263.3 97.52 263.588 99.92C263.876 102.32 264.644 104.336 265.892 105.968C267.236 107.6 269.3 108.416 272.084 108.416Z"/>
              <path d="M338.803 2H354.066L372.499 87.968L390.066 2H404.898L379.122 118.64H364.867L338.803 2Z"/>
              <path d="M416.978 6.896H432.386V23.024H416.978V6.896ZM416.978 35.408H432.386V118.64H416.978V35.408Z"/>
              <path d="M463.852 119.792C460.684 119.792 457.804 118.88 455.212 117.056C452.716 115.232 450.748 112.832 449.308 109.856C447.868 106.88 447.148 103.76 447.148 100.496C447.148 93.968 448.54 88.688 451.324 84.656C454.108 80.528 457.66 77.264 461.98 74.864C466.3 72.464 472.3 69.728 479.98 66.656V60.752C479.98 55.28 479.404 51.44 478.252 49.232C477.196 46.928 474.988 45.776 471.628 45.776C465.772 45.776 462.844 49.712 462.844 57.584V61.76L447.58 61.184C447.772 51.968 449.884 45.2 453.916 40.88C457.948 36.464 464.188 34.256 472.636 34.256C480.604 34.256 486.364 36.464 489.916 40.88C493.564 45.2 495.388 51.776 495.388 60.608V98.624C495.388 104.864 495.868 111.536 496.828 118.64H482.716C481.66 113.168 480.988 109.088 480.7 106.4C479.548 110.144 477.532 113.312 474.652 115.904C471.868 118.496 468.268 119.792 463.852 119.792ZM469.9 106.544C471.916 106.544 473.884 105.776 475.804 104.24C477.724 102.608 479.116 101.072 479.98 99.632V76.016C475.852 78.32 472.636 80.336 470.332 82.064C468.124 83.696 466.252 85.616 464.716 87.824C463.276 90.032 462.556 92.672 462.556 95.744C462.556 99.2 463.18 101.888 464.428 103.808C465.676 105.632 467.5 106.544 469.9 106.544Z"/>
              <path d="M510.188 35.408H525.596V43.616C532.22 37.376 538.988 34.256 545.9 34.256C550.412 34.256 553.628 35.888 555.548 39.152C557.468 42.416 558.428 46.448 558.428 51.248V118.64H543.02V55.712C543.02 52.544 542.54 50.192 541.58 48.656C540.62 47.12 538.892 46.352 536.396 46.352C533.324 46.352 529.724 48.08 525.596 51.536V118.64H510.188V35.408Z"/>
              <path d="M588.446 119.792C585.278 119.792 582.398 118.88 579.806 117.056C577.31 115.232 575.342 112.832 573.902 109.856C572.462 106.88 571.742 103.76 571.742 100.496C571.742 93.968 573.134 88.688 575.918 84.656C578.702 80.528 582.254 77.264 586.574 74.864C590.894 72.464 596.894 69.728 604.574 66.656V60.752C604.574 55.28 603.998 51.44 602.846 49.232C601.79 46.928 599.582 45.776 596.222 45.776C590.366 45.776 587.438 49.712 587.438 57.584V61.76L572.174 61.184C572.366 51.968 574.478 45.2 578.51 40.88C582.542 36.464 588.782 34.256 597.23 34.256C605.198 34.256 610.958 36.464 614.51 40.88C618.158 45.2 619.982 51.776 619.982 60.608V98.624C619.982 104.864 620.462 111.536 621.422 118.64H607.31C606.254 113.168 605.582 109.088 605.294 106.4C604.142 110.144 602.126 113.312 599.246 115.904C596.462 118.496 592.862 119.792 588.446 119.792ZM594.494 106.544C596.51 106.544 598.478 105.776 600.398 104.24C602.318 102.608 603.71 101.072 604.574 99.632V76.016C600.446 78.32 597.23 80.336 594.926 82.064C592.718 83.696 590.846 85.616 589.31 87.824C587.87 90.032 587.15 92.672 587.15 95.744C587.15 99.2 587.774 101.888 589.022 103.808C590.27 105.632 592.094 106.544 594.494 106.544Z"/>
              </mask>
              <path d="M2 2H28.784C39.344 2 47.168 4.4 52.256 9.2C57.344 13.904 59.888 21.248 59.888 31.232C59.888 46.112 54.32 54.32 43.184 55.856C50.096 57.488 55.136 60.752 58.304 65.648C61.472 70.448 63.056 77.024 63.056 85.376C63.056 95.84 60.56 104 55.568 109.856C50.672 115.712 43.184 118.64 33.104 118.64H2V2ZM27.92 50.672C34.64 50.672 39.296 49.232 41.888 46.352C44.48 43.376 45.776 38.336 45.776 31.232C45.776 26.048 44.96 22.256 43.328 19.856C41.792 17.36 39.44 15.776 36.272 15.104C33.104 14.432 28.4 14.096 22.16 14.096H18.272V50.672H27.92ZM29.216 106.976C34.016 106.976 37.712 106.256 40.304 104.816C42.992 103.28 44.864 100.976 45.92 97.904C46.976 94.832 47.504 90.656 47.504 85.376C47.504 77.888 45.968 72.32 42.896 68.672C39.824 64.928 34.832 63.056 27.92 63.056H18.272V106.976H29.216Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M76.6516 35.408H92.0596V47.216C94.9396 42.512 97.8676 39.2 100.844 37.28C103.916 35.36 107.132 34.4 110.492 34.4C111.356 34.4 112.172 34.448 112.94 34.544V51.536C109.868 50.384 107.036 49.808 104.444 49.808C101.948 49.808 99.6916 50.432 97.6756 51.68C95.7556 52.832 93.8836 54.896 92.0596 57.872V118.64H76.6516V35.408Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M134.437 119.792C129.925 119.792 126.709 118.16 124.789 114.896C122.869 111.632 121.909 107.6 121.909 102.8V35.408H137.317V98.192C137.317 101.36 137.797 103.76 138.757 105.392C139.717 106.928 141.445 107.696 143.941 107.696C147.013 107.696 150.613 105.968 154.741 102.512V35.408H170.149V118.64H154.741V110.432C148.117 116.672 141.349 119.792 134.437 119.792Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M185.907 35.408H201.315V43.616C207.939 37.376 214.707 34.256 221.619 34.256C226.131 34.256 229.347 35.888 231.267 39.152C233.187 42.416 234.147 46.448 234.147 51.248V118.64H218.739V55.712C218.739 52.544 218.259 50.192 217.299 48.656C216.339 47.12 214.611 46.352 212.115 46.352C209.043 46.352 205.443 48.08 201.315 51.536V118.64H185.907V35.408Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M272.084 119.792C263.252 119.792 256.964 117.2 253.22 112.016C249.572 106.736 247.748 99.104 247.748 89.12V64.928C247.748 54.944 249.572 47.36 253.22 42.176C256.964 36.896 263.252 34.256 272.084 34.256C280.82 34.256 287.012 36.896 290.66 42.176C294.404 47.36 296.276 54.944 296.276 64.928V89.12C296.276 99.104 294.404 106.736 290.66 112.016C287.012 117.2 280.82 119.792 272.084 119.792ZM272.084 108.416C274.868 108.416 276.884 107.6 278.132 105.968C279.38 104.336 280.148 102.32 280.436 99.92C280.724 97.52 280.868 94.256 280.868 90.128V64.064C280.868 59.936 280.724 56.672 280.436 54.272C280.148 51.776 279.38 49.712 278.132 48.08C276.884 46.448 274.868 45.632 272.084 45.632C269.3 45.632 267.236 46.448 265.892 48.08C264.644 49.712 263.876 51.776 263.588 54.272C263.3 56.672 263.156 59.936 263.156 64.064V90.128C263.156 94.256 263.3 97.52 263.588 99.92C263.876 102.32 264.644 104.336 265.892 105.968C267.236 107.6 269.3 108.416 272.084 108.416Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M338.803 2H354.066L372.499 87.968L390.066 2H404.898L379.122 118.64H364.867L338.803 2Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M416.978 6.896H432.386V23.024H416.978V6.896ZM416.978 35.408H432.386V118.64H416.978V35.408Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M463.852 119.792C460.684 119.792 457.804 118.88 455.212 117.056C452.716 115.232 450.748 112.832 449.308 109.856C447.868 106.88 447.148 103.76 447.148 100.496C447.148 93.968 448.54 88.688 451.324 84.656C454.108 80.528 457.66 77.264 461.98 74.864C466.3 72.464 472.3 69.728 479.98 66.656V60.752C479.98 55.28 479.404 51.44 478.252 49.232C477.196 46.928 474.988 45.776 471.628 45.776C465.772 45.776 462.844 49.712 462.844 57.584V61.76L447.58 61.184C447.772 51.968 449.884 45.2 453.916 40.88C457.948 36.464 464.188 34.256 472.636 34.256C480.604 34.256 486.364 36.464 489.916 40.88C493.564 45.2 495.388 51.776 495.388 60.608V98.624C495.388 104.864 495.868 111.536 496.828 118.64H482.716C481.66 113.168 480.988 109.088 480.7 106.4C479.548 110.144 477.532 113.312 474.652 115.904C471.868 118.496 468.268 119.792 463.852 119.792ZM469.9 106.544C471.916 106.544 473.884 105.776 475.804 104.24C477.724 102.608 479.116 101.072 479.98 99.632V76.016C475.852 78.32 472.636 80.336 470.332 82.064C468.124 83.696 466.252 85.616 464.716 87.824C463.276 90.032 462.556 92.672 462.556 95.744C462.556 99.2 463.18 101.888 464.428 103.808C465.676 105.632 467.5 106.544 469.9 106.544Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M510.188 35.408H525.596V43.616C532.22 37.376 538.988 34.256 545.9 34.256C550.412 34.256 553.628 35.888 555.548 39.152C557.468 42.416 558.428 46.448 558.428 51.248V118.64H543.02V55.712C543.02 52.544 542.54 50.192 541.58 48.656C540.62 47.12 538.892 46.352 536.396 46.352C533.324 46.352 529.724 48.08 525.596 51.536V118.64H510.188V35.408Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              <path d="M588.446 119.792C585.278 119.792 582.398 118.88 579.806 117.056C577.31 115.232 575.342 112.832 573.902 109.856C572.462 106.88 571.742 103.76 571.742 100.496C571.742 93.968 573.134 88.688 575.918 84.656C578.702 80.528 582.254 77.264 586.574 74.864C590.894 72.464 596.894 69.728 604.574 66.656V60.752C604.574 55.28 603.998 51.44 602.846 49.232C601.79 46.928 599.582 45.776 596.222 45.776C590.366 45.776 587.438 49.712 587.438 57.584V61.76L572.174 61.184C572.366 51.968 574.478 45.2 578.51 40.88C582.542 36.464 588.782 34.256 597.23 34.256C605.198 34.256 610.958 36.464 614.51 40.88C618.158 45.2 619.982 51.776 619.982 60.608V98.624C619.982 104.864 620.462 111.536 621.422 118.64H607.31C606.254 113.168 605.582 109.088 605.294 106.4C604.142 110.144 602.126 113.312 599.246 115.904C596.462 118.496 592.862 119.792 588.446 119.792ZM594.494 106.544C596.51 106.544 598.478 105.776 600.398 104.24C602.318 102.608 603.71 101.072 604.574 99.632V76.016C600.446 78.32 597.23 80.336 594.926 82.064C592.718 83.696 590.846 85.616 589.31 87.824C587.87 90.032 587.15 92.672 587.15 95.744C587.15 99.2 587.774 101.888 589.022 103.808C590.27 105.632 592.094 106.544 594.494 106.544Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
              </animated.svg>
              <svg id="svgborder" width="80%" height="25%" viewBox="0 0 673 229" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 0.5H672.5V228.5H0.5V0.5Z" stroke="white"/>
              </svg>
              <animated.svg id="crosshair1" width="5%" height="5%" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg"style={useSpring({
                  transform: "rotate(45deg)",
                  from: { transform: "rotate(0deg)" },
                  config:{ duration: 1500 },
              })}>
              <path fillRule="evenodd" clipRule="evenodd" d="M36 36V1H37V36H72V37H37V73H36V37H1V36H36Z" stroke="white" />
              </animated.svg>
              <animated.svg id="crosshair2" width="5%" height="5%" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg"style={useSpring({
                  transform: "rotate(-45deg)",
                  from: { transform: "rotate(0deg)" },
                  config:{ duration: 1500 },
              })}>
              <path fillRule="evenodd" clipRule="evenodd" d="M36 36V1H37V36H72V37H37V73H36V37H1V36H36Z" stroke="white"/>
              </animated.svg>

              </animated.div>



              <animated.div className="arrow bounce"  style={useSpring({
                opacity: 1,
                from: { opacity: 0,  }, delay: 5500,
                config:{ duration: 1500 },
              })}>
                <i className="fa fa-angle-down fa-5x" aria-hidden="true" onClick={scrollDown} style={{color: clickDk ? 'rgba(209, 209, 209, 0.651)' : 'rgba(48, 47, 47, 0.651)'}}><span className='arrowdesc'>Conheça</span></i>
              </animated.div> 
    </div>
    </>
  );
}

export default HeroSection;