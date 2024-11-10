import toast from "react-hot-toast";

// get all data form local storage;
const getFavorites = () => {
  const storeData = localStorage.getItem("favorites");
  if (storeData) {
    const dataParse = JSON.parse(storeData);
    return dataParse;
  } else {
    return [];
  }
};
// set data to local storage
const addFavoritesData = (coffee) => {
  const storeData = getFavorites();
  const isExist = storeData.find((item) => item.id === coffee.id);
  if (isExist) {
    return toast.error('already exists')
  } else {
    storeData.push(coffee);
    const dataStore = JSON.stringify(storeData);
    localStorage.setItem("favorites", dataStore);
    toast.success('Successfully added!');
  }
};
// remove data from local storage

export { addFavoritesData , getFavorites};
