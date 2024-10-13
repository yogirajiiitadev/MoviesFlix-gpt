import React from 'react'

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'> {original_title} </h1>
        <p className='py-6 text-lg w-2/5'> {overview} </p>
        <div className=''>
            <button className='bg-white text-black p-3 px-12 text-xl rounded-lg font-bold hover:opacity-80'>Play ▶</button>
            <button className='bg-gray-300 text-white p-3 px-12 text-lg rounded-lg mx-2 bg-opacity-30'>More Info ℹ️</button>
        </div>
    </div>
  )
}

export default VideoTitle