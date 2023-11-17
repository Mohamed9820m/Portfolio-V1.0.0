import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg flex flex-col w-full font-raleway bg-[#040115] dark:bg-neutral-900 py-20 px-4 md:px-0">

      <div className="w-[350px] mx-auto flex items-center justify-between">
        <a target="_blank" rel="nofollow" href="https://www.instagram.com/_mohamed.habib/?hl=fr">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", fontSize: '2rem' }} />
        </a>
        <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/mohamed-habib-43908517b/">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", fontSize: '2rem' }} />
        </a>
        <a target="_blank" rel="nofollow" href="https://github.com/Mohamed9820m">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", fontSize: '2rem' }} />
        </a>
        <a target="_blank" rel="nofollow" href="https://medium.com/@mohamedhabibmarouani8">
          <FontAwesomeIcon icon={faMedium} style={{ color: "#ffffff", fontSize: '2rem' }} />
        </a>
      </div>
      
      <p className="text-white text-center mt-10">Created with ♥ by Marouani Mohamed Habib ©</p>
    </div>
  );
};

export default Footer;
