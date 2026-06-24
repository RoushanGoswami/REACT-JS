import React from 'react'

export default function Hero() {
  return <>
  <section className='container'>
    <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.magnific.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?semt=ais_hybrid&w=740&q=80" className="d-block w-100" alt="IMG" />
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/previews/017/383/808/non_2x/coding-system-minimal-infographic-banner-vector.jpg" className="d-block w-100" alt="IMG" />
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/image-vector/banner-programming-coding-background-vector-260nw-1021030363.jpg" className="d-block w-100" alt="IMG" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  </section>
  </>
}
