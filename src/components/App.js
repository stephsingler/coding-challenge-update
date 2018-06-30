import React, { Component } from 'react';

//components
import Home from './Home';
import AddMovie from './AddMovie';
import Update from './Update';
//react-router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      searchTerm: "",
      movie: {}
    }
  }
  componentDidMount = () => {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }
  componentWillUnmount = () => {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }
  hydrateStateWithLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }
  saveStateToLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  handleInputChange = e => {
    this.setState({searchTerm: e.target.value.toLowerCase()})
  }
  handleAddMovie = newMovie => {
    this.setState({movieList: [...this.state.movieList, newMovie]})
  }
  handleDeleteMovie = index => {
    this.setState({ movieList: [...this.state.movieList.slice(0, index), ...this.state.movieList.slice(index +1)]})
  }
  handleMovie = movie => {
    this.setState({movie})
  }
  handleUpdate = newState => {
    const movieIndex = this.state.movieList.indexOf(this.state.movie);
    return Object.assign(this.state.movieList[movieIndex], newState);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props => <Home {...props}
            state={this.state}
            deleteMovie={this.handleDeleteMovie} handleInputChange={this.handleInputChange}
            handleMovie={this.handleMovie}
          />}
          />
          <Route path="/AddMovie" render={props => <AddMovie {...props}
            addMovie={this.handleAddMovie} />}
          />
          <Route path="/Update" render={props => <Update {...props}
            movie={this.state.movie}
            handleUpdate={this.handleUpdate}/>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
