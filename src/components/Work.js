import React from "react";
import Car2 from "../assets/projects/Car2.png";
import Crypto2 from "../assets/projects/Crypto2.png";
import Promptopia from "../assets/projects/Promptopia.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent Work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Car2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Car Rental Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://car-rental-gamma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>

                <a
                  href="https://github.com/Knochen01/Car-Rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{ backgroundImage: `url(${Crypto2})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  CryptoBase Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://crypto-knochen.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      DEMO
                    </button>
                  </a>

                  <a
                    href="https://github.com/Knochen01/CryptoBase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      CODE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{ backgroundImage: `url(${Promptopia})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  NextJs Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://promptopia-2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      DEMO
                    </button>
                  </a>
                  <a
                    href="https://github.com/Knochen01/Promptopia-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      CODE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
