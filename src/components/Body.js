import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { WHATSONYOURMIND_IMG_CDN_URL } from "../constants";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantData from "../utils/useRestaurantData";
import useWhatsOnYourMind from "../utils/useWhatsOnYourMind";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [searchInput, setSearchInput] = useState();
  const {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    topRestaurantTitle,
  } = useRestaurantData();

  const { menuItems, menuTitle } = useWhatsOnYourMind();
  const sliderRef = useRef();
  const isOnline = useOnline();

  //To filter based on each key press
  useEffect(() => {
    filterSearchRestaurants();
  }, [searchInput, allRestaurants]);

  if (!isOnline) {
    return (
      <h1 className="flex justify-center items-center text-3xl font-medium">
        🔴 OFFLINE, Please check your internet connection...
      </h1>
    );
  }

  // Handle case where filteredRestaurants is not an array
  if (!Array.isArray(filteredRestaurants)) return <h1>No restaurants found</h1>;

  const handleInputChange = (e) => setSearchInput(e.target.value);

  const filterSearchRestaurants = () => {
    //Filter the data
    const filteredData = filterData(searchInput, allRestaurants);

    //update the state - restaurants
    setFilteredRestaurants(filteredData);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="px-4 py-2 w-[30vw] border-slate-200 rounded-lg pl-6 text-md text-slateBlue focus:outline-none focus:ring-2 focus:ring-zinc-300"
          placeholder="Search for dishes"
          value={searchInput}
          onChange={handleInputChange}
        />
        <span className="relative right-8 cursor-pointer">
          <IoSearchSharp className="text-slate-500" size={20} />
        </span>
      </div>

      {/* What's on your mind menu */}
      <div className="mt-4">
        <div className="mt-8 mx-28">
          <div className="flex justify-between items-center">
            <h1 className=" text-xl font-extrabold">{menuTitle}</h1>
            <div className="flex gap-2">
              <button onClick={scrollLeft}>
                <FaCircleChevronLeft className="h-6 w-6 rounded-full shadow-lg" />
              </button>
              <button onClick={scrollRight}>
                <FaCircleChevronRight className="h-6 w-6 rounded-full shadow-lg" />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="mt-4 flex overflow-x-hidden mx-28 scroll-smooth">
          {menuItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-[8.5rem] px-2 h-full ">
                <img
                  src={WHATSONYOURMIND_IMG_CDN_URL + item.imageId}
                  alt={item.accessibility?.altText}
                  className="h-full w-full object-cover mb-2 drop-shadow-md rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 mx-[7.5rem] border border-gray-300/50" />

      {/* Top 20 restaurants */}
      <div className="mt-4">
        <div className="mt-8 mx-28">
          <h1 className="flex justify-start items-center text-xl font-extrabold">
            {topRestaurantTitle}
          </h1>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-6">
          {filteredRestaurants.length === 1 &&
          filteredRestaurants[0].info.name === "No results found" ? (
            <h2 className="text-xl font-semibold text-gray-500">
              No results found. Please try a different search.
            </h2>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}>
                <RestaurantCard {...restaurant.info} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
