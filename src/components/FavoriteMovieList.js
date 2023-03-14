import React from "react";
import { connect } from "react-redux";
import { toggleFavorites, addFavorite, removeFavorite } from "../actions/favoritesActions";

import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const { favorites, removeFavorite } = props;

  console.log(props);

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
              {movie.title}
              <span>
                <span
                  class="material-icons"
                  onClick={() => {
                    removeFavorite(movie.id);
                  }}
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, { toggleFavorites: toggleFavorites, addFavorite: addFavorite, removeFavorite: removeFavorite })(FavoriteMovieList);
