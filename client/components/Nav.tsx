import { Link } from "react-router-dom";


export default function Nav() {
return (
  <div>
    <h2>Nav</h2>
    <ul>
      <Link to = {'/'}>
        <li>Home</li>
      </Link>
      <Link to = {'/gallery'}>
        <li>Gallery</li>
      </Link>
      <Link to = {'/captionthis'}>
      <li>Caption This</li>
      </Link>
      
    </ul>
  </div>
)
}

