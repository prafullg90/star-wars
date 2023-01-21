import { useState } from 'react';

import styles from './MovieList.module.scss';

const sortMovies = (list, key) => {
  return list.sort((a, b) => {
    if (new Date(a) !== 'Invalid Date') {
      let dateA = new Date(a[key]);
      let dateB = new Date(b[key]);
      return dateA > dateB ? 1 : -1;
    } else if (a[key] === b[key]) return 0;
    else return a[key] > b[key] ? 1 : -1;
  });
};

const filterMovies = (list, text) => {
  return list.filter((x) => {
    return x.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 ? x : null;
  });
};

const romanize = (num) => {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(''),
    key = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
    ],
    roman = '',
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
};

const MovieList = ({ movies, sortByValue, searchByString }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const renderMovies = () => {
    if (movies?.length > 0) {
      let movieLists = sortByValue
        ? sortMovies([...movies], sortByValue)
        : movies;
      if (searchByString)
        movieLists = filterMovies([...movieLists], searchByString);
      return movieLists.map((movie, i) => {
        return (
          <div
            className={styles.movieRow}
            key={movie.episode_id}
            onClick={() => setSelectedMovie(i)}
          >
            <span className={styles.columnleft}>
              EPISODE {movie.episode_id}
            </span>
            <span className={styles.columnmiddle}>{`EPISODE ${romanize(
              movie.episode_id
            )}- ${movie.title}`}</span>
            <span className={styles.columnright}>{movie.release_date}</span>
          </div>
        );
      });
    } else return <div className={styles.loading}>Loading...</div>;
  };

  const renderDescription = () => {
    if (typeof selectedMovie === 'number') {
      return (
        <div className={styles.movieDescription}>
          <h3>{movies[selectedMovie].title}</h3>
          <div>{movies[selectedMovie].opening_crawl}</div>
          <h5>Directed by: {movies[selectedMovie].director}</h5>
        </div>
      );
    } else return <div className={styles.noMovie}>No movie selected</div>;
  };

  return (
    <div className={styles.moviesList}>
      <div className={styles.movies}>{renderMovies()}</div>
      <div className={styles.movieDescription}>{renderDescription()}</div>
    </div>
  );
};
export default MovieList;
