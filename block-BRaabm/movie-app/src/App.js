import React from 'react';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
  }

  handleClick = (event, movie) => {
    this.setState({
      movie: movie.Title,
    });
  };

  render() {
    return (
      <>
        <h1>Movie App</h1>
        {data.map((movie) => {
          return (
            <div className="movie">
              <h1>
                <a href="#a">{movie.Title}</a>
              </h1>
              <img src={movie.Images[0]} alt={movie.Title} />
              <p>Released Date-{movie.Released}</p>

              <div className="show">
                <h2>
                  <a
                    onClick={(event) => this.handleClick(event, movie)}
                    href="#a"
                  >
                    More Info
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
