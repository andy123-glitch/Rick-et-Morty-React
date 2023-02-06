let initialState = {
  user: {
    password: "test",
    email: "test",
    token: "test"
  },
  favorites:[2,3,4,5,6,8]
};

export default function app(state = initialState, action) {
  if (action.type === "changeUser") {
    const { user } = action.payload;
    return {
      // on déstructure le state précédent, c'est à dire que l'on
      // copie toutes ses propriété dans notre nouvel objet
      ...state,
      user: user
    };
  }else if (action.type === "addFavorite") {
    const { favorite } = action.payload;
    
    return {
      ...state,
      favorites:[...state.favorites,favorite]

    }
  }else if (action.type === "delFavorite") {
    //const { favorite } = action.payload;
    
    return {
      ...state,
      favorites:state.favorites.filter(favorite=>action.payload.favorite!==favorite)

    }
  }
  // sinon on retourne le state sans le changer
  return state;
}