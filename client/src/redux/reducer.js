const initState = {
  darkMode: true,
  connect: { email: "", phone: "", type: "", message: "" },
  notification: {
    show: false,
    title: "",
    messages: [],
    buttonText: "",
  },
  game: {
    playing: false,
    leaderBoard: [], // { player: "Uboh", score: 83 }
  },
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
    case "UPDATE_NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    case "UPDATE_CONNECT":
      return {
        ...state,
        connect: action.payload,
      };

    case "UPDATE_GAME":
      return {
        ...state,
        game: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
