import {} from "react"
import { ArtistText, ContactText, Container, PortfolioText } from "./styles"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <Container>
      <Link to="/">
        <ArtistText>ARTISTA</ArtistText>
      </Link>
      <Link to="contact">
        <ContactText>ENTRE EM CONTATO</ContactText>
      </Link>
      <Link to="portfolio">
        <PortfolioText>PORTFÓLIO</PortfolioText>
      </Link>
    </Container>
  )
}

export default Header
