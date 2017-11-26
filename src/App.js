import React, { Component } from "react";
import logo from "./spiderman.jpg";
import MoviesList from "./MoviesList.jsx";
import { Container, Title, Content } from "bloomer";
import "bulma/css/bulma.css";
import "./App.css";
import MOVIE_DATA from "./MOVIE_DATA";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: "",
      loading: true
    };
  }

  // Simulate asynchronous feeling for user
  sleep(ms) {
    return new Promise(function(resolve) {
      return setTimeout(resolve, ms);
    });
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  async componentDidMount() {
    const results = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=11&language=en-US&api_key=b0e53c16a13148a3ffc087078f52673f"
    );
    const data = await results.json();
    this.movies = data.results;
    await this.sleep(4000);
    this.setState({
      movies: this.movies,
      loading: false
    });
  }

  render() {
    let filteredMovies = this.state.movies.filter(movie => {
      return (
        movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    let content;
    if (this.state.loading) {
      content = (
        <h1>
          <div id="fountainG">
            <div id="fountainG_1" className="fountainG" />
            <div id="fountainG_2" className="fountainG" />
            <div id="fountainG_3" className="fountainG" />
            <div id="fountainG_4" className="fountainG" />
            <div id="fountainG_5" className="fountainG" />
            <div id="fountainG_6" className="fountainG" />
            <div id="fountainG_7" className="fountainG" />
            <div id="fountainG_8" className="fountainG" />
          </div>
        </h1>
      );
    } else {
      content = <MoviesList movies={filteredMovies} />;
    }
    return (
      <Container>
        <div className="App container">
          <br />
          <br />
          <Container>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Title isSize={3}>Coderschool React 2017-Assignment 1</Title>
            </header>
          </Container>
          <br />
          <br />
          <Container>
            <input
              placeholder="Type your favourite movie's name here..."
              className="input"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </Container>
          <br />
          <br />
          <Container>
            <Content isSize="small">{content}</Content>
          </Container>
        </div>
      </Container>
    );
  }
}

export default App;
