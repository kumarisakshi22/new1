import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.jpg";
import { Link } from "react-scroll";
import "./home.css";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Web Developer | Programmer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
           Currently Pursuing Btech From Noida Institute of ENgineering and Technology,Greater Noida in CSE with specialisation in Data SCience
          </p>
          <div className='className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-md hover:scale-105 duration-500"'>

          <a href="https://drive.google.com/file/d/1eyzWXsFYneQLcHEou_dvJn0WNzQXkBEu/view" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Resume</a>
          </div>
          {/* <button type="button" class="btn btn-primary">Resume</button> */}
          {/* <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div> */}
          {/* <div>
            <Link
              // to="portfolio"
              to=""
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              <a href="https://drive.google.com/file/d/1eyzWXsFYneQLcHEou_dvJn0WNzQXkBEu/view">Resume</a>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div> */}
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-md hover:scale-105 duration-500" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
