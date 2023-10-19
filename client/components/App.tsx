import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Gallery from './Gallery'
import Meme from './Meme'
import memes from '../data/meme'
import { useState } from 'react'
import CaptionPage from './CptionPage'

function App() {
  const [Memes, setMemes] = useState(memes)

  return (
    <>
      <div className="bg-green-500 h-screen">
        {/* <Header /> */}
        <div className="flex flex-row 
 h-full
        ">
          <Nav />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/gallery"
                element={<Gallery MemeData={Memes} setMemes={setMemes} />}
              />
              <Route
                path="/captionthis"
                element={<Meme Memes={Memes} setMemes={setMemes} />}
              />
              <Route
                path="/captionthis/:id"
                element={<CaptionPage Memes={Memes} setMemes={setMemes} />}/> 
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
