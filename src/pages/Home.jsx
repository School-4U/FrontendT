import { Container } from "../components/styles/Container.styled"
import {Flex} from "../components/styles/Flex.styled"
import { Card } from "../components/styles/Card.styled";
import { Right, Middle, Left, Left2, Right2, WhyContainer, SubHeading, Grid, WhatContainer, Comments, Comments2, CommentImage} from "../components/styles/Home.styled"
import { FaSearch} from 'react-icons/fa';

export const Home = () => {
  return (
    <Container>
    <Flex>
        <Right>
            <h1>Let’s Help You <span>Find The</span> <br />Right School <span>Easily</span></h1>
            <p>School4u is a platform that helps parent match with schools that meet their criteria. Parents can input their preferences on the platform such as budget, location and many more </p>
            <div>
                <FaSearch /> What will you like to know <input type="search" placeholder="search"></input>
     
            </div>
        </Right>

        <Left>
        <img src="assets/lady2.jpg" alt="portrait-charming-friendly-polite-happy-african-american-adult-woman-blouse-tilting-head-smiling-broadly-showing-ok"></img>
        
        </Left>
    </Flex>

    <Flex>
    <Right2>
        <h2>2K+</h2>
        <p>Current Users</p>

    </Right2>
    <Middle>
    <h2>10</h2>
    <p>Current Partners</p>
    </Middle>
    <Left2>
        <h2>300+</h2>
        <p>Schools</p>
    </Left2>
    </Flex>

    <WhyContainer>Why Choose Us?</WhyContainer>
    <SubHeading>Check Out Some Of What Our Users Are Saying</SubHeading>
    <Grid>
        <Card>
            <h4>Saves Time</h4>
            <p>Helps save time in searching for a preferred school for your kids</p>

        </Card>
        <Card>
            <h4>Remote and On-site Research</h4>
            <p>The platform helps in conducting proper research for you in finding the appropriate school for your kids</p>

        </Card>
        <Card>
            <h4>Job Opportunities</h4>
            <p>With the use of this platform we are able to provide people with jobs who provide valuable information about the school</p>
        </Card>
        <Card>
            <h4>Job Opportunities</h4>
            <p>With the use of this platform we are able to provide people with jobs who provide valuable information about the school</p>
        </Card>
        <Card>
            <h4>Job Opportunities</h4>
            <p>With the use of this platform we are able to provide people with jobs who provide valuable information about the school</p>
       
        </Card>
        </Grid>
    <WhatContainer>
    
        <p>What People Say About Us?</p>
    <h3>Some reviews from some of our users</h3>
   
   <Flex>
    <Comments>
        <CommentImage src="assets/rename.png" alt='quote' />
        <h5>School4u has helped me save maximum time by providing the best means of finding a school for my kid</h5>
    
    </Comments>
    <Comments2>
    <CommentImage src="assets/rename.png" alt='quote' />
    <h5>School4u is one of the most innovative and helpful website I have come across in recent days</h5>
    </Comments2>
    <Comments>
    <CommentImage src="assets/rename.png" alt='quote' />
    <h5>School4u has changed my life. Now I dont have to worry about finding a suitable school for my kid because school4u has got me covered </h5>
    
    </Comments>
    </Flex>
    </WhatContainer>
    </Container>
  )
}
