import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import Menu from './Menu/Menu';
import Content from './content/Content';
import LogoRow from './Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <LogoRow />
        <Menu />
        <Content />
      </div>
    </header>
  )
}

export default Header
