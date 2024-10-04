import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
// import TrangChu from "./TrangChu";
import GioiThieu from "./GioiThieu";
import SanPham from "./SanPham";
import TinTuc from "./TinTuc";
import DoiTac from "./DoiTac";
import LienHe from "./LienHe";
import TrangChu from "./TrangChu";
import ProductList from "./ProductList";
export default class Layout extends Component {
  render() {
    return (
      <Router>
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
                <div className="cart-shopping d-flex align-items-center">
                  <i className="fa-solid fa-cart-shopping" />
                </div>

                <div className="nav-btn">
                  <i className="fa-solid fa-bars" />
                </div>
                <label htmlFor="nav-mobile-input" className="nav__overlay" />
                {/* nav-mobile */}
                <nav className="nav-mobile" id="header-nav">
                  <label
                    htmlFor="nav-mobile-input"
                    className="nav__mobile-close"
                  >
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
          {/* <SanPham /> */}
          {/* <TrangChu /> */}
          {/* Định nghĩa các Routes */}
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/gioithieu" element={<GioiThieu />} />
            
              <Route path="/sanpham" element={<SanPham />} />
              <Route path="/products/:cid" element={<ProductList/>} />
        

            <Route path="/tintuc" element={<TinTuc />} />
            <Route path="/doitac" element={<DoiTac />} />
            <Route path="/lienhe" element={<LienHe />} />
          </Routes>
          <footer>
            <div className="row">
              <div className="col-md-6">
                <div className="title">
                  <h4>Thông tin chung</h4>
                </div>
                <h3>công ty tnhh minh hai</h3>
                <div>
                  <i className="fa-solid fa-phone" />
                  <span>03795580970</span>
                </div>
                <div>
                  <i className="fa-solid fa-envelope" />
                  <span>ntmhai@gmail.com</span>
                </div>
                <div>
                  <i className="fa-solid fa-location-dot" />
                  <span>Số 25 ,Vũ Ngọc Phan, Hà Nội</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="title">
                  <h4>về chúng tôi</h4>
                </div>
                <h6>Giới thiệu</h6>
                <h6>Sản phẩm</h6>
                <h6>Tin tức</h6>
                <h6>Cộng tác</h6>
                <h6>Liên hệ</h6>
              </div>
              <div className="col-md-3">
                <div className="title">
                  <h4>Kết nối với chúng tôi</h4>
                </div>
                <div className="">
                  <i className="fa-brands fa-facebook" />
                  <i className="fa-regular fa-envelope" />
                  <i className="fa-brands fa-twitter" />
                </div>
                <div />
              </div>
            </div>
          </footer>
        </>
      </Router>
    );
  }
}
