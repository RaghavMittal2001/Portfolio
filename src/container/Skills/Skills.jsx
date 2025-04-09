import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion as Motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client.js";
const Skills = () => {
  const [Experience, setExperience] = useState();
  const [Skills, setSkills] = useState();

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"> Skills & Experience</h2>
      <div className="app__skills-container">
        <Motion.div className="app__skills-list">
          {Skills &&
            Skills.map((skill) => (
              <Motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgcolor }}
                >
                  <img src={urlFor(skill.icon)} alt="skill.name" />
                </div>
                <p className="p-text">{skill.name} </p>
              </Motion.div>
            ))}
        </Motion.div>

        <Motion.div className="app__skills-exp">
          {console.log(Experience)}

          {Experience &&
            Experience.map((experience) => (
              <Motion.div
                className="app__skills-exp-item"
                key={experience._id}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <Motion.div className="app__skills-exp-works">
                  {experience.works.map((work,index) => (
                    <React.Fragment key={index} >
                      <Motion.div
                        className="app__skills-exp-work"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }} 
                        data-tooltip-id={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </Motion.div>
                      <ReactTooltip
                        effect="solid"
                        id={work.name}
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </React.Fragment>
                  ))}
                </Motion.div>
              </Motion.div>
            ))}
        </Motion.div>
      </div>
    </>
  );
};

  const WrapperSkills = AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
export default WrapperSkills;

