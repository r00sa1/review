import React from 'react';
import './App.css'
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Etusivu from './components/Etusivu.js';
import Joulukortit from './components/Joulukortit.js';
import Joululahjapaperit from './components/Joululahjapaperit.js';
import Koristenauhat from './components/Koristenauhat.js';
import Ostoskori from './components/Ostoskori.js';
import Tekijat from './components/Tekijat.js';
import { Routes, Route } from 'react-router-dom';


function App() {



return (
    <>
     <Banner />
     <Header />
        <div className="container">
            <Routes>
                <Route path="./" element={<Etusivu />} />
                <Route path="./Joulukortit" element={<Joulukortit />} />
                <Route path="./Joululahjapaperit" element={<Joululahjapaperit />} />
                <Route path="./Koristenauhat" element={<Koristenauhat />} />
                <Route path="./Ostoskori" element={<Ostoskori />} />
                <Route path="./Tekijat" element={<Tekijat />} />
            </Routes>
        </div>
     
    </>
)
}

export default App;