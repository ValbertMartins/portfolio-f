import Header from "./components/header"
import Home from "./components/home"
import { GlobalStyles } from "./styles/global"
import { Routes, Route } from "react-router-dom"
import { Container } from "./styles/App"
import Contact from "./components/contact"
import Artist from "./components/artist"
import Portfolio from "./components/portfolio"
function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="artist"
          element={<Artist />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="portfolio"
          element={<Portfolio />}
        />
      </Routes>
    </Container>
  )
}

export default App
