import React from 'react'
import joulukauppa from './images/joulukauppa.png'
import './Banner.css';

function Banner() {
    return (
        <div class="banner">
            <div className="nav justify-content-center">
                <img src={joulukauppa} class="img-fluid" id="meidanpuoti"/>
            </div>
        </div>
    )
}

export default Banner