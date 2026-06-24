import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const handleFetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setProducts(
      products.filter(
        (product, i) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };
  useEffect(() => {
    handleFetchProducts();
  }, []);
  return (
    <>
      <nav className="navbar bg-body-tertiary p-3 m-2 rounded shadow mb-3 bg-transparent sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand">RGMart.com</a>
          <div className="d-flex">
            <input
              onChange={getSearch}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="d-flex w-100 gap-2">
              <button
                onClick={handleSearch}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
              <button
                onClick={handleFetchProducts}
                className="btn btn-outline-success"
                type="submit"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="conatiner row justify-content-evenly">
        {products.map((product, i) => {
          return (
            <div
              key={i}
              className="card shadow rounded m-2"
              style={{ width: "18rem" }}
            >
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
                <button
                  onClick={() => {
                    alert("Product is Added to your Cart");
                  }}
                  type="button"
                  className="btn btn-warning w-100"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
