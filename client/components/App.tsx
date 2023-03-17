import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Gallery from './Gallery'
import Meme from './Meme'
import memes from '../data/meme'
import { useState } from 'react'

function App() {
  const [Memes, setMemes] = useState(memes)

  return (
    <>
      <Header />
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/captionthis" element={<Meme Memes={Memes} setMemes={setMemes}/>} />
        </Routes>
      </div>
    </>
  )
}


export default App
