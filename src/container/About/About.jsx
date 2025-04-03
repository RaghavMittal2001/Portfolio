import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import "./About.scss";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts,setabout]=useState([]);
  useEffect(()=>{
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data)=>{
      setabout(data);
    }).catch((error)=>{
      console.error("Error fetching about data:", error);
    })
  },[])
  return (
    <>
      <h2 className="head-text">
        I Know that
        <span> Good Development </span>
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <Motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="about.title" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 , color:"#030303"}}> 
              
              { 
              about.description}
            </p>
          </Motion.div>
        ))}
      </div>
    </>
  );
};

const WrapperAbout  =AppWrap(About, "about");
export default WrapperAbout;
