import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services';
//import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';


const Header = () => (

    <div className='header'>
    <Link to='/'>
      <h4 className="name">Active Learning</h4>
    </Link>
    
    <div className='options'>
      <Link className='option' to='/'>
        HOME
      </Link>
      <Link className='option' to='/store'>
        STORE
      </Link>
      <Link className='option' to='/about'>
        ABOUT US
      </Link>
      <Link onClick={() => authService.logout()} className='option' to='/signin'>
       { sessionStorage.getItem('token')?'LOGOUT':'LOGIN'}
      </Link>
      </div>
      </div>
  
)

export default Header;