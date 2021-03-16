import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Import de pages 
import Home from './components/pages/home';
//Import de components
import Navbar from './components/Navbar';
import Social from './components/Social';
import Footer from './components/Footer'
import { DarkmodeProvider } from './components/DarkmodeContext';
function App() {
  return (
    <>
    <Router>
      <DarkmodeProvider>
      <Navbar/>
      <Social/>
        <Switch>
            <Route path='/portfolio/' exact component={Home} />
        </Switch>
      <Footer/>
      </DarkmodeProvider>
    </Router>
    </>
  );
}


export default App;
