import GoldmanSachs from '../Images/GoldmanSachs.jpg'
import MasterCard from '../Images/MasterCardCyberSecurityCertificate.png'
import React from 'react'

function about_Certificates() {
  return (
    <>
      <div className='CertificateScrollingContainer'>
          <img className='certificateImg1' src={GoldmanSachs} alt=''/>
          <img className='certificateImg2' src={MasterCard} alt=''/> 
      </div>
    </>
  )
}

export default about_Certificates