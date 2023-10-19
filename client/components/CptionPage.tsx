import React from 'react'
import { useParams } from 'react-router-dom'

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
  Memes: Memes
  setMemes: React.Dispatch<React.SetStateAction<Memes>>
}

const CaptionPage = ({ Memes, setMemes }: Props) => {
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  console.log(id)
  const meme = Memes.images.find((meme) => meme.id === id)
  console.log(meme)
  console.log(`/images/img-2.gif`)

  return (
    <div className=" justify-center items-start h-screen">
      <div className="w-full bg-green-400 p-[20px]">
        <h2 className="text-2xl text-center font-bold p-2">Home</h2>
      </div>

      <div className="w-full flex justify-center items-center p-20">
          <div className="meme-container">
        <img
          key={meme?.id}
          src={`/images/${meme?.link}`}
          alt={meme?.name}
          className="w-full h-full object-cover rounded-2xl"
        />
        </div>
      </div>
    </div>
  )
}

export default CaptionPage
