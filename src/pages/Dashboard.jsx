
  import {  FaBookOpen, FaClock, FaHome, FaThLarge, FaUserCircle, FaCommentAlt } from "react-icons/fa";
import { Container } from "../components/styles/Container.styled";
  import { Link, Route } from "react-router-dom";
  import { StyledDashboard, Sidebar, Main, Top, Right, Left, Home, User, Middle, Card, FirstCard, Active, Messages, StyledButtons, ImageContainer, ImageContainer2} from "../components/styles/Dashboard.styled";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faStar  } from '@fortawesome/free-solid-svg-icons';
  import { useLocation } from "react-router-dom";


  export const Dashboard = () => {
    //let data2 = route.params.state
    const location = useLocation();
    const data = location.state;
    
    return (
      <div>
    
            <Container>

                <StyledDashboard>

                    <Sidebar>
                        <Active>
                        <FaThLarge />
                        <h3>Dashboard</h3>
                        </Active>

                        <>
                        <FaCommentAlt />
                        <h3>Message</h3>
                        </>
                        <>
                        <FaBookOpen/>
                        <h3>Courses</h3>
                        </>
                        <>
                        <FaClock/>
                        <h3>History</h3> 
                        </>

                    </Sidebar>
                    <Main>
                        <Top>
                            <Right>
                            <img src="assets/logo.png" alt="Logo for School 4u" />
                            </Right>
                            <Left>
                                <Home>
                                <FaHome />
                                <Link to="/">
                                <h3>Home</h3>
                                </Link>
                                
                                </Home>
                                <User>
                                <FaUserCircle />
                                <h3>{data.firstName}</h3>
                                </User>
                            </Left>
                           
                            </Top>
                    
                        <Middle>
                            <Card>
                                <FirstCard>
                                    <div>
                                    <h3>Welcome, {data.firstName}</h3>
                                    
                            <p>What would you like to do today?</p>
                                    </div>
                             
                            <div>
                                {data.profilePic?
                            <img src="assets/profile.jpg" width="500px"/>: <FaUserCircle />}
                                </div> 
                                
                                </FirstCard>      
                            </Card>
                            <Card>
                            <h3>Messages</h3>
                            <Messages>
                                <div className="top">
                                <h5>Brownhill School</h5>
                                <p>Hi {data.firstName}, we&apos;d love to...</p> 
                                </div>
                                <StyledButtons>
                                <Link to="">Read </Link> 
                                </StyledButtons>     
                            </Messages>
                            <Messages>
                                <div className="top">
                                <h5>School of Rock</h5>
                                <p>Hi {data.firstName}, it&apos;s a pleasure to...</p>  
                                </div>
                                <StyledButtons>
                                    
                                <Link to="">Read</Link>  
                                </StyledButtons>
                                  
                            </Messages>
                            </Card>
                            <div className="card">
                            <img src="assets/map.svg"></img>
                            </div>
                            <Card>
                            <h3>History</h3>
                            <ImageContainer>
                                <div className="top">
                                <p>Brownhill School</p>
                            <div className="icons">
                               
                                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar } style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar } style={{ color: 'lightgray' }} />
                        
                            </div>
                                </div>
                            
                            <div>

                            </div>

                            </ImageContainer>
                            <ImageContainer2>
                                <div className="top">
                                <p>School Of Rock</p>
                            <div className="icons">
                                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar } style={{ color: 'orange' }} />
                               <FontAwesomeIcon icon={faStar } style={{ color: 'orange' }} />
                        
                            </div>
                                </div>
                            
                            <div>
                                
                            </div>
                            </ImageContainer2>
                        </Card>
                    </Middle>
                    </Main>
                </StyledDashboard>
            </Container>
      </div>
    )
  }
  

