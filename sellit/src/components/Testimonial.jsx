import React from "react";
import { FaStar } from "react-icons/fa";
import Person from "./../../public/images/Person.webp";
import Person1 from "./../../public/images/Person1.avif";
import { SiComma } from "react-icons/si";

const testimonalData = [
  {
    id: 1,
    image: Person1,
    name: "Juliana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non quam et sapien sed magna placerat. Vivamus sed diam nonum et justo er",
    rating: "5",
  },
  {
    id: 2,
    image: Person,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non quam et sapien sed magna placerat. Vivamus sed diam nonum et justo er",
    rating: "4",
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center lg:text-left lg:p-0  md:px-10 mb-5 mt-20">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
            - -
          </p>
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 -mt-2 font-medium">
            <span className="text-green1"></span>
          </p>
        </div>
        <div className=" lg:-mt-5">
          <div className="flex items-center justify-start gap-5 w-full p-3 pb-6">
            {testimonalData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start p-4 px-6 justify-center md:basis-1/2 basis-full rounded-2xl shadow-xl"
              >
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex w-24 h-24 items-center justify-center bg-green1 p-3 rounded-r-full rounded-tl-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-full border-4 border-white"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center text-lg">
                      <p>{item.name}</p>
                      <p className="text-gray-500 italic">Our Client</p>
                      <p className="flex items-center justify-center gap-2 mt-2 text-lg">
                        <FaStar className="text-yellow" />
                        <FaStar className="text-yellow" />
                        <FaStar className="text-yellow" />
                        <FaStar className="text-yellow" />
                        <FaStar className="text-yellow" />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-[#f5f5f5] rounded-full w-12 h-12 mb-10">
                    <SiComma className="text-green1 text-xl transform -rotate-180" />
                    <SiComma className="text-green1 text-xl transform -rotate-180" />
                  </div>
                </div>
                <p className="text-lg mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
