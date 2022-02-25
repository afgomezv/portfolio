import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaGithub />
      </div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <FaInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
