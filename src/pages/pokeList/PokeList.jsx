import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, getPokemonsBytype } from '../../app/slices/pokemonSlice';
import { Type } from '../../components';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { bgColorType, pokesFiltered } from '../../helpers/helpers';
import './pokeList.scss';

const PokeList = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const { pokes, types } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    types === '' ? dispatch(getPokemons()) : dispatch(getPokemonsBytype(types));
  }, [dispatch, types]);

  const change = (e) => {
    setPage(0);
    setSearch(e.target.value);
  };

  const nextPage = () => {
    if (pokes.data.filter((e) => e.name.includes(search)).length > page + 20)
      setPage(page + 20);
  };
  const previousPage = () => {
    if (page > 0) setPage(page - 20);
  };

  bgColorType();
  return (
    <div className='pokeList'>
      <div className='pokeList__options'>
        <Type setPage={setPage} />
        <input
          type='text'
          value={search}
          onChange={change}
          placeholder='Find your Favorites'
        />
      </div>
      <ul className='pokeList__list'>
        {pokesFiltered(pokes, search, page).map((e) => (
          <li key={e.name}>
            <Link to={`/${e.name}`}>
              <PokemonCard url={e.url} />
            </Link>
          </li>
        ))}
      </ul>
      <div className='pokeList__paginated'>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default PokeList;
