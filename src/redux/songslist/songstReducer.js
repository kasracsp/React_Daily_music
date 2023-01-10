const initialState = {
  playlist: [],
  playlistId: 0,
  currentSong: 0,
  isActive: false,
  isPlaying: false,
  category:''
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SONGS":
      return {
        ...state,
        playlist: action.payload.tracks,
        isActive: true,
        isPlaying: true,
        currentSong: action.payload.index,
        playlistId: action.payload.id,
        category:action.payload.category
      };
    case "CLEAR_SONGS":
      return {
        playlist: [],
        playlistId: 0,
        currentSong: 0,
        isActive: false,
        isPlaying: false,
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        isPlaying: action.payload,
      };
    case "AUTO_ENDED":
      return {
        ...state,
        currentSong: action.payload,
      };

    default:
      return state;
  }
};

export default songsReducer;
