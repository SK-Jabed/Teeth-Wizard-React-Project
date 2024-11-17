import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";


const HomePage = () => {
    const services = useLoaderData();

    console.log(services);
    return (
      <div>
        <Banner></Banner>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
          {services.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default HomePage;