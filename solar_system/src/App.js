import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav';
import { Mercury } from './Pages/Mercury'
import { Mars } from './Pages/Mars'
import './App.css';
import SolarSystem from './Pages/SolarSystem';
import { Venus } from './Pages/Venus';
import { Earth } from './Pages/Earth';
import { Jupiter } from './Pages/Jupiter';
import { Uranus } from './Pages/Uranus';
import { Neptune } from './Pages/Neptune';
import { Saturn } from './Pages/Saturn';


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
            <Route path= "/jupiter" exact={true} element={<Jupiter/>}/>
            <Route path= "/uranus" exact={true} element={<Uranus/>}/>
            <Route path= "/neptune" exact={true} element={<Neptune/>}/>
            <Route path= "/saturn" exact={true} element={<Saturn/>}/>
          </Routes> 
        </BrowserRouter> 
    </div>
  );
};

export default App;
