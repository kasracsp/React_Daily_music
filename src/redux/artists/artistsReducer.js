const initialState={
  loading:false,
  artists:{},
  error:''
}

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTISTS_REQUSET":
      return {
        ...state,
        artists:{},
        loading: true,
        error:''
      };
    case "FETCH_ARTISTS_SUCCESS":
      return {
        ...state,
        loading: false,
        artists:action.payload,
        error: "",
      };
    case "FETCH_ARTISTS_FAILURE":
      return {
        ...state,
        loading: false,
        artists:{},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default artistsReducer;
