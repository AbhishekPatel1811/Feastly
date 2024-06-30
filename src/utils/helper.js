export const filterData = (searchInput, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );

  return filterData;
};
