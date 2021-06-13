import React from 'react'
import logo from '../navigation/images/ndt.png'
import '../navigation/navigation.styles.scss'
import {Link} from 'react-router-dom'


const HomePage = () => (
  <>
    <div className='homepage'>
      <div className="logo">
      <Link to="/"><img src={logo} alt="NDT Logo"/></Link>
      </div>
      <div className="directory-menu">
        <Link to='about'> ABOUT </Link> 
        <Link to='contact'> CONTACT </Link>
      </div>
    </div>
   
  </>
);

export default HomePage;