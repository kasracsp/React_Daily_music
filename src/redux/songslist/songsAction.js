const setSongs=(list)=>{
  return{
    type:"SET_SONGS",
    payload:list
  }
}
const clearSongs=()=>{
  return{
    type:"CLEAR_SONGS"
  }
}
const playPause=(condition)=>{
  return{
    type:"PLAY_PAUSE",
    payload:condition,
  }
}
const autoEnded=(index)=>{
  return{
    type:"AUTO_ENDED",
    payload:index
  }
}

export {setSongs,clearSongs,playPause,autoEnded}

