import React from 'react'
import Commonsection from '../components/UI/Commonsection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/services.css'
import bp from '../assets/img/bp.jpg'
import { Container ,Row ,Col } from 'reactstrap'
const Services = () => {
  return (
<Helmet title='Services'>
  <Commonsection title='Services'/>
  <section className='about-section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
             <div className='about-section-content'>
              <h4 className='section-subtitle'>
                See Our
                </h4>  
                <h2 className='section-title'>
                  Awesome services at Ngao chemist
                </h2>
                <p className='section-description'>
                Ngao Pharmaceuticals Ltd has a chain of retail/dispensing pharmacies. 
                We provide general healthcare advice and counselling to patients. We dispense prescription and non-prescription medication to the public. We also specialize in the provision of disposables, medical diagnostics, surgical equipment, disinfectants and other related products. Quality service delivery and
                 customer care practice has made Ngao a brand and the pharmacy of choice.
                </p>
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  We dispense prescriptions and other medicines, 
                  offer testing and screening for common conditions, and advise on minor ailments.
                    </p>  
                 </div>
                 
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  Consultation is also another thing that we offer 
                  and we are able to guide the patient on what medicine he or she should take from our pharmacy.
                    </p>  
                 </div>
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  At our outlets we normaly give priority to the elderly disabled and expectant individuals .
                    </p>  
                 </div>
                </div>   
                 </Col>
            <Col lg='6' md='6'> 
            <div className='about-img'>
              <img src={bp} alt='' className='w-100' style={{borderRadius:'5px'}}/> 
              
            </div>

            </Col>

        </Row>
    </Container>
  </section>
</Helmet>
  )
}

export default Services