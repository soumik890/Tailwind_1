import React, { useState } from "react";
import image from "../assets/istockphoto-1162558390-1024x1024.jpg";

function Specialization() {
  const [indexHovered, setindexHovered] = useState(null);
  const data = [
    {
      title: "It / Software",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/it.png",
    },
    {
      title: "Medical",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/medical.png",
    },
    {
      title: "Manufacturing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/manufacture.png",
    },
    {
      title: "Ecommerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae officia, nulla laudantium, libero omnis nemo ut labore rem optio repellat aliquid, ",
      image: "https://sheyhiring.netlify.app/images/ecommerce.png",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl text-primary font-semibold">
        Specialization
      </h1>
      <div className="flex gap-10 sm:flex-col items-center">
        <img className="h-[400px]" src={image} alt="" />

        <p className="text-gray-600 text-md text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          illo doloribus ab alias sed officia quam voluptatem ea officiis, vero
          deserunt voluptas earum rem saepe animi totam veniam inventore magni.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Ducimus quae non rem, reiciendis quaerat voluptate vitae similique,
          recusandae neque accusantium temporibus aspernatur eaque accusamus
          itaque voluptatem, omnis praesentium illo nemo.
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-1 gap-10 mt-10 items-start">
        {data.map((item, index) => {
          return (
            <div
              className=" border-2 border-secondary rounded flex flex-col gap-5 items-center"
              onMouseEnter={() => setindexHovered(index)}
              onMouseLeave={() => setindexHovered(null)}
            >
              <div className="border-2 border-primary p-4 rounded-full bg-white -mt-10">
                <img src={item.image} alt="" className="h-20 w-20" />
              </div>
              <h1 className="text-2xl font-semibold text-primary ">
                {item.title}
              </h1>
              <p
                className={`h-0 overflow-hidden transition-all duration-500 ${
                  index === indexHovered && `h-60 p-5`
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

export default Specialization;
