import React, { useState } from "react";
import "./Restaurantcard.css";
const Restaurantcard = (props) => {
  return (
    <div className="restaurant_card">
      {/* restaurant details */}
      <div className="restaurant_details">
        <div className="restaurant_name_rating">
          <p>{props.name}</p>
          <div className="restaurant_star">
            {props.rating}
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <p>
          <i class="fa-solid fa-location-dot"></i>
          <span>
            {props.address},{props.address_line_2}
          </span>
        </p>
        <p>{props.outcode} {props.postcode}</p>
      </div>

      {/* type of food */}
      <div className="restaurant_food">
        <p><i class="fa-solid fa-utensils"></i> {props.type_of_food}</p>
        <p>Visit Menu</p>
      </div>
    </div>
  );
};

export default Restaurantcard;
