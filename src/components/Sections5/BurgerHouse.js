import React from 'react';
import LogoBurger from '../Sections5/logo_burger.png';
import SocialIcons from '../Sections5/social-icons.png';

const BurgerHouse = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 burger-house">
          <div className="row">
            <div className="col-md-6">
              <div className="burger-logo">
                <img src={LogoBurger} />
                <h2>BURGER HOUSE</h2>
                <p>Dummy text is text that is used in the publishing industry or by web designers to
                  occupy the space which will later be filled with 'real' content. This is required when,
                  for example, the final text is not yet available.
                  Dummy text is also known as 'fill text'. for example, the final text is not yet available
                </p>
                <p className="copyright">&#169; COMPANY NAME 2021. ALL RIGHTS RESERVED</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="information">
                <p><span className="material-icons">location_on</span>MAIN ROAD, BUILDING NAME, COUNTRY</p>
                <p><span className="material-icons">email</span>INFO@COMPANY.COM</p>
              </div>
              <div className="social-icons">
                <img src={SocialIcons} alt="social"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerHouse
