const initialState={
  loading:false,
  songs:{},
  error:''
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SONGS_REQUSET":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SONGS_SUCCESS":
      return {
        ...state,
        loading: false,
        songs:action.payload,
        error: "",
      };
    case "FETCH_SONGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default songsReducer;
