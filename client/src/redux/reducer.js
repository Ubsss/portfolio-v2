const initState = {
  darkMode: false,
  connect: {},
  notification: {},
  game: {},
  currentView: "home",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_VIEW":
      return {
        ...state,
        currentView: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
