const initialState={
  loading:false,
  playlists:{},
  error:''
}

const playlistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLAYLISTS_REQUSET":
      return {
        ...state,
        playlists:{},
        loading: true,
        error:''
      };
    case "FETCH_PLAYLISTS_SUCCESS":
      return {
        ...state,
        loading: false,
        playlists:action.payload,
        error: "",
      };
    case "FETCH_PLAYLISTS_FAILURE":
      return {
        ...state,
        loading: false,
        playlists:{},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default playlistsReducer;
