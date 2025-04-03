import React, { useEffect } from 'react'
import './Skills.scss';
import ReactTooltip from  'react-tooltip'  
import{ motion as Motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { client } from   
const Skills = () => {

  useEffect(()=>{
    const query='*[_type == "experiences"]';
     const skillsQuery ='*[_type == "skills"]';
    client.fetch(query)
  })
  return (
    <>
     <h2 className='head-text'> Skills & Experience</h2>
     <div className='app__skills-container'>
      <Motion.div className='app__skills-lists'>
      {Skills.map  }

      </Motion.div>
     </div>

    </>
  )
}

const WrapperSkills=AppWrap(Skills,'skills');
export default WrapperSkills;
