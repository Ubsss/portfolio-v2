const initState = {
  darkMode: true,
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
    case "UPDATE_MODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
