"use client"
import React from 'react';
import Image from 'next/image';
import image from '../../public/image.png';
import image2 from '../../public/pat-2.png'
import image1 from '../../public/pat-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import  "./Header.css"

const Hero = () => {
  return (
    <section
    className="lui-section lui-section-hero lui-gradient-top"
    id="home"
    >
    <div className="container">
    
    <div className="lui-started v-line v-line-left">

    <div className="section hero-started">
      <div
        className="content scrolla-element-anim-1 scroll-animate"
        data-animate="active"
      >
        <div className="titles">
          <div className="lui-subtitle">
            <span>
              {" "}
              Hello, <b className='myname'>my name is</b>
            </span>
          </div>
          <h1
            className="title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            <span>
              <b>Mohamed</b> Habib{" "}
            </span>
          </h1>
          <div className="label lui-subtitle ">
            {" "}
            I am <strong>Full Stack Web Developer</strong>
          </div>
        </div>
        <div className="description">
        <div className="text-custom-color">
  <p className="text-lg">
    Passionate and adaptable Full Stack developer, recognized for breathing life into creative
    ideas. With a proven track record of successfully delivering diverse projects, I am a true
    innovator who thrives on challenges.
  </p>
</div>

          <div className="social-links flex space-x-4">
  <a target="_blank" rel="nofollow" href="https://www.instagram.com/_mohamed.habib/?hl=fr">
    <FontAwesomeIcon icon={faInstagram}   style={{ color: "#ffffff", fontSize: '2rem' }} />
  </a>
  <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/mohamed-habib-43908517b/">
    <FontAwesomeIcon icon={faLinkedin}  style={{ color: "#ffffff", fontSize: '2rem' }} />
  </a>
  <a target="_blank" rel="nofollow" href="https://github.com/Mohamed9820m">
    <FontAwesomeIcon icon={faGithub}   style={{ color: "#ffffff", fontSize: '2rem' }} />
  </a>
</div>

        </div>
        {/* <div className="bts">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1USCQQGcM7H9YunhamD5XR8x9paMeMBUO/view?usp=sharing"
            className="btn"
          >
            <span>Download CV</span>
          </a>
          
        </div> */}
      </div>
      <div
        className="slide scrolla-element-anim-1 scroll-animate"
        data-animate="active"
      >
         <Image
              src={image}
              alt="Mohamed Habib"
            />
            
        <span className="circle circle-1" />


        <Image
  className="circle img-1"
  src={image1}
  alt="Description for img-1"
/>

<Image
  className="circle img-2"
  src={image2}
  alt="Description for img-2"
/>

<Image
  className="circle img-3"
  src={image2}
  alt="Description for img-3"
/>
     
      </div>
    </div > 


  


    </div>
    </div>
    </section >
  );
};

export default Hero;
