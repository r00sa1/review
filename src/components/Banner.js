import React from 'react'
import meidanpuoti from "./images/meidanpuoti.jpg"
import './Banner.css';

function Banner() {
    return (
        <div class="banner">
            <div className="nav justify-content-center">
                <img src={meidanpuoti} class="img-fluid" id="meidanpuoti"/>
            </div>
        </div>
    )
}

export default Banner