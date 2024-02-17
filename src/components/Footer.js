import React from "react";
import { Heart,AtSign} from 'react-feather';

// Footer component for footer section
const Footer=()=>{
    const year=new Date().getFullYear()
    return(
      <div className='footer'>
        Created By
        <span>
         <Heart className="heart"/>
        </span>
        <a href='https://www.linkedin.com/in/swapnil-chawan-b2164a172/' target='_blank'>
          Swapnil Chavan
        </a>
        <span>
        <AtSign className='at'/>
        </span>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    )
  }

  export default Footer;