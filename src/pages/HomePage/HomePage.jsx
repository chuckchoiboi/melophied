import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'
import './HomePage.css'

const HomePage = ({currentUser}) => {

    return (
        <div className="HomePage">
            <h1>Welcome to Melophied</h1>
            <div>
            <FanPageCardsContainer />
            </div>
            <div className="HomePage-buttons">
            <Link to="/explore">
            <Button className="exploreButton">Explore</Button>
            </Link>
            
            
            
                {/* if currentUser is found (localStorage's uid), will be routed to create page. If not, will be routed to login */}
                {
                    currentUser ? 
                    (
                        <Link to="/fanpage/create">
                            <Button className="createButton">Create</Button>
                        </Link>
                    ) : 
                    (
                        <Link to="/login">
                            <Button className="createButton">Create</Button>
                        </Link>
                    )
                }
                </div>  
        </div>
    )
}

export default HomePage