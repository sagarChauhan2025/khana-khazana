import { imageSrcURL } from "../constant"
export default function RestuarantCard(props){
    return (
        <div className="card">
            <img src = {imageSrcURL+props.info.cloudinaryImageId}></img>
            <h2>{props.info.name}</h2>
            <h3 className="wrap">{props.info.cuisines.slice(0,2).join(',')} </h3>
            <h4>Ratings : {props.info.avgRatingString}</h4>
            <h4>{props.info.isOpen ? 'OPEN' : 'CLOSED'}</h4>
        </div>
    )
}