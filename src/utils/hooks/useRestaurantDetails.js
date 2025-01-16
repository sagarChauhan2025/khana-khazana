import { useState, useEffect } from 'react';
import {RESTAURANT_DETAIL} from '../constant';

const useRestaurantDetails = (resId)=>{
    const [restaurantFullDetails,setRestaurantFullDetails] = useState({});
    const [ menuDetails,setMenuDetails] = useState({});

    useEffect(()=>{
        getRestaurantDetails()
        console.log(resId + "called")
    },[])

    async function getRestaurantDetails(){
        const data = await fetch(RESTAURANT_DETAIL+resId)
        const json = await data.json();
        console.log(json.data);
        setRestaurantFullDetails(json?.data?.cards[2]);
        setMenuDetails(json?.data?.cards[4]);
    }
    return [restaurantFullDetails, menuDetails];

}

export default useRestaurantDetails;