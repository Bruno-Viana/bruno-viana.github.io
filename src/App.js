import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Import de pages 
import Home from './components/pages/home';
import Page404 from './components/pages/page404'
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
            <Route path='/' exact component={Home} />
            <Route component={Page404} />
        </Switch>
      <Footer/>
      </DarkmodeProvider>
    </Router>
    </>
  );
}


export default App;
