import { Container } from "../components/styles/Container.styled";
import { ImageContainer, Content, Blue, Hero, Flex, Right, Left, Mission} from "../components/styles/About.styled";
import { Footer } from "../components/Footer";


export const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Content>
          <h1><span>&quot;Who&quot; </span><Blue>Is School</Blue> <span>4u?</span></h1>
          <p>Yes!, school<span> 4U</span> is a &quot;Who,&quot; not another mindless machine floating about in the net-space </p>
          <p>We are a team of creators who appreciate the vastness of human problems, but regardless we forge ahead tackle a fraction of this problems and provide practical solutions to them</p>
          <p>Our gaze turned to education and school 4U was born from that</p>

        </Content>
      </ImageContainer>
      <Hero>
      <h2><span>Our </span><Blue>Story</Blue></h2>
      
      <Flex>
        <Right>
        <img src="assets/hand.jpg" />
        
        </Right>
        <Left>
        <h3>&apos;Group 46 &apos;- very generic right?</h3>
        <p>But that&apos;s the colloquial umbrella we came under for a capstone project put together by <Blue><a href="https://devcareer.io/">DevCareer</a></Blue></p>
        <p>After months of intensive training, we were called upon to showcase our growth and, oh my!... <br/>School<span>4U</span> is a testament</p>
        <p>And here we are...</p>
        <p>From the fantastic PMs, empathetic Designer to the awesome Developers, we all put the effort to go from just another idea to a solution You now interact with</p></Left>

      </Flex>
      </Hero>
      <Mission>
        <Content>
          <h1><span>Our</span><Blue>Mission</Blue></h1>
          <p>Our mission is to help<span> You</span> achieve your goal! </p>
          <p>Why? Because we believe that touching a community starts by impacting an individual-You</p>
          <p>That&apos;s why School for you was designed to help you find the &quot;best-fit&quot; school... but with a <span>Smile</span> </p>

        </Content>
      </Mission>
      <Footer />
    
    </Container>
  )
}
