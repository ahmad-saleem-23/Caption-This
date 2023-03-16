import React, { useState } from 'react'
import memes from '../data/meme'

export default function Meme() {
  function generateMeme() {
    const randMemeIndex = Math.floor(Math.random() * memes.images.length)
    const image = memes.images[randMemeIndex]
    return <img src={`./images/${image.link}`} alt={image.name} />
  }

  const [img, setimg] = useState(generateMeme())

  function handlechange() {
    const newImg = generateMeme()
    setimg(newImg)
  }

  return (
    <>
      <div className='meme-container'>
        {img}
      <div>
      <input
          type="text"
      
        />
        <button className ="meme-button" onClick={handlechange}>Submit Meme</button>   
        <button className ="meme-button" onClick={handlechange}>Generate Image</button>    
       
         
        </div>
         </div>
    </>
  )
}
