import React from 'react';

const Burger = () => {

  const data = [
    {
      id: 1,
      image: "images/burger_one.png",
      altName: "burger",
      heading: "LOREM IPSUM DOLOR",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
    },
    {
      id: 2,
      image: "images/burger_two.png",
      altName: "burger",
      heading: "LOREM IPSUM DOLOR",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
    },
    {
      id: 3,
      image: "images/burger_three.png",
      altName: "burger",
      heading: "LOREM IPSUM DOLOR",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
    },
  ]
  return (
    <div className="container">
      <div className="row pt-5 pb-5" style={{marginBottom: "3rem"}}>
        {
          data.map((item, index) => {
            return(
              <div className="col-md-4 burger-order text-center" key={index}>
                <img src={item.image}  alt={item.altName} className="img-fluid"/>  
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
                <button className="btn">ORDER NOW</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Burger
