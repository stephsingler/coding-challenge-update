import React from 'react';
import PropTypes from 'prop-types';
//components
import MovieList from './MovieList';
//UI
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//react-router
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className="home">
      <div className="headline">
        <h1>My Movie Collection</h1>
        <Button variant="fab" color="primary" aria-label="add" component={Link} to="/AddMovie">
          <AddIcon />
        </Button>
      </div>
      <input value ={props.searchTerm} onChange={props.handleInputChange} placeholder="Search for a title..." />
      <MovieList state={props.state} deleteMovie={props.deleteMovie} handleMovie={props.handleMovie} />
    </div>
  );
};
Home.propTypes = {
  state: PropTypes.object,
  deleteMovie: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleMovie: PropTypes.func
}
export default Home;
