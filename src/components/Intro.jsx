import React from "react";

function Intro() {
  return (
    <div className="flex items-center mt-5 gap-5 justify-between sm:flex-col">
      <div className="flex flex-col sm:gap-5">
        <h1 className="text-9xl text-primary font-bold sm:text-7xl">SHEY</h1>
        <h1 className="text-9xl text-secondary font-bold sm:text-7xl">
          HIRING
        </h1>
        <div className="flex gap-10 mt-5 items-center">
          <h1 className="text-2xl text-gray-600 ml-2">
            Find a reason to progress
          </h1>
          <button className="bg-primary px-8 py-3 text-white rounded">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=740&t=st=1659194063~exp=1659194663~hmac=61dbc92c4268555d68c1f6bdf586830a497437bb2daf313135d1404841919c21"
          alt=""
          className="h-[600px] sm:h-[400px]"
        />
      </div>

      <div></div>
    </div>
  );
}

export default Intro;
