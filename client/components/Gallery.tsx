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
      <div className="gallery-container" key="gallery-container">
        {memeData.images.map((image: Image) => {
          return (
            <>
              <div className="gallery-item">
                <img
                  key={image.id}
                  src={`./images/${image.link}`}
                  alt={image.name}
                  className="gallery-image"
                />
                <ul className="comments">
                  {image.comment.map((comment, index) => {
                    return (
                      <li className="comment-item" key={index}>
                        {comment}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
