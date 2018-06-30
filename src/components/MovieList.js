import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
//components
import MovieCard from './MovieCard';

const MovieList = props => {
  const { movieList, searchTerm } = props.state
  const filteredMovies = movieList.filter(
    (movie) => {
      return movie.title.toLowerCase().indexOf(searchTerm) !== -1;
    }
  );
  const renderMovies = () => {
    return filteredMovies.map((movie, index) => {
      const renderRating = () => {
        const stars = []
        for(let i = 0; i < movie.rating; i++) {
          stars.push(i);
        }
        return stars.map((star, index) => {
          return (
            <Icon key={index} color="primary" style={{fontSize: 18}}>star</Icon>
          );
        });
      }
      return (
        <div key={index}>
          <MovieCard movie={movie} index={index} renderRating={renderRating} deleteMovie={props.deleteMovie} handleMovie={props.handleMovie} />
        </div>
      );
    });
  }
  return (
    <div className="movie-list">
      {renderMovies()}
    </div>
  );
};
MovieList.propTypes = {
  state: PropTypes.object,
  deleteMovie: PropTypes.func,
  handleMovie: PropTypes.func
}
export default MovieList;
