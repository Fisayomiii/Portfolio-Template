import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Notfound from "./pages/Notfound"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/*" element={<Notfound/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
