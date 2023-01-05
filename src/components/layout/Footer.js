import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const playlistState=useSelector(state=>state.playlistState)
  console.log(playlistState)
  return (
    <div>
      {playlistState.isActive && 
      
      <audio src={playlistState.playlist[playlistState.currentSong].preview} controls autoplay={playlistState.isPlaying} play={playlistState.isPlaying} >it's not available</audio>
      }
    </div>
  )
}

export default Footer