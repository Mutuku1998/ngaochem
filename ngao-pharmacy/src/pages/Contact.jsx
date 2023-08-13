import React from 'react'
import '../styles/contact.css'
import Commonsection from '../components/UI/Commonsection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row ,Col, Form, FormGroup,Input} from 'reactstrap'
import { Link } from 'react-router-dom'
const socialLinks = [
    {
      url: "#",
      icon: "ri-facebook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];
  
const Contact = () => {
  return (
 <Helmet title='Contact'>
    <Commonsection title='Contact'/>
    <section>
    <h6 className='fw-bold'> Get In Touch </h6>
        <Container>    
<Row>
  <Col lg='7' md='7'>
   <Form>
    <FormGroup className='contact-form1'>
        <Input type='text' placeholder='Your Name'/>
    </FormGroup>
    <FormGroup className='contact-form1'>
        <Input type='email' placeholder='Your email Address'/>
    </FormGroup>
    <FormGroup className='contact-form1'>
        <textarea rows='5' className='textarea w-100' placeholder='Message'>
        </textarea>
    </FormGroup>
    <button type='submit' className='contact-btn'>
       Send Message
    </button>
   </Form>
                </Col>
                <Col lg='5' md='5'>
                   <div className='contact-info'>
                    <h6 className='fw-bold'>
                   Contact Information     
                    </h6>
                    <p className='section-description mb-0'>
                        80108 Kilifi, Kenya
                    </p>
                    <div className='d-flex align-items-center gap-2'>
                        <h5 className='mb-0 fs-6'> Phone:</h5>
                        <p className='section-description mb-0'>
                            +254702914086
                        </p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h5 className='mb-0 fs-6'> Email:</h5>
                        <p className='section-description mb-0'>
                            ngaochem@gmail.com
                        </p>
                    </div>
                    <h6 className='fw-bold mt-4'> Follow Us</h6>
                    
                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social-link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
                    </div> 
                </Col>
            </Row>
        </Container>
        </section> 
 </Helmet>
  )
}

export default Contact