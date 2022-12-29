import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Header = () => {
  const { pokemon } = useParams();
  const name = window.localStorage.getItem('name');

  const logout = () => {
    window.localStorage.removeItem('name');
    window.location.reload(true);
  };

  return (
    <header className='header'>
      {pokemon ? (
        <Link to={'/'}>
          <i className='fa-solid fa-arrow-rotate-left'></i>
        </Link>
      ) : (
        <>
          <h2 className='header__title'>Pokedex</h2>
          <nav className='header__menu'>
            {name && <button onClick={logout}>Logout</button>}
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
