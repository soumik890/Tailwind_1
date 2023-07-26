import React from "react";
import officeImage from "../assets/office.jpg";

function CompanyInfo() {
  return (
    <div className="mt-20 flex flex-col gap-10 mb-10">
      <h1 className="text-center text-3xl font-semibold text-primary">
        Who we are ?
      </h1>
      <div className="flex justify-center">
        <img
          src="https://sheyhiring.netlify.app/images/job-searching.png"
          alt=""
        />
      </div>
      <p className="text-gray-600 text -md">
        SHEYHIRING is an employment agency, which helps companies/employers get
        matched with talented candidates who meet their requirements. We provide
        staffing solutions for local, national, and global recruitment needs.
        Our goal is to assist job seekers in finding new positions while also
        assisting employers in finding the best applicant for their available
        positions. For employers, we give the greatest staffing solution. We
        want to help employers find the right people to help them achieve their
        objectives.
      </p>
      <div className="flex items-center justify-center bg-primary text-secondary p-5 flex-col font-semibold gap-5 hover:bg-secondary hover:text-primary rounded first-letter">
        <h1 className="text-6xl text-center sm:text-3xl">
          "If oppprtunity doesn't knock
        </h1>
        <h1 className="text-7xl text-center sm:text-3xl">build a door"</h1>
      </div>
      <div className="flex gap-5 flex-col">
        <h1 className="text-center text-3xl font-semibold text-primary">
          What we do ?
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          provident omnis iusto fuga culpa aspernatur nesciunt libero quos
          possimus in consectetur perspiciatis, facere voluptas magnam. Autem
          voluptas consequuntur maiores sit?Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae, odit laborum alias asperiores quod
          laudantium, enim nostrum reiciendis consequuntur vitae temporibus!
          Rerum praesentium optio earum. Reprehenderit dolor libero molestiae
          quibusdam?
        </p>
        <div className="relative ">
          <img src={officeImage} className="rounded-2xl" />
          <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-5xl text-center sm:text-3xl">
              Easy and Fast Way For You to Find Your Dreamm Job
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
