import React from "react"
import { Star } from "react-feather"
import {Url} from '../Contants'

// Restaurant card component: Image, name, cuisine
  const RestaurantCard=({cloudinaryImageId,name,cuisines,area,lastMileTravelString,costForTwoString,avgRating})=>{
    // console.log(area)
    return(
      <div className='card'>
        <img src={Url+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4><Star className='star'/>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    )
  }

  export default RestaurantCard