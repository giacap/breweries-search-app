import React from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import BreweryDetails from './components/BreweryDetails'
import History from './components/History'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { BreweriesProvider } from './components/BreweriesContext';
import { HistoryProvider } from './components/HistoryContext';



function App() {


  

  return (

    <BreweriesProvider>

      <HistoryProvider>

        

          <Router>

                  <div className="app">
                  
                    <Header />

                    <Nav />

                    <Switch>
                      <Route path='/' exact component={Home}/>

                      <Route path='/history' component={History}/>

                      <Route path='/:id' exact component={BreweryDetails}/>
                    </Switch>
                    
                    

                  </div>

          </Router>

        

      </HistoryProvider>

    </BreweriesProvider>
      
    
  );
}

export default App;
