import React from "react";
import { images } from "../../constants";
import { motion as Motion } from "framer-motion";

import "./Header.scss";
import AppWrap from "../../wrapper/AppWrap";
const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 1 ,ease: "easeInOut" },
    },
  };
  return (
    <div className="app__header app__flex">
      <Motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-bagde">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ margin: 20 }}>
              <p className="p-text">Hello,I am</p>
              <h1 className="head-text">Raghav</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>   
          </div>
        </div>
      </Motion.div>
      <Motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <Motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </Motion.div>
      <Motion.div variant={scaleVariants}
      whileInView={scaleVariants.whileInView} 
      className="app__header-circles">
        {[images.flutter, images.react, images.sass].map((circle, index) => (

          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        )  )  



         }
      </Motion.div>
    </div>
  );
};

const WrappedHeader = AppWrap(Header, 'home');
export default WrappedHeader;
