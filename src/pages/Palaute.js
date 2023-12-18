import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001';

export default function Home() {

  // Tilamuuttujat arvostelulle ja kommentille
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  /**
 * GET-kutsu, joka hakee reviews-tietokantaan tallennetut arvostelut ja näyttää ne sivulla
 */
  useEffect(()=> {
    axios.get(URL + '/reviews')
    .then(resp => setReviews(resp.data))
    .catch(error => console.log(error.message))
  },[])

  // Funktio käyttäjän palautteen lähettämiseksi tietokantaan
  const submitFeedback = async () => {
    try {
      if (rating.trim() === '') {
        alert('Täytä kaikki pakolliset kentät.');
        return;
      }
  
      // POST-kutsu lähettää arvostelun ja kommentin tietokantaan "reviews"
      // Ilmoittaa käyttäjälle, jos palautteen lähettäminen onnistui tai epäonnistui
      await axios.post(URL + '/reviews', {
        rating: rating,
        comment: comment,
      });
  
      console.log('Palaute lähetetty onnistuneesti');
      alert('Palaute lähetetty onnistuneesti!');
    } catch (error) {
      console.error('Palautteen lähettämisessä tapahtui virhe', error.message);
      alert('Palautteen lähettämisessä tapahtui virhe');
    }
  };
  


  return (
    <div className='content'>
      <h1>Palaute</h1>
      <form id='reviewform'>
        <label htmlFor='rating'>Mitä pidit tuotteesta asteikolla 1-5?</label>
        <input
          type='number'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          name='rating'
          min='1'
          max='5'
          required
        />

        <label htmlFor='comment'>Kommentti</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id='comment'
          name='comment'
          rows='4'
        ></textarea>

        <button type='button' onClick={submitFeedback}>
          Lähetä palaute
        </button>
      </form>

      <div>
        <h1>Saamamme palautteet</h1>
        {reviews.map(p => (
          <div key={p.id} className='review-item'>
            <p className='review'>{p.rating}</p>
            <p className='comment'>{p.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
