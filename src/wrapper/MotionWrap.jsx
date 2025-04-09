import React from "react";
import { motion as Motion} from "framer-motion";

const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <Motion.div
        whileInView={{y:[100,50,0], opacity: [0,0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
        >
        <Component />
        </Motion.div >
    )   
} 

export default MotionWrap;

