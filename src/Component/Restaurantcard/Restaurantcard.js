import React, { useState, useEffect } from "react";
import "./Restaurantcard.css";
import Rating from "./../Rating/Rating";
import Aos from "aos";
import "aos/dist/aos.css";

const Restaurantcard = (props) => {
  // animation Aos
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const numOfStar = 6;

  return (
    <div className="restaurant_card" data-aos="zoom-in">
      {/* restaurant details */}
      <div className="restaurant_details">
        <div className="restaurant_name_rating">
          <h3>{props.name}</h3>
          <div className="restaurant_star">
            {/* <i class="fa-solid fa-star" ></i> */}
            {[...Array(numOfStar)].map((_, index) => {
              if (index + 1 <= props.rating) {
                return (
                  <Rating
                    key={index}
                    class="fa-solid fa-star"
                    style={{ color: "rgb(247,190,3)" }}
                  ></Rating>
                );
              } else {
                return (
                  <Rating
                    key={index}
                    class="fa-solid fa-star"
                    style={{ color: "rgb(214,214,214)" }}
                  ></Rating>
                );
              }
            })}
          </div>
        </div>
        <p>
          <i class="fa-solid fa-location-dot"></i>
          <span>
            {props.address},{props.address_line_2}
          </span>
        </p>
        <p>
          {props.outcode} {props.postcode}
        </p>
      </div>

      {/* type of food */}
      <div className="restaurant_food">
        <p>
          <i class="fa-solid fa-utensils"></i> {props.type_of_food}
        </p>
        <p>Visit Menu</p>
      </div>
    </div>
  );
};

export default Restaurantcard;
