import React from 'react'
import './Testimonial.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
const Testimonial = () => {
  return (
    <div>
     Testimonial 
    </div>
  )
}

const WrapperTestimonial=AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
export default WrapperTestimonial;

