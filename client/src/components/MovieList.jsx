import React from 'react';
import MovieListItem from './MovieListItem.jsx'

// when you are not using the class, then you are using functional stateless component

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map(movie => <MovieListItem movie={movie} />)}
    </div>
  );
};

export default MovieList;
