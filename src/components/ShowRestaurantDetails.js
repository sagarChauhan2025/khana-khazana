import {  imageSrcURL } from '../utils/constant'
const ShowRestaurantDetails = (props)=>{
    const info = props?.props?.card?.card?.info;
    return (
        <div>
             <h3> {info?.name} </h3>
             <img style= {{height: "200px" , width: "200px"}} src = {imageSrcURL + info?.cloudinaryImageId} alt = 'Restaurant image'/>
             <h3>costForTwo : {info?.costForTwoMessage}</h3>
             <h3>avgRating : {info?.avgRatingString}</h3>
             <h3>Delivery Time : {info?.sla.deliveryTime}</h3>
        </div>
    )
}
export default ShowRestaurantDetails;