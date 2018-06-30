import React, { Component } from 'react';
import PropTypes from 'prop-types';
//react-router
import { Link } from 'react-router-dom';
//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.movie.title,
      genre: this.props.movie.genre,
      rating: this.props.movie.rating,
      actors: this.props.movie.actors,
      year: this.props.movie.year
    }
  }

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value,
   });
  };

  render() {
    const newState = this.state;
    return (
      <div className="add-movie">
        <Paper className="col-sm-6 field" elevation={5}>
          <h3>Update Movie</h3>
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
          <Button variant="fab" size="small" color="primary" aria-label="update" component={Link} to="/" onClick={() => this.props.handleUpdate(newState)} >
            Update Movie
          </Button>
        </Paper>
      </div>
    );
  }
};
Update.propTypes = {
  movie: PropTypes.object,
  handleUpdate: PropTypes.func
}
export default Update;
