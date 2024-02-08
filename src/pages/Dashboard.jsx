import { Container } from "../components/styles/Container.styled";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
    <Container>
        <div className="">
            <div className="">
            <h3>Welcome, Lamidi</h3>
            <p>What would you like to do today?</p>
            <img src="assets/profile.jpg"></img>
            </div>
            <div className="">
            <h3>Messages</h3>
            <div className="">
            <h5>Brownhill School</h5>
            <p>Hi Lamidi, we&apos;d love to...</p>  
            <Link to="">Read </Link>      
            </div>
            <div className="">
            <h5>School of Rock</h5>
            <p>Hi Lamidi, it&apos;s a pleasure to...</p>  
            <Link to="">Read</Link>      
            </div>
            </div>
            <div className="">
            <div className="">
                <img src="assets/map.svg"></img>
            </div>
            <div>
                <h3>History</h3>
               <div>
                <div className="image">
                    <p>Brownhill School</p>
                    <div className="icons">
                        
                    </div>
                </div>
               </div>
            </div>
            </div>
          
        </div>


    </Container>
    
    
    </>
  )
}
