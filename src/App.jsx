import { Link, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Photoshoots from "./pages/Photoshoots"
import Events from "./pages/Events"

function App() {
  return (
    <div>
      <header className="header">
        <h1>Andini Faramita</h1>

        <nav>
          <Link to="/">About</Link>
          <Link to="/photoshoots">Photoshoots</Link>
          <Link to="/events">Events</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photoshoots" element={<Photoshoots />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  )
}

export default App