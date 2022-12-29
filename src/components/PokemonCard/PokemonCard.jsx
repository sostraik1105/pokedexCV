import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BgBall from '../../assets/icons/BgBall';
import { colorNameTypes, pokeId, colorType } from '../../helpers/helpers';
import Spinner from '../LoadingSpinner/Spinner';

const PokemonCard = ({ url }) => {
  const { isLoading } = useSelector((state) => state);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className='pokeCard'
          style={{ backgroundColor: `${colorNameTypes(data)}` }}
        >
          <BgBall />

          <img
            src={data.sprites?.other['official-artwork'].front_default}
            className='pokeCard__sprite'
            alt='sprite'
          />

          <div className='pokeCard__text'>
            <h3>{pokeId(data.id)}</h3>
            <h2>{data.name}</h2>
            {data.types?.map((el, i) => (
              <span style={{ color: colorType[el.type.name] }} key={i}>
                {el.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
