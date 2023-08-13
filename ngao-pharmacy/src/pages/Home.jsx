import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import HeroSlider from '../components/UI/Heroslider'
import '../styles/Home.css'
import { Container, Row ,Col, Form, FormGroup,Input} from 'reactstrap'
import capsules from '../assets/img/capsules.jpg'
import antibiotics from '../assets/img/antibiotic.jpg';
import dermatolog from '../assets/img/dermatolog.jpg';
import dermatology from '../assets/img/dermatology.jpg';
import injection from '../assets/img/injection.jpg';
import pain from '../assets/img/1.jpg';
import syrup from '../assets/img/3.jpg';
import ppi from '../assets/img/4.jpg';
import Marquee from "react-fast-marquee";
import ppb from '../assets/img/ppb.png';
import kebs from '../assets/img/kebs.png';
import norvatis from '../assets/img/norvartis.png';
import kenyapharmtec from '../assets/img/kenyapharmtec.png';
import cipla from '../assets/img/cipla.png';
import adcock from '../assets/img/adcock.png'
import Bloglist from '../components/UI/Bloglist'
const Home = () => {
  return (
    <Helmet title='Home'>
       <section className='p-0 hero-slider-section'>
        <HeroSlider/>
       </section>
       <div className="container-xxl">
    <div className="row">
        <div className="col-12">
            <h2 className='product-head' >Pharmaceutical Products</h2>
        </div>
        <div className="services d-flex align-items-center justify-content-between">
            <div >
                <img src={capsules}alt="" style={{height:'auto',width:"100%",gap:"10px"}}/>
                <h6> Capsules</h6>
                
            </div>
            <div className>
                <img src={antibiotics}alt="" style={{height:'auto',width:"100%",gap:"10px"}}/>
                <h6> Antibiotics</h6>

            </div>
            <div className>
                <img src={dermatolog}alt=""style={{height:'auto',width:"100%",gap:"10px"}} />
            <h6> Dermatology</h6>
    
            </div>
            <div className>
                <img src={dermatology}alt="" style={{height:'auto',width:"100%",gap:"10px"}}/>
                <h6>Dermatology</h6>
              
            </div>
            <div className>
                <img src={injection}alt=""style={{height:'auto',width:"100%", gap:"10px"}}/>
                <h6>Injectables</h6>
                
            </div>
            
        </div>
    </div>
    <div className="row">
        <div className="col-12">
        </div>
        <div className="services d-flex align-items-center justify-content-between">
            <div >
                <img src={pain}alt="" style={{height:'auto',width:"100%",gap:"10px"}}/>
                <h6> Anti Inflammatory</h6>
                
            </div>
            <div className>
                <img src={dermatolog}alt="" style={{height:'auto',width:"100%",gap:"10px"}}/>
                <h6>Anti Ulcer</h6>

            </div>
            <div className>
                <img src={syrup}alt=""style={{height:'auto',width:"100%",gap:"10px"}} />
            <h6> Oral liquids</h6>
    
            </div>
            <div className>
                <img src={ppi}alt="" style={{height:'auto',width:"100%",gap:"10px"}}/>
                <h6>Gastroenterology</h6>
              
            </div>
            <div className>
                <img src={syrup}alt=""style={{height:'auto',width:"100%", gap:"10px"}}/>
                <h6>Anti-acids</h6>
                
            </div>
            
        </div>
    </div>
<div >
<button className='btnproduct'><a href=''>Browse more products</a></button>
</div>
    </div>  
    <div className="container-xxl">
                <div className="row">
                <div className="col-12">
                        <h2 className="section-heading">Our Partners and Suppliers </h2 >
                    </div>
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className=" d-flex">
                                <div className="mx-4 w-5">
                                    <img src={ppb}alt="brand" style={{height:'100px',width:"100%"}}/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src={kebs}alt="brand" style={{height:'100px',width:"100%"}}/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src={cipla}alt="brand"style={{height:'100px',width:"100%"}}/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src={adcock}alt="brand"style={{height:'100px',width:"100%"}}/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src={kenyapharmtec}alt="brand"style={{height:'100px',width:"100%"}}/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src={cipla}alt="brand" style={{height:'100px',width:"100%"}}/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src={norvatis}alt="brand" style={{height:'100px',width:"100%"}}/>
                                </div>
                                
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
  <h6 className='section-subtitle'> Explore Our Blogs</h6>
          <h2 className='section-title'>
           Latest Blogs
          </h2>
            </Col>
            <Bloglist/> 
          </Row>
        </Container>
      </section>
      <section className='getintouch'>
            <h6 className='fw-bold touch'> Get In Touch </h6>
   <Form className='contactf'>
    <FormGroup className='contact-form'>
        <Input type='text' placeholder='Your Name'/>
    </FormGroup>
    <FormGroup className='contact-form'>
        <Input type='email' placeholder='Your Email Address'/>
    </FormGroup>
    <FormGroup className='contact-form'>
        <textarea rows='5' className='textarea' placeholder='Message' style={{border:'none'}}>
        </textarea>
    </FormGroup>
    <button type='submit' className='contact-btn'>
       Send Message
    </button>
   </Form>
            </section>
    </Helmet>
  )
}

export default Home