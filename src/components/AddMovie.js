import React, { Component } from 'react';
import PropTypes from 'prop-types';
//react-router
import { Link } from 'react-router-dom';
//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      rating: "",
      actors: "",
      year: ""
    }
  }

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value,
   });
  };

  render() {
    const newMovie = this.state;
    return (
      <div className="add-movie">
        <Paper className="col-sm-6 field" elevation={5}>
          <h3>Add Movie to My Collection</h3>
          <form>
            <TextField
              required
              id="title"
              label="Title"
              className="movie-input"
              value={this.state.title}
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <TextField
              id="genre"
              label="Genre"
              className="movie-input"
              value={this.state.genre}
              onChange={this.handleChange('genre')}
              margin="normal"
            />
            <TextField
              id="rating"
              label="Rating"
              className="movie-input"
              value={this.state.rating}
              onChange={this.handleChange('rating')}
              margin="normal"
            />
            <TextField
              id="actors"
              label="Actors"
              className="movie-input"
              value={this.state.actors}
              onChange={this.handleChange('actors')}
              margin="normal"
            />
            <TextField
              id="year"
              label="Year"
              className="movie-input"
              value={this.state.year}
              onChange={this.handleChange('year')}
              margin="normal"
            />
          </form>
          <Button variant="fab" size="small" color="primary" aria-label="add" onClick={() => this.props.addMovie(newMovie)} component={Link} to="/">
            <AddIcon />
          </Button>
        </Paper>
      </div>
    );
  }
};
AddMovie.propTypes = {
  addMovie: PropTypes.func
}
export default AddMovie;
