import { Container } from "../components/styles/Container.styled"
import {Flex} from "../components/styles/Flex.styled"
import { Card } from "../components/styles/Card.styled";
import { Right, Middle, Left, Left2, Center, Right2, WhyContainer, Text, SubHeading, Grid, Grid2, WhatContainer, Comments, Comments2, CommentImage, SearchB, Newsletter} from "../components/styles/Home.styled"
import { FaSearch, FaMailBulk} from 'react-icons/fa';
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <Container>
    <Flex>
        <Right>
            <h1>Let’s Help You <span>Find The</span> <br />Right School <span>Easily</span></h1>
            <p>School4u is a platform that helps parent match with schools that meet their<br/>criteria. Parents can input their preferences on the platform such as budget, location and many more </p>
            <SearchB>
                <FaSearch /> <input type="text" placeholder="What will you like to know"></input> <button type="search">Search</button>
     
            </SearchB>
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
            <img src="assets/Time.svg"/>
            <h4>Saves Time</h4>
            <p>Helps save time in searching for a preferred school for your kids</p>

        </Card>
        <Card>
        <img src="assets/Research Icon.svg"/>
            <h4>Remote and On-site Research</h4>
            <p>The platform helps in conducting proper research for you in finding the appropriate school for your kids</p>

        </Card>
        <Card>
        <img src="assets/Job.svg"/>
            <h4>Job Opportunities</h4>
            <p>With the use of this platform we are able to provide people with jobs who provide valuable information about the school</p>
        </Card>
        </Grid>
        <Grid2>
        <Card>
        <img src="assets/Tech.svg"/>
            <h4>Job Opportunities</h4>
            <p>With the use of this platform we are able to provide people with jobs who provide valuable information about the school</p>
        </Card>
        <Card>
        <img src="assets/Community.svg"/>
            <h4>Job Opportunities</h4>
            <p>With the use of this platform we are able to provide people with jobs who provide valuable information about the school</p>
       
        </Card>
        </Grid2>
    <WhatContainer>
        <p>What People Say About Us?</p>
    <h3>Some reviews from some of our users</h3>
   
   <Flex>
    <Comments>
        <CommentImage src="assets/rename.png" alt='quote' />
        <h5>School4u has helped me save maximum time by providing the best means of finding a school for my kid</h5>
        
    
    </Comments>
    <hr />
    <Comments2>
    <CommentImage src="assets/rename.png" alt='quote' />
    <h5>School4u is one of the most innovative and helpful website I have come across in recent days</h5>
   
    </Comments2>
    <hr />
    <Comments>
    <CommentImage src="assets/rename.png" alt='quote' />
    <h5>School4u has changed my life. Now I do not have to worry about finding a suitable school for my kid because school4u has got me covered </h5>
    
    </Comments>
    <hr />
    </Flex>
    </WhatContainer>
    <WhyContainer>Frequently Asked Questions</WhyContainer>
    <SubHeading>Check Some frequently asked questions by Our Users</SubHeading>
    <Faq />
    <WhyContainer>Newsletter</WhyContainer>
    <Text>Subscribe to our newsletter to get important updates on new schools that might meet your criteria. We offer the <br /> best solutions for difficulties in finding a desired school</Text>
    <Center>
    <Newsletter>
                <FaMailBulk /> <input type="email" placeholder="mallymirabel@gmail.com"></input> <button type="search">Subscribe</button>
     
            </Newsletter>
    </Center>
   <Footer />
    </Container>
  )
}
