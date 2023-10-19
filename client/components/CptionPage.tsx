import React from 'react'

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
interface IdProps {
  id: number}

const CaptionPage = ({id}:IdProps,{ Memes, setMemes }: Props) => {
  const meme= Memes.images.find((meme) => meme.id === id)
  return <div></div>
}

export default CaptionPage
