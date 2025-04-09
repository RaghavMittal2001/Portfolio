import React, { useState } from 'react';
import './Footer.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { client } from '../../client';
import Loading from '../../components/Loading/Loading';
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handlechangeinput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handlesubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact).then(() => {
      setIsFormSubmitted(true);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    } )
    
  }
  return (
    <>
    <h2 className='head-text'>
    Take a coffee & chat with me
    </h2>
    <div className='app__footer-cards'>
    <div className='app__footer-card'>
      <img src={images.email} alt="email" />
      <a href= "mailto:zzz@hotmail.com"  className='p-text'>hello@micheal.com</a>
    </div>
    <div className='app__footer-card'>
      <img src={images.mobile} alt="mobile" />
      <a href="tel:+1(234)56700890" className='p-text'>+1234567890</a>
    </div>
    </div>


    {!isFormSubmitted ? (
      <div className='app__footer-form app__flex' >
      <div className='app__flex'> 
        <input type="text" placeholder='Your name' value={name} onChange={handlechangeinput} name='name' className='p-text'/>
      </div>
      <div className='app__flex'> 
        <input type="email" placeholder='Your email' value={email} onChange={handlechangeinput} name='email' className='p-text'/>
      </div>
      <div>
        <textarea  className='p-text ' placeholder='your Message'
        value={message}
        name='message'
        onChange={handlechangeinput}
        ></textarea>
      </div>
      <button type='button' className='p-text' onClick={handlesubmit}>Send message</button>
      {loading && (
          <div className="app__footer-loading">

            <Loading size="medium" color="primary" />
          </div>
        )}
      </div>
    ) : (
      <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>
    )  
    }
   
    </>
  )
}

const WrapperFooter=AppWrap(
  MotionWrap(Footer, "app__footer"),
  "footer",
  "app__whitebg"
);
export default  WrapperFooter;
