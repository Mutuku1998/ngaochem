import React from 'react'
import Bloglist from '../components/UI/Bloglist'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row ,Col} from 'reactstrap'
import Commonsection from '../components/UI/Commonsection'
const Blogs = () => {
  return (
   <Helmet title='Blogs'>
<Commonsection title= 'Blogs'/>
    <section>
      <Container>
        <Row>
          <Bloglist/>
          <Bloglist/>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Blogs