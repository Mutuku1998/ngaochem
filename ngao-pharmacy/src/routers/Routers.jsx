import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Notfound from '../pages/Notfound'
const Routers = () => {
  return (
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
<Route path='/blogs' element ={<Blogs/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/notfound' element={<Notfound/>}/>
   </Routes>
  )
}


export default Routers