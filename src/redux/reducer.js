const initState = {
  darkMode: true,
  connect: { email: "", phone: "", type: "comment", message: "" },
  notification: {
    show: false,
    title: "",
    messages: [],
    buttonText: "",
    advice: null,
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
    case "UPDATE_ADVICE":
      return {
        ...state,
        advice: action.payload,
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
