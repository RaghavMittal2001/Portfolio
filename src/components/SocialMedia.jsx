import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  );
};

export default SocialMedia;
