import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/afgomezv">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/afgomezv">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/gomez_andrey56/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
