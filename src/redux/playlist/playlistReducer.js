const initialState = {
  playlist: [],
  currentSong: 0,
  shuffle: false,
  isActive: false,
  isPlaying: false,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
        currentSong: 0,
        isActive: true,
        isPlaying: true,
      };

    default:
      return state;
  }
};

export default playlistReducer;
