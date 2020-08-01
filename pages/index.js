import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Components
import Title from '../components/Title';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title title='Search more than 57M users' />
      <Search />
    </div>
  );
}
