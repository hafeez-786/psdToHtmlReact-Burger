import React from 'react';

const Menu = () => {
  return (
    <div className="row">
      <nav className="navbar pt-0 pb-0">
        <div className="navigation-block float-end">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-end">
              <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MENU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OUR STORY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu
