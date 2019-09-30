import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component { // this creates a child of React.Component and inherits all methods from it
  constructor(props) {
    super(props); // adds properties to our THIS object
    this.state = {
      movies: [] // doing this because map is looking for an array of movie objects
    }
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies() {
    Axios.get('/movies')
      .then((movies) => {
        this.setState ({
          movies: movies.data
        })
      })
  }

  componentDidMount () {
    this.getMovies()
  }

  render () {
    return ( // React can only render a single element so if you want multiple you need to wrap them into one div
      <div>
        <div>
        <MovieList  movies={this.state.movies} />
        </div>
        <div>
          hello
        </div>
      </div>
    )
  }
};



export default App;