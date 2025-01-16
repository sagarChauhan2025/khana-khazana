import { imageSrcURL } from "../utils/constant";
import { Link } from "react-router-dom";
export default function RestuarantCard(props){
    return (
        <div className="card">
            <img src = {imageSrcURL+props.info.cloudinaryImageId}></img>
            <Link to={"restaurant/"+ props.info.id}><h2>{props.info.name}</h2></Link>
            <h3 className="wrap">{props.info.cuisines.slice(0,2).join(',')} </h3>
            <h4>Ratings : {props.info.avgRatingString}</h4>
            <h4>{props.info.isOpen ? 'OPEN' : 'CLOSED'}</h4>
        </div>
    )
}