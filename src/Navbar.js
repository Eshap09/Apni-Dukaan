import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';

import './Navbar.css';



function Navbar() {

    return (
        <nav className="nav">
            {/* logo */}
            <div className="nav__left">
            <Link to="/">
                <img className="nav__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rOqWkRzc8nnZwzxGZVza0tFMFk825n2uTg&usqp=CAU" alt=""/>
            </Link>
            {/* Search Bar */}
            <div className="nav__search">
            <input type="text" className="nav__searchinput" />
            <SearchIcon className="nav__searchicon"/>
            </div>
            </div>
            {/* links */}
            <div className="nav__navlinks">
                 {/*1st links*/}
                 <Link to="/login" className="nav__link">
                  <div className="nav__option">
                      <span className="nav__optionline1">Hello </span>
                      <span className="nav__optionline2">Sign in</span>
                  </div>
                 </Link>
                 {/*2nd links*/}
                 <Link to="/" className="nav__link">
                  <div className="nav__option">
                      <span className="nav__optionline1">Returns</span>
                      <span className="nav__optionline2">& Orders</span>
                  </div>
                 </Link>
                  {/*3rd links*/}
                  <Link to="/checkout" className="nav__link">
                      <div className="nav__optionbasket">
                        {/*shopping basket icon*/}
                        <ShoppingCartIcon/>
                        {/*number of items in the basket*/}
                        <span className="nav__basket" >0</span>
                        </div>
                  </Link>
                  <Avatar alt="Eshap" src="x.jpg" className="nav__avatar" />
            </div>
        </nav>
    )
}

export default Navbar
