const initialState={
  loading:false,
  albums:{},
  error:''
}

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUMS_REQUSET":
      return {
        ...state,
        albums:{},
        loading: true,
        error:''
      };
    case "FETCH_ALBUMS_SUCCESS":
      return {
        ...state,
        loading: false,
        albums:action.payload,
        error: "",
      };
    case "FETCH_ALBUMS_FAILURE":
      return {
        ...state,
        loading: false,
        albums:{},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer;
