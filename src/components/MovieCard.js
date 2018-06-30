import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const MovieCard = props => {
  const { movie, index, renderRating } = props
  return (
    <Card className="movie-card">
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {movie.title}
        </Typography>
        <Typography gutterBottom component="p">
          {renderRating()}
        </Typography>
        <Typography gutterBottom component="ul">
          <li>Genre: {movie.genre}</li>
          <li>Actors: {movie.actors}</li>
          <li>Year: {movie.year}</li>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Delete" onClick={() => props.deleteMovie(index)}>
          <DeleteIcon  />
        </IconButton>
        <IconButton aria-label="Edit" component={Link} to="/Update" onClick={() => props.handleMovie(movie)}>
          <EditIcon  />
        </IconButton>
      </CardActions>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object,
  renderRating: PropTypes.func,
  deleteMovie: PropTypes.func,
  handleMovie: PropTypes.func
}
export default MovieCard;
