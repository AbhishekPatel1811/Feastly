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
    try {
      const data = await fetch(FETCH_RESTAURANT_URL);
      const json = await data.json();

      console.log("Json data:", json);

      const restaurants = extractRestaurantsData(json);
      if (restaurants) {
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  const extractRestaurantsData = (json) => {
    const cards = json?.data?.cards || [];
    for (let card of cards) {
      const restaurantsData =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (Array.isArray(restaurantsData)) return restaurantsData;
    }
    return null;
  };

  //Return restaurant Data
  return { allRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurantData;
