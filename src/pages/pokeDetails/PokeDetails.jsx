import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonByParams } from '../../app/Slices/pokemonSlice';
import Spinner from '../../components/LoadingSpinner/Spinner';
import Movements from '../../components/Movements/Movements';
import { bgColorType, pokeId, colorType } from '../../helpers/helpers';

import './pokemonDetails.scss';

const PokeDetails = () => {
  const { pokemon } = useParams();

  const dispatch = useDispatch();

  const { pokes, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPokemonByParams(pokemon));
  }, [pokemon, dispatch]);

  bgColorType(pokes.pokemon);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='pokeDetails'>
          <article className='description'>
            <h2 className='description__title'>{pokes.pokemon.name}</h2>
            <span className='description__id'>{pokeId(pokes.pokemon.id)}</span>
            <img
              className='description__sprite'
              src={
                pokes.pokemon.sprites?.other['official-artwork'].front_default
              }
              alt={pokes.pokemon.name}
            />
            <div className='types'>
              {pokes.pokemon?.types?.map((el, i) => (
                <span key={i} style={{ color: colorType[el.type.name] }}>
                  {el.type.name}
                </span>
              ))}
            </div>
          </article>
          <Movements data={pokes.pokemon} />
        </div>
      )}
    </>
  );
};

export default PokeDetails;
