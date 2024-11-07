export const filterData = (searchInput, restaurants) => {
  if (!searchInput) return restaurants;

  //searchwords
  const normalizedInput = searchInput.toLowerCase();

  const filteredData = restaurants.filter((restaurant) => {
    const name = restaurant?.info?.name?.toLowerCase() || "";
    // Split name and search input into words and check for partial matches
    const nameWords = name.split(" ");
    const searchWords = normalizedInput.split(" ");

    // Check if any search word partially matches any name word
    return searchWords.some((searchWord) =>
      nameWords.some((nameWord) => nameWord.includes(searchWord))
    );
  });

  return filteredData.length > 0
    ? filteredData
    : [{ info: { name: "No results found" } }];
};
