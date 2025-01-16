import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ShowRestaurantDetails from './ShowRestaurantDetails';
import Shimmer from './Shimmer';

import useRestaurantDetails from '../utils/hooks/useRestaurantDetails'
const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [restaurantFullDetails, menuDetails] = useRestaurantDetails(resId);
    
    return Object.values(restaurantFullDetails).length === 0 ? (<Shimmer />) :  (
        <div>
            <ShowRestaurantDetails props = {restaurantFullDetails}/>
        </div>
    )
}
export default RestaurantMenu