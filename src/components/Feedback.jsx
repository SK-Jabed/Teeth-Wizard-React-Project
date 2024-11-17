import React from 'react';

const Feedback = ({ feedbackData }) => {

  return (
    <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto mt-8">
      {feedbackData.map((feed) => (
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <img
                src={feed.userImg}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <h2 className="ml-4">{feed.name}</h2>
              <p className="">{new Date().toLocaleDateString()}</p>
            </div>

            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              {/* <button className="btn btn-primary">Buy Now</button> */}
              <button
                // onClick={() => addPlayerToQueue(player)}
                type="button"
                className="group flex h-12 w-[150px] items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
              >
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                  BOOK NOW
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;