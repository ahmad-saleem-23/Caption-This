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

export default function Meme() {
  // const [Memes, setMemes] = useState(Memes)
  const [img, setimg] = useState(generateMeme())
  // const [imgData, setImageData] = useState({})
  // const[text, setText] = useState('')

  function generateMeme() {
    const randMemeIndex = Math.floor(Math.random() * memes.images.length)
    const image = memes.images[randMemeIndex]
    return image
  }

  //get a random image
  //save the image to state (save the id in state)
  // show the image
  // get the image id from state to add a comment

  const currentImg = function displayRandImg() {
        return (
      <>
        <img src={`./images/${img.link}`} alt={img.name} />
      </>
    )
  }

  function handleGenerate() {
    const newImg = generateMeme()
    console.log(newImg)
    setimg(newImg)
  }

  // function handlechange(event:React.ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault();
  //   const comment=event.target.value
  //   setText(comment)
  // }
  // function handelSubmit(){
  //  const newComment= Memes.images.map((meme)=>{
  //   if ( img.id === meme.id){

  //   }
  //  })
  // }

  return (
    <>
      <div className="meme-container">
        <>{currentImg()}</>
        <div>
          {/* <form onSubmit={handelSubmit}>
          
          <input type="text" 
            name='comment'           
            value={text}
            onChange={handlechange}/>
            <button  type='submit'>  Submit CaptionReact
            </button>
          </form> */}

          <button
            className="meme-button generate-button"
            onClick={handleGenerate}
          >
            Generate Image
          </button>
        </div>
      </div>
    </>
  )
}

//https://github.com/tohora-2023/code-from-class/blob/main/week4/wed-pm/1-two-inputs/client/components/AddAnimalForm.tsx
