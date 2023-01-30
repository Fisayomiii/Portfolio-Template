import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
