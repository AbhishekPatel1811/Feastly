import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();

    console.log(json);
    setRestaurant(json?.data?.cards[2]?.card?.card?.info); // setRestaurant is used for the restaurant details

    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card // setRestaurantMenu is used for displaying the Menu
        ?.card?.itemCards
    );
  }

  //return restaurant menu data
  return { restaurant, restaurantMenu };
};

export default useRestaurant;
