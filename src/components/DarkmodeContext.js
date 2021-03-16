import React, {useState, useEffect} from 'react';

export const DarkmodeContext = React.createContext();


export const DarkmodeProvider = (props) => {
  //Use effects para carregar os dados do darkmode
  useEffect(() => {
    const clickDk = localStorage.getItem('DarkmodeSettings');
    if(clickDk){
        setDk(JSON.parse(clickDk))
    } else{
        setDk(false) //Se localStorage vazio iniciar em light mode
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('DarkmodeSettings', JSON.stringify(clickDk))
  })


  const [clickDk, setDk] = useState([]);
  return (
    <DarkmodeContext.Provider value={[clickDk, setDk]}>
      {props.children}
    </DarkmodeContext.Provider>
  )
}