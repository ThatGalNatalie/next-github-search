import styles from '../styles/ResultCard.module.css';

function ResultCard({ item }) {
  const {
    name,
    full_name,
    html_url,
    stargazers_count,
    language,
    forks_count,
    description,
  } = item;

  return (
    <div className={styles.result_card}>
      <div>
        <h1>
          <a className={styles.card_link} href={html_url}>
            {name}
          </a>
        </h1>

        <h2>{full_name}</h2>
        <p>⭐️{stargazers_count}</p>
        <p>🍴{forks_count}</p>
        <p>{description}</p>
        <div>{language}</div>
      </div>
    </div>
  );
}

export default ResultCard;
