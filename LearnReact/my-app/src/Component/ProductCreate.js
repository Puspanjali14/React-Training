import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const ProductCreate = () => {
  let[name, setName]=useState("");
  let[price, setPrice]=useState("");
  let[quantity, setQuantity]=useState("");
  let[isInShop, setIsInShop]=useState(true);
  let[country, setCountry]=useState("nepal");
  let navigate =useNavigate();


  return (
    <div>
      <form
      onSubmit={(e)=>{
        e.preventDefault(); //it is done to stop the default behaviour
        let data={
          name: name,
          price:price,
          quantity:quantity,
          isInShop: isInShop,
          country: country,
        }
        try {
          let result = axios({
            url:`http://localhost:4000/products`,
            method:"post",
            data:data
          });
          navigate("/product");
        } catch (error) {

          console.log(error.message);
          
        }
        // console.log(data);
        // console.log("form is submitted")
      }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}></input>
        </div>

        <div>
          <label htmlFor="price"> Price:</label>
          <input id="price" type="number" value={price}
          onChange={(e)=>{
            setPrice(e.target.value);
          }}></input>
        </div>

        <div>
          <label htmlFor="quantity"> Quantity:</label>
          <input id="quantity" type="number" value={quantity}
          onChange={(e)=>{
            setQuantity(e.target.value)
          }}></input>
        </div>

        <div>
          <label htmlFor="IsInShop">IsInShop:</label>
          <input id="IsInShop" type="checkbox" checked={isInShop}
          onChange={(e)=>{
            setIsInShop(e.target.checked)
          }}></input>
        </div>

          <div>
            <label>Country:</label>
            <select value={country}
            onChange={(e)=>{
              setCountry(e.target.value);
            }}
            >
              <option value="nepal">Nepal</option>
              <option value="india">India</option>
              <option value="pakistan">Pakistan</option>
              <option value="china">China</option>
            </select>
            
          </div>

        <button type="submit">Send</button>
       
      </form>
    </div>
  );
};

export default ProductCreate;
