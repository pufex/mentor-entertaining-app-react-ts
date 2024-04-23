import {Route, Routes} from "react-router-dom"

import Nav from './components/Nav/Nav'

import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Shows from './pages/Shows/Shows'
import Bookmarked from './pages/Bookmarked/Bookmarked'
import Trailer from './pages/Trailer/Trailer'
import NotFound from './pages/NotFound/NotFound'

import Icons from './contexts/Icons'
import Media from "./contexts/Media"

import "./assets/App.css"

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
        <Route 
          path='/trailer/:id'
          element={<Trailer />}
        />
        <Route 
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </Icons>
  </Media>
}

export default App
