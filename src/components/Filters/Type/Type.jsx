import { useDispatch, useSelector } from 'react-redux';

import { NotFound } from '../../../pages';

import { selected } from '../../../app/slices/typeSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Type = ({ setPage }) => {
  const [types, setTypes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type').then((res) => {
      setTypes(res.data);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setPage(0);
    dispatch(selected(e.target.value));
  };

  return (
    <select name='types' onChange={submit}>
      <option value=''>-- All Types --</option>
      {types?.results?.map((el, i) => (
        <option value={el.name} key={i}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default Type;
