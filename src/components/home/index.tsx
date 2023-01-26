import { Container } from "./styles"
import backgroundVideo from "../../assets/backgroundVideo.mp4"

const Home = () => {
  return (
    <Container>
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
    </Container>
  )
}

export default Home
