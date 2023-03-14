import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return { favorites: [...state.favorites, action.payload] };
    }

    case REMOVE_FAVORITE: {
      return { favorites: state.favorites.filter((item) => action.payload !== item.id) };
    }

    case TOGGLE_FAVORITES: {
      return { ...state, displayFavorites: !displayFavorites };
    }

    default:
      return state;
  }
};

export default reducer;
