import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";

const useWhatsOnYourMind = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuTitle, setMenuTitle] = useState();

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const data = await fetch(FETCH_RESTAURANT_URL);
      const json = await data.json();

      const cards = json?.data?.cards || [];

      //What's on your mind menu
      setMenuTitle(cards[0]?.card?.card?.header?.title);
      setMenuItems(cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    } catch (error) {
      console.log("Error", error);
    }
  }
  return { menuItems, menuTitle };
};

export default useWhatsOnYourMind;
