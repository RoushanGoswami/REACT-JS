import React from 'react'

export default function Contact() {
  return<>
 <section className="container my-3">
  <h1 className='text-center fs-1 text-black fw-bold'>Contact</h1>

      <div className="container col-6">

          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label ">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name here..."
            />
          </div>
          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-primary">
              Submit
            </button>
          </div>

      </div>
    </section>
  </>
}
