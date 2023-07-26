import React, { useState } from "react";
import image from "../assets/istockphoto-1162009708-1024x1024-2.jpg";

function Recruitment() {
  const [indexHovered, setindexHovered] = useState(null);
  const data = [
    {
      title: "Remote",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/remote.png",
    },
    {
      title: "Contract Based",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/contract.png",
    },
    {
      title: "Permanent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/permenent.png",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl text-primary font-semibold">
        Recruitment Areas
      </h1>
      <div className="flex gap-10 sm:flex-col items-center">
        <p className="text-gray-600 text-md text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          illo doloribus ab alias sed officia quam voluptatem ea officiis, vero
          deserunt voluptas earum rem saepe animi totam veniam inventore magni.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Ducimus quae non rem, reiciendis quaerat voluptate vitae similique,
          recusandae neque accusantium temporibus aspernatur eaque accusamus
          itaque voluptatem, omnis praesentium illo nemo.
        </p>
        <img className="h-[400px]" src={image} alt="" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 mt-10 items-start">
        {data.map((item, index) => {
          return (
            <div
              className=" border-2 border-primary rounded flex flex-col gap-5 "
              onMouseEnter={() => setindexHovered(index)}
              onMouseLeave={() => setindexHovered(null)}
            >
              <div className="flex justify-start">
                <h1 className="text-l font-semibold text-white bg-primary px-5 py-2 rounded -ml-10 mt-5">
                  {item.title}
                </h1>
              </div>

              <div className="flex justify-center">
                <img src={item.image} alt="" className="h-20 w-20" />
              </div>

              <p
                className={`h-0 overflow-hidden transition-all duration-500 ${
                  index === indexHovered &&
                  `h-48 p-5 m-2 bg-primary text-white rounded`
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recruitment;
