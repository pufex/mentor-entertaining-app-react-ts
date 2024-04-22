import "./assets/App.css"
import {Route, Routes} from "react-router-dom"

import Nav from './components/Nav/Nav'

import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Shows from './pages/Shows/Shows'
import Bookmarked from './pages/Bookmarked/Bookmarked'

import Icons from './contexts/Icons'
import Media from "./contexts/Media"

function App() {

  return <Media>
    <Icons>
      <Nav />
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/movies'
          element={<Movies />}
        />
        <Route 
          path='/tv-shows'
          element={<Shows />}
        />
        <Route 
          path='/bookmarked'
          element={<Bookmarked />}
        />
      </Routes>
    </Icons>
  </Media>
}

export default App
