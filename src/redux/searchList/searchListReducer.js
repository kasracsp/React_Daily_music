const initialState = {
  loading: false,
  searchList: [],
  error: "",
};

const searchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCHLIST_REQUSET":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SEARCHLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        searchList: [...action.payload],
        error: "",
      };
      case "FETCH_SEARCHLIST_FAILURE":
        return {
          ...state,
        loading: false,
        error: action.payload,
      };
    case "CLEAR_SEARCHLIST_FAILURE":
      return {
        ...state,
        loading: false,
        searchList: [],
        error: false,
      };

    default:
      return state;
  }
};

export default searchListReducer;
