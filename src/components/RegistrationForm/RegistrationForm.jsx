import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import UserAPI from '../../Models/UserAPI';
import './RegistrationForm.css';


const RegistrationForm = () => {

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [verifiedPassword, setVerifiedPassword]=useState('')
    const [error, setError]=useState(null);

    const history = useHistory();
    
    const registrationHandler = (e) => {

        e.preventDefault()

        if (password !== verifiedPassword) {
            setError('Passwords do not match')

        }
  
        submitRegistrationData()
      }
  
      const submitRegistrationData = async () => {
  
        try {
  
          const data = {
            firstName,
            lastName,
            email,  
            username,
            password, 
            verifiedPassword
          }

          await UserAPI.register(data)
  
          history.push('/login');
  
        } catch (error) {
            
            setError('Username or email already exists. Please try again.')
            
          return console.log(error);
  
        }
  
      }

    return (
        <>
        <main className="RegistrationForm">
        <div className="outer">
        <div className="inner">
        <form onSubmit={registrationHandler}>
        <h3>Register for a Melophied account</h3>
        <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}}/>
                </div>

                <div className="form-group lastName">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}}/>
                </div>

                <div className="form-group email">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>

                <div className="form-group username">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Create username" name="username" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>

                <div className="form-group password">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div className="form-group verifiedPassword">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" name="verifiedPassword" onChange={(e) => {setVerifiedPassword(e.target.value)}}/>
                </div>

                {
                  error ? 
                  <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    <Alert.Heading>{error}</Alert.Heading>
                  </Alert> 
                  : ''
                }

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
            </div>
            </div>
        </main>
</> 
    )
}

export default RegistrationForm;