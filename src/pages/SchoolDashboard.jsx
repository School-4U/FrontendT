
import {  FaBookOpen, FaClock, FaHome, FaThLarge, FaUserCircle, FaCommentAlt, FaCalendarDay } from "react-icons/fa";
import { Container } from "../components/styles/Container.styled";
  import { Link } from "react-router-dom";
  import { StyledDashboard, Sidebar, Main, Top, Right, Left, Home, User, Middle, Card, FirstCard, Active, Messages, StyledButtons, Calender, History} from "../components/styles/Dashboard.styled";
  import { useNavigate } from "react-router-dom";
  import { useLocation } from "react-router-dom";


  export const SchoolDashboard = () => {
    const location = useLocation();
	const data = location.state;
    

    const navigate = useNavigate();

	
 const handleLogout = () => {
 
	navigate("/");

 }
    return (
      <div>

            <Container>

                <StyledDashboard>

                    <Sidebar>
                        <Active>
                        <FaThLarge />
                        <h3>Dashboard </h3>
                        </Active>
                       
                        <>
                        <FaCommentAlt />
                        <h3>Community</h3>
                        </>
                        <>
                        <FaBookOpen/>
                        <h3>Resources</h3>
                        </>
                        <>
                        <FaCalendarDay/>
                        <h3>Schedule</h3>
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
                                <h3>{data.name}</h3>
                                </User>

                                <button onClick={handleLogout} style={{
                                     padding: '10px 20px',
                                     backgroundColor: '#6e7fd7',
                                     color: '#fff',
                                     marginLeft: '20px',
                                     border: 'none',
                                     borderRadius: '5px',
                                     cursor: 'pointer',
                                }}>Logout</button>
                            </Left>
                           
                            </Top>
                    
                        <Middle>
                            <Card>
                                <FirstCard>
                                    <div>
                                    <h3>Welcome, <br/>{data.name}</h3>
                            <p>What would you like to do today?</p>
                                    </div>
                             
                            <div>
                            <img src="assets/brownhill.jpg"></img>
                                </div> 
                                
                                </FirstCard>      
                            </Card>
                            <Card>
                            <h3>History</h3>
                            <Messages>
                                <div className="top">
                                <h5>Lamidi</h5>
                                <p>Hi {data.name}, I&apos;d love to know...</p> 
                                </div>
                                <StyledButtons>
                                <Link to="">Read </Link> 
                                </StyledButtons>     
                            </Messages>
                            <Messages>
                                <div className="top">
                                <h5>Iyke</h5>
                                <p>Hi {data.name}, please does your...</p>  
                                </div>
                                <StyledButtons>
                                    
                                <Link to="">Read</Link>  
                                </StyledButtons>
                                  
                            </Messages>
                            </Card>
                            <Card>
                                <Calender>
                                <h3>Schedule</h3>
                            <p>Feb, 2024</p>
                                </Calender>
                                <img src="assets/calender.jpg"></img>
                           
                            </Card>
                            <Card>
                            <h3 style={{ fontSize: "24px" }}>History</h3>
                            <History>

                            <div className="top">
                                <p>Effective Child</p>
                                <p>Development Strategies</p>
                                <a href="" style={{ color: "#6E7FD7"}}>http://artscimedia.case.edu...</a>
                                </div>
                            
                            <div className="top">
                            <p>How to Grow</p>
                            <p>A Successful Business</p>
                            <a href="" style={{ color: "#6E7FD7" }}>http://artscimedia.case.edu...</a>
                            </div>
                            </History>
                               
                            
                             
                        
                            
                            <div>
                                
                            </div>
                            
                        </Card>
                    </Middle>
                    </Main>
                </StyledDashboard>
            </Container>
      </div>
    )
  }
  

