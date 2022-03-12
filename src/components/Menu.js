import React from "react";
import OrderButton from "./orderBtn";
import {useState} from "react";


export const Menu = ({filteredData, setOrder}) => {
  const [count, setCount] = useState(0)

  return (
    <div className="section-center">
      {filteredData.map((el, index) => {
        //const {id, title, img, desc, price} = el;
        return (
          <>
            <article key={index} className="menu-item">
              <img src={el.img} alt={el.title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{el.title}</h4>
                  <h4 className="price">{el.price}</h4>
                </header>
                <p className="item-text">{el.desc}</p>
              </div>
              {<div><OrderButton filteredData={filteredData} setOrder={setOrder} /> </div>}
            </article>

          </>
        );
        ///// doing some changes 
      })}


    </div>
  );
};

export default Menu;
