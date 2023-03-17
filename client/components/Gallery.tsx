import React, { useState } from 'react'
import Memes from '../data/meme'

//get a list of images
//display the images to the grid
//display comments

//Stretch
//create a link back to the meme page
//http://localhost:3000/captionthis/:id

interface Image {
  id: number
  name: string
  link: string
  comment: string[]
}

interface Memes {
  images: Images[]
}

export default function Gallery() {
  const [memeData, setMemes] = useState(Memes)

  return (
    <div>
      <h2>Gallery</h2>
      <div>
        {memeData.images.map((image: Image) => {
          return (
            <img
              key={image.id}
              src={`./images/${image.link}`}
              alt={image.name}
            />
          )
        })}
      </div>
    </div>
  )
}
