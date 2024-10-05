import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import Cart from "./Cart";
export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="d-flex justify-content-between">
              <label htmlFor="nav-mobile-input" id="nav-bar-btn">
                <i className="fa-solid fa-bars" />
              </label>
              <input
                type="checkbox"
                name=""
                className="nav-input"
                id="nav-mobile-input"
              />
              <div className="logo">
                <img src="../AnhCat/logo.png" alt="" />
              </div>
              <nav className="nav-pc" id="header-nav">
                <ul className="d-flex justify-content-between h-100 align-items-center">
                  <li>
                    <Link to="/"> Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/gioithieu">giới thiệu</Link>
                  </li>
                  <li>
                    <Link to="/sanpham">sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="/tintuc">tin tức </Link>
                  </li>
                  <li>
                    <Link to="/doitac">đối tác </Link>
                  </li>
                  <li>
                    <Link to="/lienhe">liên hệ</Link>
                  </li>
                </ul>
              </nav>
              <Cart />

              <div className="nav-btn">
                <i className="fa-solid fa-bars" />
              </div>
              <label htmlFor="nav-mobile-input" className="nav__overlay" />
              {/* nav-mobile */}
              <nav className="nav-mobile" id="header-nav">
                <label htmlFor="nav-mobile-input" className="nav__mobile-close">
                  <i className="fa-solid fa-xmark" />
                </label>
                <ul className="nav-mobile-list">
                  <li>
                    <Link className="nav-mobile-link" to="/">
                      {" "}
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-mobile-link" to="/gioithieu">
                      giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-mobile-link" to="/sanpham">
                      sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-mobile-link" to="/tintuc">
                      tin tức{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-mobile-link" to="/doitac">
                      đối tác{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-mobile-link" to="/lienhe">
                      liên hệ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  }
}
