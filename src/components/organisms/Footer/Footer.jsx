import React from 'react'
import { FooterContainerStyle } from './FooterStyles'
import logoInstagram from '../../../assets/instagram_logo.webp'
import logoLinkedin from '../../../assets/linkedin_logo.png'
import logoGithub from '../../../assets/github_logo.png'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigator = useNavigate();
  
  const goHome = () => {
    window.scrollTo(0,0);
    navigator('/')
  }
  return (
    <FooterContainerStyle>
      <h2 className='titleFooter' onClick={() => goHome()}>TRICAMPEÓN</h2>
      <span className='redesContainer'>
        <a href='https://www.instagram.com/facundoiba_' target='_blank'><img src={logoInstagram} alt="logo instagram" className='logoRedes'/></a>
        <a href="https://www.linkedin.com/in/facundoiba" target='_blank'><img src={logoLinkedin} alt="logo linkedin" className='logoRedes'/></a>
        <a href="https://github.com/facundoiba95" target='_blank'><img src={logoGithub} alt="logo github" className='logoRedes' style={{backgroundColor:'white',borderRadius:'50%',padding:'1px'}}/></a>
      </span>
    </FooterContainerStyle>
  )
}

export default Footer