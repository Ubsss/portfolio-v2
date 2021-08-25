const initState = {
  darkMode: true,
  connect: { email: "", phone: "", type: "", message: "" },
  notification: {
    show: true,
    title: "Test title",
    messages: ["please provide something", "issue 2"],
    buttonText: "Got it!",
    closeAction: function () {
      console.log("notifications callback");
    },
  },
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
    default:
      return state;
  }
};

export default reducer;
