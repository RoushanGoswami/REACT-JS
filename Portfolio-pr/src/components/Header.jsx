import React from 'react'

export default function Header() {
  return <>
   <section className='container' >
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fs-3 fw-bold text-secondary" href="#">
   RoushanGoswami <b className='text-black fs-3 fw-bolder'>.</b>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
           My Projects
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
           Skills
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#ContactMe">
          Contact Me
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </section>
  
  </>
  

}
