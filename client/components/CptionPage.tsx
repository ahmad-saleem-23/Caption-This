import React, { useState } from 'react'
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
  const [text, setText] = useState('')
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  const meme = Memes.images.find((meme) => meme.id === id)

  function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const comment = event.target.value
    setText(comment)
  }
  function clearInput() {
    setText('')
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const UpdatedImages = Memes.images.map((meme) => {
      if (id === meme.id) {
        console.log(meme)
        console.log({ ...meme, comment: [...meme.comment, text] })
        return { ...meme, comment: [...meme.comment, text] }
      } else {
        return meme
      }
    })

    const UpdatedMemes = { images: UpdatedImages }
    setMemes(UpdatedMemes)
    clearInput()
  }

  return (
    <div className=" justify-center items-start h-screen w-full">
      <div className="w-full bg-green-400 p-[20px]">
        <h2 className="text-2xl text-center font-bold p-2">Caption</h2>
      </div>
      <div className="w-full flex justify-center items-center p-20">
        <div className="meme-container">
          <img
            key={meme?.id}
            src={`/images/${meme?.link}`}
            alt={meme?.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="comment">{meme?.comment}</p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="comment"
              value={text}
              onChange={handlechange}
            />
            <button type="submit" className="meme-button submit-button">
              {' '}
              Submit Caption
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CaptionPage
