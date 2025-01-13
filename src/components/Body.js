import { useEffect, useState } from "react";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function searchHandler(searchkey,restaurantlist){
    return restaurantlist.filter((restaurant)=>{
        return restaurant?.info?.name?.toLowerCase().includes(searchkey.toLowerCase());
    })
}


const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurantsList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurant(restaurantsList);
    setFilteredRestaurant(restaurantsList);
  }
  if(!allRestaurant) return null;

  return allRestaurant.length ===0 ? ( <Shimmer /> ) : ( 
    <>
      <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="search"
        value = {searchText}
        onChange = {(e)=>{setSearchText(e.target.value)}}
         />
         <button onClick = {()=> {
            const filtered = searchHandler(searchText,allRestaurant);
            setFilteredRestaurant(filtered);
            }}>Search</button>
      </div>
      <div className="restaurant-list">
        {
          filteredRestaurant && filteredRestaurant.map((restaurant)=>{
            return <RestuarantCard {...restaurant} key = {restaurant?.info?.id}/>
          })
        }
      </div>
    </>
  );
};

export default Body;
