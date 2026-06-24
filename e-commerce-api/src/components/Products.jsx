import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [store, setStore] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: 9, page: 1 });
  const handleFetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    setStore(res.data.products);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    setProducts(
      store.filter(
        (product, i) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };
  const handleCategoryFilter = (e) => {
    setProducts(store);
    if (e.target.value === "all") {
      setProducts(store);
    } else {
      setProducts(
        store.filter((product) => product.category == e.target.value),
      ); //if selected product category matched to the e.target.value then it will show the filtered products using store (state)
    }
  };

  const handlePriceRangeFilter = (e) => {
    console.log(e.target.value);
    setProducts(
      store.filter((product) => product.price >= Number(e.target.value)), // product price is compared and then if condition is true the it returns
    );
  };

  const handlePagination = (x) => {
    let page;
    if (x == "") {
      page = 1;
    } else {
      page = Number(x);
    }
    const start = (page - 1) * 10;
    const end = start + 9;
    setPagination({ ...pagination, start, end });
  };
  useEffect(() => {
    handleFetchProducts();
  }, []);
  return (
    <>
      <div className="navbar bg-body-tertiary p-3 m-2 rounded shadow mb-3 bg-transparent sticky-top">
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
              <select
                onChange={handleCategoryFilter}
                className="text-black bg-light border border-success"
                name=""
                id=""
              >
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
              </select>
              <input
                onChange={handlePriceRangeFilter}
                type="range"
                min={0}
                max={2499.99}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="conatiner row justify-content-evenly">
        {products.map((product, i) => {
          if (i >= pagination.start && i <= pagination.end) {
            return (
              <div
                key={i}
                className="card shadow rounded m-2"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="..."
                />
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
          }
          return;
        })}
        <div className="container d-flex justify-content-center p-2 m-2 flex-column">
          <h6>Go to page </h6>
          <div aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item" onChange={() => handlePagination(1)}>
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item" onChange={() => handlePagination(2)}>
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item" onChange={() => handlePagination(3)}>
                <a className="page-link" href="#">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
