import React from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Feedback from "../components/Feedback";

const HomePage = () => {
  const services = useLoaderData();

  const { servicesData, feedbackData } = services || {};

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <div>
        <Link
          to={"/treatments"}
          // onClick={() => addPlayerToQueue(player)}
          type="button"
          className="group flex h-14 w-[200px] items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30 mx-auto mt-4"
        >
          <div className="flex h-full w-full px-8 items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
            Show All
          </div>
        </Link>
      </div>
      <div>
        <Feedback feedbackData={feedbackData}></Feedback>
      </div>
    </div>
  );
};

export default HomePage;
