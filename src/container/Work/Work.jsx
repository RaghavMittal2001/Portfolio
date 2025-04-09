import React, {  useState,useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion as Motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor ,client} from "../../client";
import "./Work.scss";
const Work = () => {
  const [ActiveFilter, setActiveFilter] = useState("All");
  const [AnimateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [Works, setWorks] = useState();
  const [FilterWorks, setFilterWorks] = useState([]);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWorks(Works);
      } else {
        setFilterWorks(Works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  useEffect(() => {
    const query = '*[_type=="works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);
  return (
    <div>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter app__flex">
        {["UI/Ux", "Web App", "Mobile app", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => {
                handleWorkFilter(item);
              }}
              className={`app__work-filter-item app__flex p-text ${
                ActiveFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <Motion.div
        animate={AnimateCard}
        transition={{ duration: 0.5, delayChildren:0.5 }}
        className="app__work-portfolio"
      >
        {FilterWorks &&
          FilterWorks.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <Motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    staggerChildren: 0.5,
                    ease: "easeInOut",
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <Motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </Motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <Motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </Motion.div>
                  </a>
                </Motion.div>
              </div>
              <div className=" app__work-content app__flex">
                <h4 className="bold-text ">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text ">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
      </Motion.div>
    </div>
  );
};

  const WrapperWork = AppWrap(
  MotionWrap(Work, "app__work"),
  'work', 
  "app__primarybg"
);
export default WrapperWork;
