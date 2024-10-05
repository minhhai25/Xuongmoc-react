import React, { Component } from "react";
import axiosApi from "../api/api";
import { Link } from "react-router-dom";
// import { error } from "jquery";
export default class SanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livingRoomProducts: [], //cid=7
      bedroomProducts: [], //cid=8
      kitchenProducts: [], //cid=10
      bathroomProducts: [], //cid=10
      kidroomProducts: [], //cid=11
      officeProducts: [],
      stairProducts: [],
      decorateProducts: [],
    };
  }
  componentDidMount() {
    //gọi api để lấy danh sách sản phẩm
    axiosApi
      .get("Products")
      .then((response) => {
        //lọc sản phẩm từ cid
        const livingRoomProducts = response.data.filter(
          (product) => product.cid === 7
        );
        const bedroomProducts = response.data.filter(
          (product) => product.cid === 8
        );
        const kitchenProducts = response.data.filter(
          (product) => product.cid === 10
        );
        const bathroomProducts = response.data.filter(
          (product) => product.cid === 11
        );
        const kidroomProducts = response.data.filter(
          (product) => product.cid === 12
        );
        const officeProducts = response.data.filter(
          (product) => product.cid === 13
        );
        const stairProducts = response.data.filter(
          (product) => product.cid === 14
        );
        const decorateProducts = response.data.filter(
          (product) => product.cid === 15
        );
        console.log(response.data);
        this.setState({
          livingRoomProducts: livingRoomProducts.slice(0, 4),
          bedroomProducts: bedroomProducts.slice(0, 4),
          kitchenProducts: kitchenProducts.slice(0, 4),
          bathroomProducts: bathroomProducts.slice(0, 4),
          kidroomProducts: kidroomProducts.slice(0, 4),
          officeProducts: officeProducts.slice(0, 4),
          stairProducts: stairProducts.slice(0, 4),
          decorateProducts: decorateProducts.slice(0, 4),
        });
      })
      .catch((error) => {
        console.error("có lỗi xảy ra khi lấy sản phẩm ", error);
      });
  }

  render() {
    const {
      livingRoomProducts,
      bedroomProducts,
      kitchenProducts,
      bathroomProducts,
      kidroomProducts,
      officeProducts,
      stairProducts,
      decorateProducts,
    } = this.state;
    return (
      <>
        {/* <link rel="stylesheet" href="./css/sanpham.css"></link> */}
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
          <div className="title ">
            <h3>Phòng khách</h3>
          </div>
          <div className="them ">
            <Link to="/products/7">Xem thêm</Link>
          </div>
          <div className="row ">
            {livingRoomProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>Phòng ngủ</h3>
          </div>
          <div className="them ">
            <Link to="/products/8">Xem thêm</Link>
          </div>
          <div className="row ">
            {bedroomProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>Phòng bếp</h3>
          </div>
          <div className="them ">
            <Link to="/products/10">Xem thêm</Link>
          </div>
          <div className="row ">
            {kitchenProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>Phòng tắm</h3>
          </div>
          <div className="them ">
            <Link to="/products/11">Xem thêm</Link>
          </div>
          <div className="row ">
            {bathroomProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>trẻ em</h3>
          </div>
          <div className="them ">
            <Link to="/products/12">Xem thêm</Link>
          </div>
          <div className="row ">
            {kidroomProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>văn phòng</h3>
          </div>
          <div className="them ">
            <Link to="/products/13">Xem thêm</Link>
          </div>
          <div className="row ">
            {officeProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>cầu thang</h3>
          </div>
          <div className="them ">
            <Link to="/products/14">Xem thêm</Link>
          </div>
          <div className="row ">
            {stairProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container sanpham p-5">
          <div className="title ">
            <h3>trang trí</h3>
          </div>
          <div className="them ">
            <Link to="/products/15">Xem thêm</Link>
          </div>
          <div className="row ">
            {decorateProducts.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <div className="box-product-top">
                  <img
                    className="w-100"
                    src={`http://apixm.devmaster.vn${product.image}`}
                    alt={product.title}
                  />
                  <div className="addcart">
                    <i className="fa-solid fa-cart-shopping" />
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
                <h5>{product.title}</h5>
                <span>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  />
                </span>
                <p>
                  ({product.size}, {product.metaKeyword})
                </p>
                <span className="price">{product.priceNew} VND</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
