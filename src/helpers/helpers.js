// Write pokemon ID
export const pokeId = (id) => {
  if (id < 10) {
    return `#00${id}`;
  } else if (id < 100) {
    return `#0${id}`;
  }

  return `#${id}`;
};

export const bgColorType = (data) => {
  if (!data) {
    document.body.style = `background-color: #3C3C3C`;
  } else {
    document.body.style = `background-color: ${colorNameTypes(data)}`;
  }
};

export const colorNameTypes = (data) => {
  const type = data.types?.[0].type.name;
  return colorType[`${type}`];
};

export const colorType = {
  normal: '#AAB09F',
  fighting: '#CB5F48',
  flying: '#7DA6DE',
  poison: '#B468B7',
  ground: '#CC9F4F',
  rock: '#B2A061',
  bug: '#94BC4A',
  ghost: '#846AB6',
  steel: '#89A1B0',
  fire: '#EA7A3C',
  water: '#539AE2',
  grass: '#71C558',
  electric: '#E5C531',
  psychic: '#E5709B',
  ice: '#70CBD4',
  dragon: '#6A7BAF',
  dark: '#736C75',
  fairy: '#E397D1',
};

export const pokesFiltered = (pokes, search, page) => {
  if (search.length === 0) return pokes.data.slice(page, page + 24);

  const filtered = pokes.data.filter((e) => e.name.includes(search));

  return filtered.slice(page, page + 24);
};
