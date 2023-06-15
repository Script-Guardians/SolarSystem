import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav';
import { Mercury } from './Pages/Mercury'
import { Mars } from './Pages/Mars'
import { Venus } from './Pages/Venus';
import { Earth } from './Pages/Earth';
import SolarSystem from './SolarSystem';
import './App.css';




const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path= "/" exact={true} element={<SolarSystem />}/>
            <Route path= "/mars" exact={true} element={<Mars />}/>
            <Route path= "/mercury" exact={true} element={<Mercury />}/>
            <Route path= "/venus" exact={true} element={<Venus />}/>
            <Route path= "/earth" exact={true} element={<Earth/>}/>
          </Routes> 
        </BrowserRouter> 
      
    </div>
  );
};

export default App;
