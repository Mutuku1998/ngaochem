import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../../styles/Heroslider.css'

const HeroSlider = () => {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll:1,
        pauseOnHover:false,
    }
  return (
<Slider {...settings} className='hero-slider'>
<div className='slider-item slider-item-01 mt-0'>
   <Container>
    <div className='slider-content'>
        <h4 className='text-light mb-3'>
        <i class="ri-shield-cross-line"></i>  Welcome to Ngao Chemist.
        </h4>
        <h1 className='text-light mb-4' >
        Empowering Health, Inspiring Hope</h1>
             <button className='btn reserve-btn mt-4'>
                <Link to='/riders'>Read More</Link>
             </button>
    </div>
    </Container> 
</div>
<div className='slider-item slider-item-02 mt-0'>
   <Container>
    <div className='slider-content'>
        <h4 className='text-light mb-3'>
        We Empower individuals & community,Caring for Life. One Pill at a Time
        </h4>
        <h1 className='text-light mb-4' >
        Empowering Health, Inspiring Hope</h1>
             <button className='btn reserve-btn mt-4'>
                <Link to='/riders'> Read More</Link>
             </button>
    </div>
    </Container> 
</div>
<div className='slider-item slider-item-03 mt-0'>
   <Container>
    <div className='slider-content'>
        <h4 className='text-light mb-3'>
        We Empower individuals & community,Caring for Life. One Pill at a Time
        </h4>
        <h1 className='text-light mb-4' >
        Empowering Health, Inspiring Hope</h1>
             <button className='btn reserve-btn mt-4'>
                <Link to='/riders'> Read More </Link>
             </button>
    </div>
    </Container> 
</div>
</Slider>
  )
}

export default HeroSlider