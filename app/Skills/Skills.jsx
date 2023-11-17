"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faCode, faServer, faGrip, faPuzzlePiece, faMobile,faComments ,faUsers,faExchange,faClock,faLightbulb} from '@fortawesome/free-solid-svg-icons';


import frontendLogo1 from '../../public/html.png';
import frontendLogo2 from '../../public/css.png';
import frontendLogo3 from '../../public/react.png';
import frontendLogo4 from '../../public/mui.png';
import frontendLogo5 from '../../public/tailwind.png';
import frontendLogo6 from '../../public/next.png';


import frontendLogo7 from '../../public/js.png';
import frontendLogo8 from '../../public/node-js.png';
import frontendLogo9 from '../../public/express.png';
import frontendLogo10 from '../../public/mysql.png';
import frontendLogo11 from '../../public/mongodb.png';
import frontendLogo12 from '../../public/ts.png';
import frontendLogo13 from '../../public/firebase.png'

import frontendLogo14 from '../../public/jsblack.png'
import frontendLogo15 from '../../public/tsblack.png'

import frontendLogo16 from '../../public/analytics.png'
import frontendLogo17 from '../../public/docker.png'
import frontendLogo18 from '../../public/git.png'


const tools =[
  frontendLogo16,
  frontendLogo17,
  frontendLogo18
]



const logos = [
  frontendLogo1,
  frontendLogo2,
  frontendLogo3,
  frontendLogo4,
  frontendLogo5,
  frontendLogo6,
  frontendLogo12,
  frontendLogo7,
];

const logo = [
  frontendLogo15,
  frontendLogo8,
  frontendLogo9,
  frontendLogo10,
  frontendLogo11,
  frontendLogo13,
  frontendLogo14,
];





const SkillsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('coding');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (

    <div className="bg flex flex-col w-full font-raleway bg-[#000C29] dark:bg-neutral-900 py-8 px-4 md:px-0">



<div id= "skills"className="flex flex-col justify-center items-center mb-16 my-16">
        <p className="skills text-lg md:text-lg font-raleway font-medium text-black bg-white px-6 py-1.5 rounded-full dark:text-neutral-400">
          My Skills
        </p>
      </div>


    <div className="flex flex-col w-full font-raleway">
      
    <div className="flex justify-center items-center w-full mb-8 space-x-4">
  <button
    onClick={() => handleTabChange('coding')}
    className={`border dark:border-neutral-800 py-3 px-6 rounded-lg text-gray-400 hover:text-black dark:text-neutral-400 hover:border-white  hover:text-white dark:hover:border-neutral-700 bg-blue-500 text-white dark:bg-blue-500 dark:text-neutral-300 ${selectedTab === 'coding' ? 'cursor-pointer' : ''}`}
  >
    Coding Skills
  </button>
  <button
    onClick={() => handleTabChange('soft')}
    className={`border dark:border-neutral-800 py-3 px-6 rounded-lg text-gray-400 hover:text-black dark:text-neutral-400 hover:border-white  hover:text-white dark:hover:border-neutral-700 bg-blue-500 text-white dark:bg-blue-500 dark:text-neutral-300 ${selectedTab === 'soft' ? 'cursor-pointer' : ''} bg-blue-500`}
  >
    Soft Skills
  </button>
</div>



      <div className="flex justify-center items-center w-full mb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:w-[850px]">
          {/* Frontend Development */}

          {selectedTab === 'coding' && (
<>
<div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-#2963A5 text-white bg-blue-500 dark:text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
  {/* Logo for Frontend Development */}

  <div className="grid grid-cols-3 gap-4">
    {logos.map((logos, index) => (
      <Image
        key={index}
        src={logos}
        alt={`Frontend Development Logo ${index + 1}`}
        className="w-12 h-12 md:w-10 md:h-10 p-0.1" 
      />
    ))}
  </div>

  <div className="md:absolute bottom-0 left-0">
    <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Frontend Development</p>
  </div>
</div>
          
          <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-3 gap-4">
        {logo.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Frontend Development Logo ${index + 1}`}
            className=" w-12 h-12 md:w-10 md:h-10 p-0.1" 
          />
        ))}
      </div>
            <div className="md:absolute bottom-0 left-0">
              <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Backend Development</p>
             
            </div>
          </div>

          <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-3 gap-4">
    {tools.map((logos, index) => (
      <Image
        key={index}
        src={logos}
        alt={`Frontend Development Logo ${index + 1}`}
        className="w-12 h-12 md:w-10 md:h-10 p-0.1" 
      />
    ))}
  </div>
            <div className="md:absolute bottom-0 left-0">
              <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Tools</p>
            </div>
          </div>

          <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
            <FontAwesomeIcon icon={faGrip} className="fas fa-2x fa-fw hidden md:block" />
            <FontAwesomeIcon icon={faGrip} className="fas fa-lg fa-fw md:hidden" />
            <br />
            <div className="md:absolute bottom-6 left-0">
              <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Web Applications</p>
              <p className="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">
                Creating dynamic and intuitive web experiences.
              </p>
            </div>
          </div>

          <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
            <FontAwesomeIcon icon={faPuzzlePiece} className="fas fa-2x fa-fw hidden md:block" />
            <FontAwesomeIcon icon={faPuzzlePiece} className="fas fa-lg fa-fw md:hidden" />
            <br />
            <div className="md:absolute bottom-6 left-0">
              <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">API Development</p>
              <p className="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">
                Crafting robust APIs, turning ideas into functional solutions.
              </p>
            </div>
          </div>

          <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
            <FontAwesomeIcon icon={faMobile} className="fas fa-2x fa-fw hidden md:block" />
            <FontAwesomeIcon icon={faMobile} className="fas fa-lg fa-fw md:hidden" />
            <br />
            <div className="md:absolute bottom-6 left-0">
              <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Mobile Applications</p>
              <p className="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">
                Developing mobile apps with seamless user experiences.
              </p>
            </div>
          </div>

          </>

)}

{selectedTab === 'soft' && (

<>            <div className="flex flex-col w-full font-raleway">

              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-black bg-blue-500 dark:bg-neutral-800 text-white dark:text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faComments} className="fas fa-2x fa-fw hidden md:block" />
                <FontAwesomeIcon icon={faComments} className="fas fa-lg fa-fw md:hidden" />
                <br />
                <div className="md:absolute bottom-6 left-0">
                  <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Effective Communication</p>
                  <p className="hidden md:block text-sm font-raleway text-neutral-300 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">
                    Effective exchange of information and ideas
                  </p>
                </div>
              </div>
            </div>

 
            <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out">
      <FontAwesomeIcon icon={faUsers} className="fas fa-2x fa-fw hidden md:block" />
      <FontAwesomeIcon icon={faUsers} className="fas fa-lg fa-fw md:hidden" />
      <div className="md:absolute bottom-6 left-0">
        <p className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Smart Collaboration</p>
        <p className="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">Working effectively in a team environment</p>
      </div>
    </div>

<div class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out" bis_skin_checked="1">
<FontAwesomeIcon icon={faExchange} className="fas fa-2x fa-fw hidden md:block" />
<FontAwesomeIcon icon={faExchange} className="fas fa-lg fa-fw md:hidden" />
<i class="fas fa-exchange-alt fa-2x fa-fw hidden md:block"></i>
<i class="fas fa-exchange-alt fa-lg fa-fw md:hidden"></i>
<div class="md:absolute bottom-6 left-0" bis_skin_checked="1">
  <p class="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Easy Adaptability</p>
  <p class="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">Flexibility to embrace change and new technologies</p>
</div>
</div>

<div class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out" bis_skin_checked="1">
<FontAwesomeIcon icon={faClock} className="fas fa-2x fa-fw hidden md:block" />
<FontAwesomeIcon icon={faClock} className="fas fa-lg fa-fw md:hidden" />
<i class="fas fa-clock fa-2x fa-fw hidden md:block"></i>
<i class="fas fa-clock fa-lg fa-fw md:hidden"></i>
<div class="md:absolute bottom-6 left-0" bis_skin_checked="1">
  <p class="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Time Management</p>
  <p class="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">Efficiently organizing and prioritizing tasks</p>
</div>
</div>

<div class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out" bis_skin_checked="1">
<FontAwesomeIcon icon={faPuzzlePiece} className="fas fa-2x fa-fw hidden md:block" />
<FontAwesomeIcon icon={faPuzzlePiece} className="fas fa-lg fa-fw md:hidden" />

<i class="fas fa-puzzle-piece fa-2x fa-fw hidden md:block"></i>
<i class="fas fa-puzzle-piece fa-lg fa-fw md:hidden"></i>
<div class="md:absolute bottom-6 left-0" bis_skin_checked="1">
  <p class="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Problem Solving</p>
  <p class="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">Analytical thinking to resolve challenges</p>
</div>
</div>

<div class="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out" bis_skin_checked="1">
<FontAwesomeIcon icon={faLightbulb} className="fas fa-2x fa-fw hidden md:block" />
<FontAwesomeIcon icon={faLightbulb} className="fas fa-lg fa-fw md:hidden" />
<i class="fas fa-lightbulb fa-2x fa-fw hidden md:block"></i>
<i class="fas fa-lightbulb fa-lg fa-fw md:hidden"></i>
<div class="md:absolute bottom-6 left-0" bis_skin_checked="1">
  <p class="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Creativity & Innovations</p>
  <p class="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-medium md:px-6 md:line-clamp-none line-clamp-2">Generating innovative solutions and ideas</p>
</div>
</div>


</>



          )}


        </div>
      </div>
    </div>
    </div>

  );
};

export default SkillsComponent;
