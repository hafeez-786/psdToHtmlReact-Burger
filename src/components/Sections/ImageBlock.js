import React from 'react';
import LeftImage from './images/popular_burger.png';
import Morefun from './images/morefun_burger.png';
import Freshchilli from './images/freshandchilli_burger.png';

const ImageBlock = () => {
  return (
    <div className="container">
      <div className="row image-section">
        <div className="col-md-6 left-image">
          <img src={LeftImage} alt="leftImage" className="img-fluid" />
        </div>
        <div className="col-md-6 right-image">
          <img src={Morefun} alt="leftImage" className="img-fluid" />
          <img src={Freshchilli} alt="leftImage" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default ImageBlock
