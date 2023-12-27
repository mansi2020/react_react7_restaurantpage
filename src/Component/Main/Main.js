import React, { useState } from "react";
import Restaurantcard from "../Restaurantcard/Restaurantcard";
import RestaurantList from "./../RestaurantList.json";
import './Main.css';

const Main = () => {
  // usestate varibale for restaurant list
  let [changeData, setChnageData] = useState(RestaurantList);
  let [ratingVal,setRatingVal] = useState(0);
  let [searchText,setSearchText] = useState("");

  // --------chnages searchbox text ----------
  function onSearchTextChange(e){
    let updatedValText = e.target.value;
    setSearchText(updatedValText);
    filterData(updatedValText,ratingVal);
  }

  // --------chnages rating val----------
  function onRatingChange(e){
    let updatedVal = e.target.value;
    if(updatedVal == ""){
        setRatingVal("0");
        filterData(searchText,"0");
    }else{
        setRatingVal(updatedVal); 
        filterData(searchText,updatedVal);
    }   
  }

 //---------filter data-----------------
 function filterData(inputText,ratingText){
    let newData = [...RestaurantList];
    let updatedFilterList = newData.filter((item)=>{
        return parseInt(item.rating) >= parseInt(ratingText) && item.name.toLowerCase().includes(inputText.toLowerCase());
    })
    console.log(inputText,ratingText);
    setChnageData(updatedFilterList);
 }


  return (
    <section className="main_container">
      {/* searchbox */}
      <input
        type="text"
        placeholder="Search restaurants..."
        onChange={(e)=>onSearchTextChange(e)}
      />

      {/* minimum rating number */}
      <input type="number" step="1" min={1} max={5} onChange={(e)=>onRatingChange(e)} />

      {/* map function on restaurantlist */}
      <div id="main_restaurant_list">
        {changeData.map((restaurantDetails) => {
          {
            /* short form of  restaurantDetails prop*/
          }
          return (
            <Restaurantcard
              key={restaurantDetails.id.id}
              {...restaurantDetails}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Main;
