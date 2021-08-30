import React from 'react';
import BurgerText from '../img/burger-text.jpg';
import BurgerBanner from '../img/burgerBanner.jpg';

const Content = () => {
  return (
    <div className="row pt-3 pb-3">
      <div className="col-md-6 content-block">
        <p>IT IS A GOOD TIME FOR THE GREAT TEST FOR THE BURGERS</p>
        <img src={BurgerText} alt="burger text" />
      </div>
      <div className="col-md-6 img-block">
       <img src={BurgerBanner} alt="burger banner"/>
      </div>
    </div>
  )
}

export default Content
