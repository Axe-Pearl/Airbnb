import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
        {/* <div>
        </div> */}
        <div className='footerContainer'>
         <div className='col col1'>
         <ul className="footerList">
         <li><strong>Support</strong></li><br />
         <li>Help Centre</li>
         <li>AirCover</li>
         <li>Safety information</li>
         <li>Supporting people with disabilities</li>
         <li>Cancellation options</li>
         <li>Our COVID-19 Response</li>
         <li>Report a neighbourhood concern</li>
        </ul>
         </div>
         <div className='col col2'>
            <ul className="footerList">
            <li><strong>Community</strong></li><br />
            <li> Airbnb.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
            </ul>
        </div>
        <div className='col col3'>
            <ul className="footerList">
            <li><strong>Hosting</strong></li><br />
            <li>Try hosting</li>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
            </ul>
        </div>
        <div className='col col4'>
            <ul className="footerList">
                <li><strong>Airbnb</strong></li><br />  
                <li>Newsroom</li>
                <li>Learn about new features</li>
                <li>Letter from our founders</li>
                <li>Careers</li>
                <li>Investors</li>
            </ul>
        </div>
        <div>
        </div>
        </div>
        <div className='footerlast'>
            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
      </div>
    )
}

export default Footer