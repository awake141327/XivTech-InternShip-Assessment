import React from 'react'
import Details from './Article'
import './style.css';
import AIRPA from './AIRPA.png'
import BetterApps from './BetterApps.png'
import DevOps from './DevOps.png'
import Cloud from './Cloud.png'



function App() {
  return (
    <div className="container">
      <h4 className="heading">Let's Collaborate</h4>
      <Details 
        title = "AI + RPA is what we do"
        img = {AIRPA}
        detail = "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
        link = "AI + RPA Automation"
        alt = "Robots"
      />
      <Details 
        title = "Make Bolder Choices"
        img = {BetterApps}
        detail = "Digital focused strategies to realize market-changing ideas"
        link = "Build Better Apps"
        alt = "Lady Writing"
      />
      <Details 
        title = "Innovate with Speed"
        img = {DevOps}
        detail = "Create higher quality software, deliver on customer expectations and business goals"
        link = "DevOps"
        alt = "Office"
      />
      <Details 
        title = "Embrace Cloud"
        img = {Cloud}
        detail = "With Cloud-First accelerate innovation and optimize performance"
        link = "Cloud Services"
        alt = "Smartphones"
      />
    </div>
  )
}

export default App;
