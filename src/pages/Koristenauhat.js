import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { shoppingCart } from '../components/signals/CartSignal'


const URL = 'http://localhost:3001/'

export default function GetKortit() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("Koristenauhat")

  const params = {
    category: category
  }

  useEffect(() => {
    axios.get(URL + 'products', { params: params })
      .then(resp => setProducts(resp.data))
      .catch(error => console.log(error.message))


  }, [category])

  const addToCart = (product) => {
    const prod = shoppingCart.value.find((p) => p.id === product.id);
    if (prod) {
      prod.count++;
      shoppingCart.value = [...shoppingCart.value];
    } else {
      shoppingCart.value = [...shoppingCart.value, { ...product, count: 1 }];
    }
  };

  return (

    <div className='content'>
      <h2 className='otsikko'>Koristenauhat</h2>
      <div className='product-container'>
        {products.map(p => (
          <div key={p.id} className='product-item'>
            <img src={`${URL}${p.imageUrl}`} alt="Kuva" className='product-image' />
            <h3 className='product-name'>{p.productName}</h3>
            <p>{p.price + '€'}</p>
            <button type='button' className='btn btn-secondary' onClick={() => addToCart(p)}>
              Lisää ostoskoriin
            </button>
          </div>
        ))}
      </div>
    </div>
  );

}