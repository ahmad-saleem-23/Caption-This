import { Link } from 'react-router-dom'
import Header from './Header'

export default function Nav() {
  return (
    <>
      <div className="flex flex-col bg-green-400 w-48  h-screen">
        <Header />
        <div className="flex flex-col bg-green-400 w-48  h-screen">
          <h2 id="nav-header" className="text-white text-2xl font-bold p-4">
            Menu
          </h2>
          <line className="bg-white h-0.5 w-full" />

          <ul className="flex-grow">
            <Link
              to={'/'}
              className="block py-2 px-4 text-white hover:bg-green-500"
            >
              <li>Home</li>
            </Link>
            <Link
              to={'/gallery'}
              className="block py-2 px-4 text-white hover:bg-green-500"
            >
              <li>Gallery</li>
            </Link>
            <Link
              to={'/captionthis'}
              className="block py-2 px-4 text-white hover:bg-green-500"
            >
              <li>Caption This</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}
