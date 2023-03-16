import React, { useState } from 'react'
import memes from '../data/meme'


export default function Meme() {
  function generateMeme() {
    const randMemeIndex = Math.floor(Math.random() * memes.images.length)
    const image = memes.images[randMemeIndex]
    setimg(image)
    
  }

  function displayRandImg(){
    return <img src={`./images/${img.link}`} alt={img.name} />
  }

  const [Memes, setMemes] = useState(Memes)
  const [img, setimg] = useState(generateMeme())
  const[text, setText] = useState('')

  function handleGenerate() {
    const newImg = generateMeme()
    setimg(newImg)
  }
  function handlechange(event:React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault(); 
    const comment=event.target.value  
    setText(comment)
  }
  function handelSubmit(){
   const newComment= Memes.images.map((meme)=>{
    if ( img.id === meme.id){

    }
   })
  }

  return (
    <>
      <div className="meme-container">
        {img}

        <div>
          <form onSubmit={handelSubmit}>
          
          <input type="text" 
            name='comment'           
            value={text}
            onChange={handlechange}/>
            <button  type='submit'>  Submit CaptionReact
            </button>
          </form>

          <button className="meme-button generate-button" onClick={handleGenerate}>
            Generate Image
          </button>
        </div>
      </div>
    </>
  )
}


//https://github.com/tohora-2023/code-from-class/blob/main/week4/wed-pm/1-two-inputs/client/components/AddAnimalForm.tsx
