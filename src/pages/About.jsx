import { Container } from "../components/styles/Container.styled";
import { ImageContainer, Content, Blue, Hero, Flex, Right, Left, Team, Mission, Contactleft, Flex2} from "../components/styles/About.styled";
import { Footer } from "../components/Footer";
import { Contact } from "./Contact";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";


export const About = () => {
  return (
    <Container >
      <ImageContainer id="about">
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
        <p>From the fantastic PMs, empathetic Designer to the awesome Developers, we all put the effort to go from just another idea to a solution You now interact with</p>
        <div className="">
          <h3>Meet The Team</h3>
        
          <Team>
            <div className="Members">
              <h5>Ifeoluwa Odewale</h5>
              <h6>Backend Developer</h6>
              <a href="https://www.linkedin.com/in/ifeoluwa-solomon-29b519136/">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Damilola Akinlolu</h5>
              <h6>Product Designer</h6>
              <a href="https://www.linkedin.com/in/damilola-akinlolu-bb204813b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Lamidi Morufat K.</h5>
              <h6>Frontend Developer</h6>
              <a href="https://www.linkedin.com/in/morufat-lamidi">
              <FaLinkedin/>
                </a>
                <a href="http://twitter.com/kamalehmk">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Ikechukwu Kalu</h5>
              <h6>Frontend Developer</h6>
              <a href="">
              <FaLinkedin/>
                </a>
                <a href="https://x.com/iyke4web">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Nwankwo Stephen</h5>
              <h6>Product Manager</h6>
              <a href="https://www.linkedin.com/in/stephen-nwankwo-749825209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin/>
                </a>
                <a href="https://x.com/NwankwoStephe15?t=fX9mK0W-nQyjwpD4LIt1xQ&s=09">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Elizabeth Ajiboye</h5>
              <h6>Product Manager</h6>
              <a href="">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Ayodele Alayemi</h5>
              <h6>Backend Developer</h6>
              <a href="">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Chikezie Chinweizu </h5>
              <h6>Product Manager</h6>
              <a href="https://www.linkedin.com/in/chikezie-chinweizu-583226241">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Amalachukwu Okafor</h5>
              <h6>Product Manager</h6>
              <a href="">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>Obi-Akwari Obinna Emmanuel </h5>
              <h6>Backend Developer</h6>
              <a href="https://www.linkedin.com/in/emmanuel-obi-9720451a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            <div className="Members">
              <h5>David Duke</h5>
              <h4>Product Manager</h4>
              <a href="https://www.linkedin.com/in/chikezie-chinweizu-583226241">
              <FaLinkedin/>
                </a>
                <a href="">
                <FaTwitterSquare/>
                </a>
               

            </div>
            </Team>
          </div>
        
        </Left>

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
      <Flex2 >
        <Contactleft id="contact">
        <h3>Contact Us</h3>
        <p>Let&apos;s have a talk</p>
        </Contactleft>
        <>
        <Contact/>
        </>
      </Flex2>
      <Footer />
    
    </Container>
  )
}
