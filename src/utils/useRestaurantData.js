import { FETCH_RESTAURANT_URL } from "../constants";
import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); //restaurantList to be used if to show hardcoded data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //restaurantList to be used if to show hardcoded data

  //Get the data from API
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }
  //Return restaurant Data
  return { allRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurantData;
