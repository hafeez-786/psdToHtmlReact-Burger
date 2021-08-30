import React from 'react';
//import sfj from '../Sections3/upcoming_events.png'

const Discover = () => {
  return (
    <div className="container">
      <div className="row upcoming-events">
        <div className="col-md-6 left-content">
          <p className="small-text">DISCOVER</p>
          <h2>UPCOMING EVENTS</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          </p>
        </div>
        <div className="col-md-6 right-img">
          <img src="images/upcoming_events.png" alt="upcoming" className="img-fluid"/>
        </div>
      </div>
    </div>
  )
}

export default Discover
