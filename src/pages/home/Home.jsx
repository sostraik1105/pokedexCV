import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('name', name);
    window.location.reload(true);
  };

  return (
    <div>
      <h1>
        Welcome to <br />
        <span>Pokedex</span>
      </h1>
      <div>
        <img src='src/assets/ball_home.png' alt='ball_home' />
        <img src='src/assets/pokehome.png' alt='poke_home' />
      </div>
      <form onSubmit={submit}>
        <h2>What's your name trainer?</h2>
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
