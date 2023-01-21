import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import MovieList from '@/components/MovieList';

//import styles from '@/styles/Home.module.css';

const fetchMovies = async () => {
  let url = 'https://swapi.dev/api/films/?format=json';
  const res = await fetch(url);
  const json = await res.json();

  return json.results;
};

export default function Home({ movies }) {
  const [sortByValue, setSortByValue] = useState(false);
  const [searchByString, setSearchByString] = useState('');

  return (
    <>
      <Head>
        <title>Star Wars</title>
        <meta name='description' content='Star Wars' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header
        setSortByValue={(e) => setSortByValue(e)}
        setSearchByString={(e) => setSearchByString(e)}
      />
      <MovieList
        movies={movies}
        sortByValue={sortByValue}
        searchByString={searchByString}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const movies = await fetchMovies();
  return {
    props: { movies }, // will be passed to the page component as props
  };
}
