import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantData from "../utils/useRestaurantData";
import useOnline from "../utils/useOnline";

const BodyComponent = () => {
  const [searchInput, setSearchInput] = useState();
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantData();
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 OFFLINE, Please check your internet connection</h1>;
  }

  // Handle case where filteredRestaurants is not an array
  if (!Array.isArray(filteredRestaurants)) return <h1>No restaurants found</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Filter the data
            const data = filterData(searchInput, allRestaurants);

            // Update the state - restaurants
            setFilteredRestaurants(data);
          }}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
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
