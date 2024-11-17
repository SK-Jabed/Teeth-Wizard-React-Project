

const ServiceCard = ({ service }) => {
    const { image, treatment, description, cost } = service || {};

    return (
      <div>
        <div className="card shadow-xl p-6 bg-white transition  hover:scale-105 overflow-hidden cursor-pointer h-[450px]">
          <figure className="rounded-2xl">
            <img className="h-full w-full" src={image} alt={image} />
          </figure>
          <div className="border-b-2 pb-3 mt-8">
            <h2 className="text-xl font-semibold">{treatment}</h2>
            <p className="mt-3 text-base font-semibold text-gray-500">
              {description.slice(0, 100)}...
            </p>
            <p className="mt-3 text-base font-semibold text-gray-500">
              Price: ${cost}
            </p>
          </div>
          {/* <Link to={`/gadget/${product_id}`} className="mt-4">
            <button className="px-6 py-3 border-2 border-[#9538E2] text-[#9538E2] text-lg font-semibold bg-white rounded-full hover:bg-[#9538E2] hover:text-white">
              View Details
            </button>
          </Link> */}
        </div>
      </div>
    );
};

export default ServiceCard;