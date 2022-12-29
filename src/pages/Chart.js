import React from 'react'
import { useParams } from 'react-router-dom'


const Chart = () => {
  const params=useParams()
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default Chart