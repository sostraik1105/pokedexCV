const Movements = ({ data }) => {
  return (
    <article className='moves'>
      <h2>Movements</h2>
      <ul>
        {data.moves?.map((e, i) => (
          <li key={i}>{e.move.name}</li>
        ))}
      </ul>
    </article>
  );
};

export default Movements;
