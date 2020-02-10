import React from 'react';
import {Redirect} from 'react-router-dom';
import {authService} from '../../services';

//import FormInput from '../form-input/form-input.component';

//import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  submit = async() => {
    const { username, password } = this.state;
    if(username !== '' && password !== ''){
      const payload = {username,password}
      try{
        const response = await authService.login(payload);
        console.log(response)
        localStorage.setItem('user',JSON.stringify(response.user))
        if(response.token){
          sessionStorage.setItem('token',response.token);
          this.setState({loggedIn: true});
        }
      }catch(err){
        console.log(err)
      }
    }
    
   }

  onChange = (e) => {
    const {name,value } = e.target;
    this.setState({[name]:value});
   }

  render() {
  const { loggedIn } = this.state;
    return (
      <div className="row" id="Body">
        {loggedIn? <Redirect to="/"/>:null}
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.submit}/>
        <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}

export default SignIn;
