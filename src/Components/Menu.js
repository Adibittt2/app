   import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Menu = ({data})=>{

return(

<>


<section className="main-card--cointainer my-4">

{data.map((ele)=>{
  const {id,name,price,description,image,category} = ele;

  
  return(

    <>
    
  <div className="card-container" key={id}>
                <div className="card bg-secondary justify-content-center rounded py-2 mx-2">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag bg-danger rounded border border-white text-center text-white subtle">Order Now</span>
                </div>
              </div>

</>
  
  )
})}

</section>

</>

    )

}

export default Menu;