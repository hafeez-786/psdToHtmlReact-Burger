import React from 'react'
import Logo from "../img/logo.jpg";

const LogoRow = () => {
  return (
    <div className="row header-row">
      <div className="col-sm-6 left-logo-block">
        <img src={Logo} alt="logo" />
      </div>
      <div className="col-sm-6 mt-1 right-contact-block">
        <span className="material-icons">delivery_dining</span>
        <span>Express Delivery +1 234 567 890</span>
      </div>
    </div>
  )
}

export default LogoRow
