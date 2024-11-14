import { FETCH_RESTAURANT_URL } from "../constants";
import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); //restaurantList to be used if to show hardcoded data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //restaurantList to be used if to show hardcoded data
  const [topRestaurantTitle, setTopRestaurantTitle] = useState();

  //Get the data from API
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(FETCH_RESTAURANT_URL);
      const json = await data.json();

      console.log("Json data:", json);

      const cards = json?.data?.cards || [];

      //Top 20 restaurants
      setTopRestaurantTitle(cards[1]?.card?.card?.header?.title);
      setAllRestaurants(
        cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
        cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log("Error", error);
    }
  }

  //Return restaurant Data
  return {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    topRestaurantTitle,
  };
};

export default useRestaurantData;
