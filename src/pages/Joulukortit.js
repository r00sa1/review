import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3001/'

export default function GetKortit() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("Joulukortit")

  const params = {
    category: category
  }

  useEffect(() => {
    axios.get(URL + 'products', {params: params})
    .then(resp => setProducts(resp.data))
    .catch(error => console.log(error.message))
  
 
  }, [category])
  
  return (
    
    <div className='content'>
      <h2 className='otsikko'>Joulukortit</h2>
      <div className='product-container'>
        {products.map(p => (
          <div key={p.id} className='product-item'>
            <img src={`${URL}${p.imageUrl}`} alt="Kuva" className='product-image' />
            <h3 className='product-name'>{p.productName}</h3>
            <p>{p.price + '€'}</p>
            <button type="button" class="btn btn-secondary">Lisää ostoskoriin</button>
          </div>
        ))}
      </div>
    </div>
  );

}