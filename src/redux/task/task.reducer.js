const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "TOGGLE_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default taskReducer;
