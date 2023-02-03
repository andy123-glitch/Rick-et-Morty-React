let initialState = {
  user: {
    password: "",
    email: "",
    token: ""
  },
  favorites:25
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
    const { favorites } = action.payload;
    return {
      ...state,
      favorites:favorites
    }
  }
  // sinon on retourne le state sans le changer
  return state;
}