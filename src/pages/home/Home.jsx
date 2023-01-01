import { useState } from 'react';
import { Footer } from '../../components';
import './home.scss';

const Home = () => {
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('name', name);
    window.location.reload(true);
  };

  return (
    <div className='home'>
      <h1>
        Welcome to <br />
        <span>Pokedex</span>
      </h1>
      <div className='home__banner'>
        <img
          className='ball'
          src='https://firebasestorage.googleapis.com/v0/b/cv-danielpuchuri.appspot.com/o/Pokedex%2Fball_home.png?alt=media&token=4e484aa6-5d8d-4db2-aaf3-f8bb84acd9b8'
          alt='ball_home'
        />
        <img
          className='pokes'
          src='https://firebasestorage.googleapis.com/v0/b/cv-danielpuchuri.appspot.com/o/Pokedex%2Fpokehome.png?alt=media&token=e9df8466-92b9-41b0-acc4-8f3bdd9d224e'
          alt='poke_home'
        />
      </div>
      <form onSubmit={submit}>
        <h2>What's your name?</h2>
        <input
          type='text'
          value={name}
          id='name'
          onChange={(e) => setName(e.target.value)}
        />{' '}
        <br />
        <button>Next</button>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
