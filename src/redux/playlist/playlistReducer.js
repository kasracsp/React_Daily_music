const initialState = {
  playlist: [],
  playlistId:0,
  currentSong: 0,
  shuffle: false,
  isActive: false,
  isPlaying: false,
  isMuted:false,
  volume:0.5,
  repeat:false,
  repeateOne:false,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.payload.tracks,
        isActive: true,
        isPlaying: true,
        currentSong: action.payload.index,
        playlistId:action.payload.id,
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        isPlaying: action.payload,
      };
    case "AUTO_ENDED":
      return {
        ...state,
        currentSong:action.payload,
      };

    default:
      return state;
  }
};

export default playlistReducer;
