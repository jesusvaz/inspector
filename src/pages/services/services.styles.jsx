import React from 'react'
import './services.styles.scss'

function Service({inspections}) {
  const {services} = inspections
    return (
      <>
         {
            services.map( (service,idx) => (
              <div key={idx}  className="service">
                <div className="item"></div>
                    <h3 className="title">{service.title}</h3>
                    <div>{service.content.en}</div> 
                </div>
              )
            )
         }
          
      </>
    )
}

export default Service
