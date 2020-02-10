import React from 'react';
import {authService} from '../../services';
import {Redirect} from 'react-router-dom';
//import FormInput from '../form-input/form-input.component';
//import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     password_confirmation:'',
     email: '',
     name: '',
     success: false,
     error:''
    };
  }

  signup = async() => {
    const {username,password,password_confirmation, email,name } = this.state;
    if(username && password && password_confirmation && email && name){
      if(password !== password_confirmation){
        return alert('passwords don\'t match')
      }else{
        const payload = {username,password,password_confirmation, email,name}
        try{
          const response =  await authService.register(payload)
          console.log(response.data)
          this.setState({success:true})
        }catch(err){
          console.log(err)
          this.setState({error:err})
        }
      }

    }
  }

 onChange = (e) => {
   this.setState({[e.target.name]:e.target.value});
  }

  render() {
    const { success,error} = this.state;
    return (
      <>
      {success? <Redirect to="/signin"/> : <p>An error occured</p>}
      <div className="row " id="Body">
        <div className="medium-5 columns left">
        <h4>Signup</h4>
        <label>Email</label>
        <input type="text" name="email"  placeholder="Email" onChange={this.onChange}/>
        <label>Name</label>
        <input type="text" name="name"  placeholder="Name" onChange={this.onChange}/>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <label>Confirm Password</label>
        <input type="password" name="password_confirmation"  placeholder="Password" onChange={this.onChange}/>
        
        <input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
        <a href="/signin">Login</a>
        </div>
        
      </div>
      </>
    );
  }
}

export default SignUp;
