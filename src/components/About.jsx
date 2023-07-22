import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am Kumari Sakshi, currently pursuing my B. Tech in Computer Science and Engineering with a specialization in Data Science from Noida Institute of Engineering and Technology, Greater Noida.
My skill set encompasses Python, ReactJS, SQL, HTML, CSS, JavaScript, machine learning, and data structures and algorithms. Additionally, I have a working knowledge of Artificial intelligence MongoDB, Java and C . 
With a passion for technology and a strong focus on problem-solving.
          
        </p>

        <br />

        <p className="text-xl">
          I am dedicated to delivering high-quality solutions. 
Seeking a job role, I aim to enhance my skills further and contribute my expertise to an organization. With a passion for continuous growth and a drive to make a meaningful impact, I am eager to join a dynamic team where I can contribute, learn, and thrive.
        </p>
      </div>
    </div>
  );
};

export default About;
