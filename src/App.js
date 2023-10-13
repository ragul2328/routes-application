import React from 'react';
import{BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import './style.css';

function HomePage() {
  return (
    <div className='homepage'>
      <h3>Home:</h3> 
     
    <div className="homes">
    <p>Get Start</p>
     
    </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h2>About Us:</h2>
      <h4>Devloping the web page using react application.</h4>

    </div>
  )
}

function ContactPage() {
  return (
    <div>
      <h3>Contact Us:</h3>
      <h5>+91 1234567890 , 
        abcd1234@gmail.com , 
        Cuddalore.</h5>
    </div>
  )
}

function Navigation() {
  return (
   <nav id='navbar'>  
    <ul>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/AboutPage' >About</Link></li>
      <li><Link to='/ContactPage'>Contact</Link></li>
    </ul>
   </nav>
  )
}

export default function App() {
  return (
<BrowserRouter>
      <div className='landingpage'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/AboutPage' element={<AboutPage/>}/>
          <Route path='/ContactPage' element={<ContactPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}
