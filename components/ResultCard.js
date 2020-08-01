function ResultCard({ item }) {
  const {
    id,
    name,
    full_name,
    url,
    stargazers_count,
    language,
    license,
    forks,
  } = item;

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{full_name}</h2>
        <p>{stargazers_count}</p>
      </div>
    </div>
  );
}

export default ResultCard;
