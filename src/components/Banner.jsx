import React from "react";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto hero bg-base-300 min-h-[554px] mb-24 rounded-3xl mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 w-11/12">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div>
            <button
              // onClick={() => addPlayerToQueue(player)}
              type="button"
              className="group flex h-14 w-[200px] items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
            >
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                BOOK NOW
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;