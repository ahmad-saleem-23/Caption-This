import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
  images: Image[]
}
interface Props {
  MemeData: Memes
  setMemes: React.Dispatch<React.SetStateAction<Memes>>
}

export default function Gallery({ MemeData, setMemes }: Props) {
  //const [MemeData, setMemes] = useState(MemeData)

  return (
    <div className=" justify-center   w h-screen">
      <div className="w-full bg-green-400 p-[20px]">
        <h2 className="text-2xl text-center font-bold p-2">Gallery</h2>
      </div>
      <div
        className=" mt-20 flex flex-wrap justify-center items-center
      "
        key="gallery-container"
      >
        {MemeData.images.map((image: Image) => {
          return (
            <>
              <div
                className="relative w-[260px] h-[260px] p-[10px]"
                key={image.id}
              >
                <Link to={`/captionthis/${image.id}`}>
                  <img
                    key={image.id}
                    src={`./images/${image.link}`}
                    alt={image.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </Link>
                {/* <ul className="comments">
                  {image.comment.map((comment, index) => {
                    return (
                      <li className="" key={index}>
                        {comment}
                      </li>
                    )
                  })}
                </ul> */}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
