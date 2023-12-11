import React, { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001';

export default function Home() {
  // Tilamuuttujat ratingille ja kommentille
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  // Funktio käyttäjän palautteen lähettämiseksi
  const submitFeedback = () => {
    if (rating.trim() === '') {
      alert('Täytä kaikki pakolliset kentät.');
      return;
    }

    axios
      .post(URL + '/reviews', {
        rating: rating,
        comment: comment,
      })
      .then(() => {
        console.log('Palaute lähetetty onnistuneesti');
        alert('Palaute lähetetty onnistuneesti!');
      })
      .catch((error) => {
        console.error('Palautteen lähettämisessä tapahtui virhe', error.message);
      });
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
    </div>
  );
}
