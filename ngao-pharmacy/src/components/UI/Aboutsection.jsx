import React from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import '../../styles/aboutsection.css'
import image5 from '../../assets/img/pharmacy2.png';
const Aboutsection = () => {
  return (
  <section className='about-section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
             <div className='about-section-content'>
              <h4 className='section-subtitle'>
                About Us
                </h4>  
                <h2 className='section-title'>
                    Welcome to Ngao Chemist
                </h2>
                <p className='section-description'>
                At Ngao Chemist, our utmost dedication lies in surpassing our customers' expectations in terms of delivering high-quality drugs, providing affordability, 
    and ensuring timely delivery. Our professional team is committed to listening attentively to our customers'
     needs, comprehending their requirements and expectations. Guided by our tagline, "Empowering Health, Inspiring Hope,
    " we strive to meet and exceed all their demands promptly and to their complete satisfaction
                </p>
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  Our vision is to become a prominent leader in the region, 
        offering accessible healthcare products at affordable price

                    </p>  
                 </div>
                 
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  We are dedicated to source and avail medicines to our 
        clients offering unsurpassed customer care service
                    </p>  
                 </div>
                </div>   
                 </Col>
            <Col lg='6' md='6'> 
            <div className='about-img'>
              <img src={image5} alt='' className='w-100' style={{borderRadius:'5px'}}/> 
            </div>

            </Col>

        </Row>
    </Container>
  </section>
  )
}

export default Aboutsection