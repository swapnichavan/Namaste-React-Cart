import React from "react"
import { Star } from "react-feather"
import {restaurantList,Url} from '../Contants'

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body=()=>{
    console.log(restaurantList)
    return(
      <div className='restaurant-list'>
        {restaurantList.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
        ))}
      </div>
    )
  }
  
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

  export default Body