import React from 'react'
import NDT_INSPECTIONS from '../../inspections/inspections'
import Services from '../services/services.styles'
import Footer from '../footer/footer.component'
import {Link} from 'react-router-dom'
import '../homepage/homepage.styles.scss'

const HomePage = () => (
  <>
    <hr/>
    <h1>Non Destructive Testing Inspections</h1>
    <div className="services">
    
      <Services inspections={NDT_INSPECTIONS}/>
     
    </div>
    <Footer/>
  </>
);

export default HomePage;