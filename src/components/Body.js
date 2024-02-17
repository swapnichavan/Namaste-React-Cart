import React, { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import {restaurantList} from '../Contants'

const filterData=(searchText,restaurants)=>{
    // console.log(searchText,restaurants)
    return restaurants.filter((restaurant)=>{
        console.log(restaurant.data.name)
        return restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
    })
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body=()=>{

    const [searchText,setSearchText]=useState("")
    const [restaurants,setRestaurants]=useState(restaurantList)

    console.log(restaurantList)
    return(
        <>
        <div className="search-container">
            <input type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="search-btn"
            onClick={()=>{
                //filter data
                let data=filterData(searchText,restaurants)
                setRestaurants(data)
                setSearchText("")
            }}
            >
            Search
            </button>
        </div>
      <div className='restaurant-list'>
        {restaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            ))}
      </div>
        </>
    )
  }
  
  

  export default Body