import React from 'react'
import '../styles/about.css'
import image5 from '../assets/img/pharmacy.png'
import { Container, Row ,Col } from 'reactstrap';
import Aboutsection from '../components/UI/Aboutsection';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/Commonsection';
const About = () => {
  return (
  <Helmet title='About Us'>
<Commonsection title='About Us'/>
<Aboutsection/>
<section className='about-page-section'>
  <Container>
    <Row>
    <Col lg='6'md='6' sm='12'>
  <div className='about-page-img'>
    <img src= {image5} alt='' className='w-100 rounded-3'/>

  </div>
      </Col>  
      <Col lg='6'md='6' sm='12'>
  <div className='about-page-content'>
   <h2 className='section-title'>We are commited to
    provide cheap Healthcare solutions
</h2> 
<p className='section-description'>
We coordinate with our suppliers to get you the best price on your medication and we give great discounts
</p>
<p className='section-description'>
Well stocked & Wide Variaties.
Our predictive inventory software means medication you need will never be out of stock.
</p>
<div className='d-flex align-items-center gap-3 mt-4'>
  <span className='fs-4'><i class="ri-phone-line"></i></span>
<div>
 <h6 className='section-subtitle'>
  Need Any Help?
  </h6> 
  <h4>+254702914086</h4>
</div>
</div>
  </div>
  </Col> 
    </Row>
  </Container>
</section>

  </Helmet>
  )
}

export default About