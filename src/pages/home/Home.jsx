import { useState } from 'react';
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
          src='https://firebasestorage.googleapis.com/v0/b/cv-danielpuchuri.appspot.com/o/Pokedex%2Fball_home.png?alt=media&token=b9a5ddf4-793f-4e43-aee4-00d1876e42b4'
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
    </div>
  );
};

export default Home;
