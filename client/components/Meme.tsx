import React, { useState } from 'react'
import memes from '../data/meme'

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

export default function Meme({ Memes, setMemes }: Props) {
  // const [Memes, setMemes] = useState(memes)
  const [img, setimg] = useState(generateMeme())
  const [text, setText] = useState('')

  function generateMeme() {
    const randMemeIndex = Math.floor(Math.random() * Memes.images.length)
    const image = Memes.images[randMemeIndex]
    return image
  }

  function displayRandImg() {
    return (
      <>
        <div>
          <img src={`./images/${img.link}`} alt={img.name} />
          <div>
            {Memes.images[img.id - 1].comment.map((comment) => (
              <p className="comment" key={comment}>
                {comment}
              </p>
            ))}
          </div>
        </div>
      </>
    )
  }

  function handleGenerate() {
    const newImg = generateMeme()

    setimg(newImg)
  }

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
      if (img.id === meme.id) {
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
    <>
      <div className=" justify-center items-start h-screen w-full">
        <div className="w-full bg-green-400 p-[20px]">
          <h2 className="text-2xl text-center font-bold p-2">Add A Caption</h2>
        </div>
        <div className="w-full flex justify-center items-center p-20">
          <div className="meme-container">
            <>{displayRandImg()}</>
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

              <button
                className="meme-button generate-button"
                onClick={handleGenerate}
              >
                Generate Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//https://github.com/tohora-2023/code-from-class/blob/main/week4/wed-pm/1-two-inputs/client/components/AddAnimalForm.tsx
