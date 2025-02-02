import React from "react";

import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";
import { connect } from "react-redux";

const MovieList = (props) => {
  const { movies } = props;

  console.log(props);

  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Metascore</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {props.movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>

      <MovieFooter totalMovies={props.movies.length} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: state.movies.movies,
    favorites: state.favorites.favorites,
    appTitle: state.movies.appTitle,
  };
};

export default connect(mapStateToProps, {})(MovieList);
