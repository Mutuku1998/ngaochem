import React, {useState, useEffect} from 'react'
import { Container,Row , Col, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
const navLinks =[
   {
path : '/home',
display :'Home'
   },
   {
    path : '/about',
    display: 'About'
   }
   ,
   {
    path : '/services',
    display :'Services'
       },
       {
        path : '/blogs',
        display: 'Blogs'
       }
       ,
       {
        path:'/contact',
        display:'Contact'
       }

];
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
  return (
    <header className='header'>
<div className='header-top'>
    <Container>
        <Row>
            <Col lg-6 md-6 sm-6> 
           <div className='header-top-left'>
            <span>Need help?</span>
            <span className='header-top-help'>
            <i class="ri-phone-fill"></i> +254 702914086
            </span>
            </div> 
            </Col>
            <Col lg-6 md-6 sm-6>
<div className='header-top-right d-flex align-items-center
justify-content-end gap-3'>
    <Link to='/' className='d-flex align-items-center gap-1'><i class="ri-facebook-circle-fill"></i>Facebook</Link>
    <Link to='/' className='d-flex align-items-center gap-1' ><i class="ri-whatsapp-fill"></i>Whatsapp</Link>
</div>
            </Col>
        </Row>
    </Container>
</div>
<div className='header-middle'>
    <Container>
        <Row>
            <Col lg-4 md-3 sm-4>
<div className='logo'>
    <h1>
        <Link to='/' className='d-flex align-items-center
        gap-3'>
     <i class="ri-shield-cross-fill"></i>
        <span>Ngao<br/> Chemist</span>
        </Link>
    </h1>
</div>
            </Col>
            <Col lg-3 md-3 sm-4>
                <div className='header-location d-flex align-items-center gap-2'>
                    <span> <i class="ri-earth-fill"></i></span>
                    <div className='header-location-content'>
                        <h4> Kilifi Town</h4>
                        <h6> Kilifi County, Kenya</h6>
                    </div>
                </div>
            </Col>
            <Col lg-3 md-3 sm-4>
                <div className='header-location d-flex align-items-center gap-2 '>
                    <span> <i class="ri-time-line"></i></span>
                    <div className='header-location-content'>
                        <h4>Monday to Sunday</h4>
                        <h6> 7.00am - 9.00pm</h6>
                    </div>
                </div>
            </Col>
            <Col lg-2 md-3 sm-0 className='text-end'>
                <button className='header-btn btn '>
                    <Link to='/'>
                    <i class="ri-phone-line"> Request a call </i>
                    </Link>
                </button>
            </Col>
        </Row>
    </Container>
</div>
<div className='main-navbar'>
    <Container>
        <div className='navigation-wrapper d-flex align-items-center justify-content-between' >
            <span className='mobile-menu d-flex gap-5'>
            <i className='ri-menu-line' onClick={toggleNav}></i> 
            <h4 className='ngao'> <i class="ri-shield-cross-line"></i>  Ngao Chemist</h4>
            </span>
            {(toggleMenu || screenWidth > 500) && (
            <div className='navigation'  >
           
              <div className='menu' onClick={toggleNav}>
                {navLinks.map((item, index) => (
                  <Link to={item.path} className='nav-item' key={index} activeClass="menu-active">
                    {item.display} 
                  </Link>
                ))}
              </div>
          
            </div>
              )}
            <div className='nav-right'>
<div className='search-box d-flex align-items-center
justify-content-end'>
    <input type='text' id=''name=''placeholder='Search' className='d-flex align-items-center'/>
    <span><i class="ri-search-line"></i></span>
</div>
            </div>
        </div>
    </Container>
</div>
    </header>
  )
}

export default Header