import React from 'react';
import './App.css'
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Etusivu from './pages/Etusivu.js';
import Joulukortit from './pages/Joulukortit.js';
import Joululahjapaperit from './pages/Joululahjapaperit.js';
import Koristenauhat from './pages/Koristenauhat.js';
import Ostoskori from './pages/Ostoskori.js';
import Tekijat from './pages/Tekijat.js';
import { Routes, Route } from 'react-router-dom';



function App() {



return (
    <>
     <Banner />
     <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<Etusivu />} />
                <Route path="/Joulukortit" element={<Joulukortit />} />
                <Route path="/Joululahjapaperit" element={<Joululahjapaperit />} />
                <Route path="/Koristenauhat" element={<Koristenauhat />} />
                <Route path="/Ostoskori" element={<Ostoskori />} />
                <Route path="/Tekijat" element={<Tekijat />} />
            </Routes>
        </div>
     
    </>
)
}

export default App;