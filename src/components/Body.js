import { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantData from "../utils/useRestaurantData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { IoSearchSharp } from "react-icons/io5";

const BodyComponent = () => {
  const [searchInput, setSearchInput] = useState();
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantData();
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="flex justify-center items-center text-3xl font-medium">
        🔴 OFFLINE, Please check your internet connection
      </h1>
    );
  }

  // Handle case where filteredRestaurants is not an array
  if (!Array.isArray(filteredRestaurants)) return <h1>No restaurants found</h1>;

  //Filter restaurants
  const handleSearch = () => {
    // Filter the data
    const data = filterData(searchInput, allRestaurants);

    // Update the state - restaurants
    setFilteredRestaurants(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="px-4 py-2 w-[30vw] border-slate-200 bg-white/75 backdrop-blur-lg rounded-lg pl-6 text-md text-slateBlue focus:outline-none focus:ring-2 focus:ring-zinc-300"
          placeholder="Search for dishes"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyUp={handleKeyPress}
        />
        <span
          className="relative right-8 cursor-pointer"
          onClick={handleSearch}>
          <IoSearchSharp className="text-slate-500" size={20} />
        </span>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}>
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

// <RestaurantCard {...restaurantList[1].info} />
// <RestaurantCard {...restaurantList[2].info} />
// <RestaurantCard {...restaurantList[3].info} />
// <RestaurantCard {...restaurantList[4].info} />
// <RestaurantCard {...restaurantList[5].info} />
// <RestaurantCard {...restaurantList[6].info} />
// <RestaurantCard {...restaurantList[7].info} />\

export default BodyComponent;
