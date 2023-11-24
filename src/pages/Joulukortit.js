import React from 'react';

export default function Joulukortit() {
  return (
    <div className='content'>
      <div className='otsikko'>
        <h1>Alueen otsikko</h1>
      </div>
      <div className='products'>
        <h2>tuotteet</h2>
        <div className='product-container'>
          <div className='product'>
            <h3>tuote 1</h3>
            <ul>
              <li>
                <p>kuvaus 1</p>
              </li>
            </ul>
          </div>
          <div className='product'>
            <h3>tuote 2</h3>
            <ul>
              <li>
                <p>kuvaus 2</p>
              </li>
            </ul>
          </div>
          <div className='product'>
            <h3>tuote 3</h3>
            <ul>
              <li>
                <p>kuvaus 3</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
