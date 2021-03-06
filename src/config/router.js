import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FanPage from '../pages/FanPage/FanPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ExplorePage from '../pages/ExplorePage/ExplorePage'
import CreateFanPage from '../pages/CreateFanPage/CreateFanPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import EditFanPage from '../pages/EditFanPage/EditFanPage'
import EditUserProfile from '../pages/EditUserProfile/EditUserProfile'

const Routes = ({currentUser, setCurrentUser}) => (
    <Switch>
        <Route exact path="/" render={() =>  <HomePage currentUser={currentUser}/>  }/>
        <Route path="/register" component={ RegistrationPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/explore" component={ ExplorePage } />
        <Route exact path="/profile" render={() =>  <UserProfilePage currentUser={currentUser} /> }/>
        
        <Route path="/profile/edit" render={() =>  <EditUserProfile currentUser={currentUser} setCurrentUser={setCurrentUser} /> }/>
        
        <Route path="/fanpage/create" render={ () => <CreateFanPage currentUser={currentUser} />} />
        <Route path="/fanpage/:id/edit" render={() =>  <EditFanPage currentUser={currentUser}/> }/>
        <Route path="/fanpage/:id" render={ () => <FanPage currentUser={currentUser}/> } />
    </Switch>
)

export default Routes;

