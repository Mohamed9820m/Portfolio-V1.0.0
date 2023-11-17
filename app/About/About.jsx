import React, { useEffect } from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import image from '../../public/oh.jpg';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


function About() {
  useEffect(() => {
    document.querySelectorAll('.rough-notation').forEach((node) => {
      node.setAttribute('data-animation', 'highlight');
      node.setAttribute('data-color', '#00D700'); 
      node.setAttribute('data-iterations', '2');
      node.setAttribute('data-roughness', '2');
      node.setAttribute('data-opacity', '1');
      
    });
  }, []);

  const scrollTo = (elementId) => {
    scroll.scrollTo(elementId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div id="about" className="bg flex flex-col w-full font-raleway bg-[#000C29] dark:bg-neutral-900 py-20 px-4 md:px-0">
        <div  className="flex flex-col justify-center items-center mb-16">
        <p  className="about text-lg md:text-lg font-raleway font-medium text-black bg-white px-6 py-1.5 rounded-full dark:text-neutral-400">
          About Me
        </p>
      </div>
      <div className="lg:flex lg:space-x-10">
        <div className="hidden lg:block w-1/2 dark:border-black xs:rounded-2xl" style={{ opacity: 1, transform: 'none' }}>
          <Image src={image} className="w-[65%] mx-auto dark:opacity-70 border-5 border-white rounded-xl" alt="A vector illustration of a boy holding a laptop open before him" />
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className=" max-w-[700px] mx-auto xl:mx-0">
          <p className="about text-sm sm:text-base text-justify xl:text-lg font-raleway font-normal dark:text-neutral-400 text-black mt-2 md:mt-4 !leading-loose xl:w-2/3 text-white">
  I am a passionate and skilled Software Developer specializing in{' '}
  <RoughNotation type="circle" show={true} color="orange" className="font-semibold" order={1}>
    Mobile and Web development
  </RoughNotation>{' '}
  with a strong dedication to quality and{' '}
  <RoughNotation type="highlight" show={true} className="font-semibold" color="orange" order={2}>
    attention to{' '}
  </RoughNotation>
  <RoughNotation type="highlight" show={true} className="font-semibold" color="orange" order={2}>
  detail
  </RoughNotation>
  . I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices by{' '}
  <RoughNotation type="highlight" show={true} className="font-semibold" color="orange" order={3}>
    attending conferences
  </RoughNotation>
  ,{' '}
  <RoughNotation type="highlight" show={false} className="font-semibold" color="orange" order={4}>
    taking online courses
  </RoughNotation>
  , and{' '}
  <RoughNotation type="underline" show={true} className="font-semibold" color="orange" order={5}>
    experimenting with new technologies
  </RoughNotation>
  . I build{' '}
  <RoughNotationGroup type="highlight" show={true} className="font-semibold" color="orange" order={6}>
   functional{' '}
  </RoughNotationGroup>

  <RoughNotationGroup type="highlight" show={true} className="font-semibold" color="orange" order={7}>
    beautiful{' '}
  </RoughNotationGroup>

  <RoughNotationGroup type="highlight" show={true} className="font-semibold" color="orange" order={8}>
    user-friendly designs{' '}
  </RoughNotationGroup>

  . My commitment to innovation ensures that clients receive cutting-edge and effective solutions.
</p>
            <div className="flex justify-between items-center space-x-4 w-full xl:w-2/3">
              <div className="flex space-x-4">
              <a href="https://drive.google.com/file/d/1USCQQGcM7H9YunhamD5XR8x9paMeMBUO/view?usp=sharing" target="_blank">
  <button className="button text-gray-100 dark:text-neutral-300 mt-6 mb-4 rounded-[20px] py-3 px-6 md:px-9 bg-[#1571e1] dark:bg-neutral-700 dark:hover:text-neutral-300 hover:text-black dark:hover:bg-neutral-600 hover:bg-white hover:border hover:border-black dark:hover:border-neutral-800 flex items-center">
    <FontAwesomeIcon icon={faFile} style={{ color: "#fcfcfc", marginRight: '20px' }} />
    <span className="font-raleway text-base sm:text-m font-normal">Download cv</span>
  </button>
</a>

<ScrollLink
      to="contact"
      spy={true}
      smooth={true}
      offset={-70}
      duration={800}
      onClick={() => scrollTo('contact')}
    >
      <button
        className="dark:text-neutral-400 mt-6 mb-4 border border-black dark:border-neutral-800 dark:hover:border-neutral-600 bg-[#1571e1] hover:bg-black rounded-[20px] py-3 px-8 md:px-9 dark:hover:text-neutral-300 flex items-center"
      >
        <FontAwesomeIcon icon={faHandshake} style={{ color: '#fcfcfc', marginRight: '22px' }} />
        <span className="font-raleway text-base sm:text-lg font-normal text-white">
          Contact
        </span>
      </button>
    </ScrollLink>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
