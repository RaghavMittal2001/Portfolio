import {About ,Testimonial,Work,Header,Skills,Footer} from './container'
import { Navbar } from './components';
import './App.scss'; 
function App() {

  return ( 
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      
        
    </div>
  )
}

export default App
