import React, { useEffect } from 'react'
import bitrix from './assets/bitrix.png'
import hubspot from './assets/hubspot.png'
import odoo from './assets/odoo.png'
import pilot from './assets/pilot.png'
import slack from './assets/slack.png'
import teams from './assets/teams.png'
import tecnom from './assets/tecnom.png'
import tokko from './assets/tokko.png'
import zoho from './assets/zoho.png'
import './styles.css'


const LogosDeIntegraciones = () => {

    useEffect(() => {
        const logosSlide = document.querySelector(".logos-slide");
        const copy = logosSlide.cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    
        return () => {
          
        };
      }, []);
    

  return (
    
    <div className='logos'>
        <div className='logos-slide'>
            <img src={bitrix} alt='bitrix'/>
            <img src={hubspot} alt='hubspot'/>
            <img src={odoo} alt='odoo'/>
            <img src={pilot} alt='pilot'/>
            <img src={slack} alt='slack'/>
            <img src={teams} alt='teams'/>
            <img src={tecnom} alt='tecnom'/>
            <img src={tokko} alt='tokko'/>
            <img src={zoho} alt='zoho'/>
        </div>
    </div>
    
  )
}

export default LogosDeIntegraciones