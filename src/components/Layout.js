import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import TrangChu from "./TrangChu";
import GioiThieu from "./GioiThieu";
import SanPham from "./SanPham";
import TinTuc from "./TinTuc";
import DoiTac from "./DoiTac";
import LienHe from "./LienHe";
import TrangChu from "./TrangChu";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/gioithieu" element={<GioiThieu />} />

            <Route path="/sanpham" element={<SanPham />} />
            <Route path="/products/:cid" element={<ProductList />} />

            <Route path="/tintuc" element={<TinTuc />} />
            <Route path="/doitac" element={<DoiTac />} />
            <Route path="/lienhe" element={<LienHe />} />
          </Routes>
          <Footer/>
        </>
      </Router>
    );
  }
}
