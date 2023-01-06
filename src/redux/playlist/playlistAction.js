const setPlaylist=(list)=>{
  return{
    type:"SET_PLAYLIST",
    payload:list
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

export {setPlaylist,playPause,autoEnded}

