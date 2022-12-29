import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loader } from './loadingSlice';

const initialState = {
  data: [],
  pokemon: {},
  error: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getPokemons = () => (dispatch) => {
  dispatch(loader(true));
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=1300&offset=0')
    .then((res) => dispatch(setData(res.data.results)))
    .catch((err) => dispatch(setError(err.message)))
    .finally(() => dispatch(loader(false)));
};

export const getPokemonByParams = (param) => (dispatch) => {
  dispatch(loader(true));
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${param}`)
    .then((res) => dispatch(setPokemon(res.data)))
    .catch((err) => dispatch(setError(err.message)))
    .finally(() => dispatch(loader(false)));
};

export const getPokemonsBytype = (type) => (dispatch) => {
  dispatch(loader(true));
  axios
    .get(`https://pokeapi.co/api/v2/type/${type}`)
    .then((res) => dispatch(setData(res.data.pokemon.map((el) => el.pokemon))))
    .catch((err) => dispatch(setError(err.message)))
    .finally(() => dispatch(loader(false)));
};

export default pokemonSlice.reducer;

export const { setData, setError, setPokemon } = pokemonSlice.actions;
