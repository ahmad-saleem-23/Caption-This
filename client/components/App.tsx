import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Gallery from './Gallery'
import Meme from './Meme'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="main">
       
       
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/captionthis' element={<Meme/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
