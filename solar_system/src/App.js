import React from 'react';
import SolarSystem from './Pages/SolarSystem'
import { Mercury } from './Pages/Mercury'
import { Venus } from './Pages/Venus'
import { Earth } from './Pages/Earth';
import { Mars } from './Pages/Mars'
import { Jupiter } from './Pages/Jupiter';
import { Saturn } from './Pages/Saturn';
import { Uranus } from './Pages/Uranus';
import { Neptune } from './Pages/Neptune';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav';
import './App.css'


const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path= "/" exact={true} element={<SolarSystem />}/>
            <Route path= "/venus" exact={true} element={<Venus />}/>
            <Route path= "/mercury" exact={true} element={<Mercury />}/>
            <Route path= "/earth" exact={true} element={<Earth/>}/>
            <Route path= "/mars" exact={true} element={<Mars />}/>
            <Route path= "/jupiter" exact={true} element={<Jupiter />}/>
            <Route path= "/saturn" exact={true} element={<Saturn />}/>
            <Route path= "/uranus" exact={true} element={<Uranus/>}/>
            <Route path= "/neptune" exact={true} element={<Neptune />}/>
          </Routes> 
        </BrowserRouter> 
      
    </div>
  );
};

export default App;
