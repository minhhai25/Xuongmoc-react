import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <>
       <link rel="stylesheet" href="./css/sanpham.css"></link>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../AnhCat/trai-nghiem1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="mua">Mua ngay</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../AnhCat/trai-nghiem1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h4>Trải nghiệm không gian hiện đại</h4>
                <button className="mua">Mua ngay</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../AnhCat/trai-nghiem1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="mua">Mua ngay</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>Phòng khách</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>Phòng ngủ</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>Phòng bếp</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>Phòng tắm</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>trẻ em</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>văn phòng</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>cầu thang</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title fade-in-box">
            <h3>trang trí</h3>
          </div>
          <div className="them fade-in-box">
            <a href="">xem thêm</a>
          </div>
          <div className="row fade-in-box">
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
            <div className="col-md-3 p-3">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/P002-big.jpg"
                alt=""
              />
              <h5>Bàn uống nước</h5>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
                <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              </span>
              <p>(size vừa,nâu đậm)</p>
              <span className="price">8.999.000 VND</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
