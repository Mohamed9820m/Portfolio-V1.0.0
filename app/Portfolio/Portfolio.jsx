// PortfolioIsotope.jsx
import React from 'react';
import Image from 'next/image';
import decor from '../../public/pat-3.png'
import image from '../../public/portfolioeco.png';
import image1 from '../../public/ecoclicko.png'
import birds from '../../public/birds.png'
import scissors from '../../public/scissors.png'
import store from '../../public/store.png'

const PortfolioIsotope = () => {
  return (
    
    <div className="bg flex flex-col w-full font-raleway bg-[#000C29] dark:bg-neutral-900 py-8 px-4 md:px-0">

        

    <div  className="w-full xl:container mx-auto">
      <div id="portfolio" className="flex flex-col justify-center items-center mb-16 my-16">
        <p className="Projects text-lg md:text-lg font-raleway font-medium text-black bg-white px-6 py-1.5 rounded-full dark:text-neutral-400">
          My Projects
        </p>
      </div>

  

      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:px-20">
        {/* Project 1 */}

        <div className="text-black rounded-xl border p-6 bg-white hover:border-black dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer hover:scale-95 ease-in-out ">
          <div className="group overflow-y-auto no-scrollbar">
            <div className="my-2 text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300">
              <i className="fas fa-file-invoice fa-xl fa-fw"></i>
            </div>
            <h1 className="text-xl font-medium text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300 font-raleway line-clamp-1  mb-3">
            EcoClicko - for Ecology

            </h1>

            <div
  className="works-item scrolla-element-anim-1 scroll-animate"
  data-animate="active"
>


  <div className="imag">
    <div className="img">
        <a>
          <Image
            src={image}
            alt="Gooir"
          />
          <span className="overlay" />
        </a>
    </div>
  </div>



    <div className="text m-5">
      <p>
      EcoClicko: Full Stack Intern Developer. Designed immersive web pages & implemented secure authentication, integrated payments (Payme), and used Cloudinary. Tech : React, JavaScript, Node.js, JWT, Node Mailer, Cloudinary.
      </p>
      
    </div>
     



</div>
         
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ecoclicko.info/"
            >
                <span className="font-raleway leading-normal font-medium flex items-center group hover:fa-bounce">
                  <span className="underline">View</span>
                  <div className="text">
  
      <Image
    className="bg-imge"
    src = {decor}
  />
    </div>
                </span>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="text-black rounded-xl border p-6 bg-white hover:border-black dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer hover:scale-95 ease-in-out ">
          <div className="group overflow-y-auto no-scrollbar">
            <div className="my-2 text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300">
              <i className="fas fa-file-invoice fa-xl fa-fw"></i>
            </div>
            <h1 className="text-xl font-medium text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300 font-raleway line-clamp-1 mb-3">
            Doctor and Patient Appointment
            </h1>

            <div
  className="works-item scrolla-element-anim-1 scroll-animate"
  data-animate="active"
>


  <div className="imag">
    <div className="img">
        <a>
          <Image
          className='imageeee'
            src={image1}
            alt="Gooir"
          />
          <span className="overlay" />
        </a>
    </div>
  </div>



    <div className="text m-2.5">
      <p>
      Creating React Native mobile interfaces, real-time features with WebSocket, Three.js for 3D models, and Adobe Creative Suite. Backend mastery includes Node.js, Express.js, MySQL, JWT for authentication, RESTful APIs, and Cloudinary for image handling. 
      </p>
      
    </div>
     



</div>
         
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/12DDmNPHoc7XDgNt3xVNzS9EimF-6AI5j/view?usp=sharing"
            >
                <span className="font-raleway leading-normal font-medium flex items-center group hover:fa-bounce">
                  <span className="underline">View</span>
                  <div className="text">
  
      <Image
    className="bg-imge"
    src = {decor}
  />
    </div>
                </span>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="text-black rounded-xl border p-6 bg-white hover:border-black dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer hover:scale-95 ease-in-out ">
          <div className="group overflow-y-auto no-scrollbar">
            <div className="my-2 text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300">
              <i className="fas fa-file-invoice fa-xl fa-fw"></i>
            </div>
            <h1 className="text-xl font-medium text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300 font-raleway line-clamp-1 mb-3 ">
            Shooting bird 2D-Game

            </h1>

            <div
  className="works-item scrolla-element-anim-1 scroll-animate"
  data-animate="active"
>


  <div className="imag">
    <div className="img">
        <a>
          <Image
            src={birds}
            alt="Gooir"
          />
          <span className="overlay" />
        </a>
    </div>
  </div>



    <div className="text m-2">
      <p>
      Designing a 2D shooting bird game to enhance HTML, CSS, and JavaScript skills. Implementing interactive gameplay, animations, and user interfaces for a dynamic gaming experience. Applying JavaScript for game logic, ensuring a responsive and engaging player interaction.
      </p>
      
    </div>
     



</div>
         
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/18aBtDoMglXt6tqym_8glSK-D9odITxtm/view?usp=sharing"
            >
                <span className="font-raleway leading-normal font-medium flex items-center group hover:fa-bounce">
                  <span className="underline">View</span>
                  <div className="text">
  
      <Image
    className="bg-imge"
    src = {decor}
  />
    </div>
                </span>
            </a>
          </div>
        </div>




        {/* project 4  */}


        <div className="text-black rounded-xl border p-6 bg-white hover:border-black dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer hover:scale-95 ease-in-out ">
          <div className="group overflow-y-auto no-scrollbar">
            <div className="my-2 text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300">
              <i className="fas fa-file-invoice fa-xl fa-fw"></i>
            </div>
            <h1 className="text-xl font-medium text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300 font-raleway line-clamp-1 mb-3 ">
            Scissors, Paper, Rock 2D-Game
            </h1>

            <div
  className="works-item scrolla-element-anim-1 scroll-animate"
  data-animate="active"
>


  <div className="imag">
    <div className="img">
        <a>
          <Image
            src={scissors}
            alt="Gooir"
          />
          <span className="overlay" />
        </a>
    </div>
  </div>
    <div className="text m-3">
      <p>
      Creating a Scissors, Paper, Rock game to solidify foundational skills in HTML, CSS, and JavaScript. Developing an interactive and visually appealing interface for a classic game experience. Utilizing JavaScript for game logic, ensuring seamless player interactions
      </p>
      
    </div>
</div>
         
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1DAwHxSMsqCMR7UBCbihEy5VTTb2ViPzU/view?usp=sharing"
            >
                <span className="font-raleway leading-normal font-medium flex items-center group hover:fa-bounce">
                  <span className="underline">View</span>
                  <div className="text">
  
      <Image
    className="bg-imge"
    src = {decor}
  />
    </div>
                </span>
            </a>
          </div>
        </div>


{/* project 5 */}


        <div className="text-black rounded-xl border p-6 bg-white hover:border-black dark:bg-neutral-800 dark:border-neutral-700 cursor-pointer hover:scale-95 ease-in-out ">
          <div className="group overflow-y-auto no-scrollbar">
            <div className="my-2 text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300">
              <i className="fas fa-file-invoice fa-xl fa-fw"></i>
            </div>
            <h1 className="text-xl font-medium text-neutral-700 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-neutral-300 font-raleway line-clamp-1 mb-3.5 ">
            Antika - Vintage Ecommerce
            </h1>

            <div
  className="works-item scrolla-element-anim-1 scroll-animate"
  data-animate="active"
>


  <div className="imag">
    <div className="img">
        <a>
          <Image
            src={store}
            alt="Gooir"
          />
          <span className="overlay" />
        </a>
    </div>
  </div>
    <div className="text m-1">
      <p>
      Developed a responsive e-commerce platform with Next.js, focusing on intuitive interfaces and secure transactions via 'Flouci'. Orchestrated backend operations using Node.js, Express.js, and MongoDB, optimizing performance and ensuring efficient data management. Integrated dynamic features 
      </p>
      
    </div>
</div>

         
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/13u6Gj1u3iAz8rEI-xO6DNTfN8kRu6LpH/view?usp=sharing"
            >
                <span className="font-raleway leading-normal font-medium flex items-center group hover:fa-bounce">
                  <span className="underline">View</span>
                  <div className="text">
  
      <Image
    className="bg-imge"
    src = {decor}
  />
    </div>
                </span>
            </a>
          </div>
        </div>









</div>

    </div>

    <div className="flex flex-col justify-center items-center mb-10 my-16">
        <p className="contact text-lg md:text-lg font-raleway font-medium text-black bg-white px-6 py-1.5 rounded-full dark:text-neutral-400">
          Contact Me
        </p>
      </div>

    </div>


  );
};

export default PortfolioIsotope;
