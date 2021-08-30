import React from 'react'

const BookYourTable = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 bottle-block">
          <img src="/images/bottle.png" className="img-fluid" alt="Bottle" />
        </div>
        <div className="col-md-6 form-block">
          <div className="row">
            <div className="col-md-12 book-table text-center">
              <h5 className="mb-0">RESERVATION</h5>
              <h2>BOOK YOUR TABLE</h2>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="NAME" aria-label="name" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="EMAIL" aria-label="email" />
            </div>
          </div>
          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="DATE" aria-label="date" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="TIME" aria-label="time" />
            </div>
          </div>
          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="PEOPLE" aria-label="people" />
            </div>
            <div className="col-md-6">
              <button className="btn">FIND A TABLE</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 burger-plate">
          <img src="/images/burgerPlate.png" className="img-fluid" alt="Burger plate" />
        </div>
      </div>
    </div>
  )
}

export default BookYourTable
