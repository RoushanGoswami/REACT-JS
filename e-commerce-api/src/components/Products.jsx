import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState([]);
  const handleFetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
  };
  useEffect(() => {
    handleFetchProducts();
  }, []);
  return (
    <>
   <div className="conatiner row justify-content-evenly">
       {products.map((product, i) => {
        return (
   
              <div key={i} className="card" style={{ width: "18rem" }}>
            <img src={product.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>

            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{product.category}</li>
              <li className="list-group-item">$ {product.price}</li>
              <li className="list-group-item">{product.rating}⭐</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>

        );
      })}
   </div>
    </>
  );
}
