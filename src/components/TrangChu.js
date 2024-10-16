import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosApi from "../api/api";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Category from "./Category";
import Partner from "./Partner";

export default function Trangchu() {
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    getProducts();
    getNew();
  }, []);
  const getProducts = async () => {
    const resp = await axiosApi.get("Products");
    const hotProduct = resp.data.filter((products) => products.hot === 1);
    setProducts(hotProduct);
    console.log("Products:", resp.data);
  };
  const getNew = async () => {
    const resp = await axiosApi.get("News");
    const hotNews = resp.data.slice(0, 3);
    setNews(hotNews);
  };

  const elementProduct = products.map((products) => {
    return (
      <>
        <div className="product text-center p-2" key={products.id}>
          <div className="box-product-top">
            <img
              className="w-100"
              src={`http://apixm.devmaster.vn${products.image}`}
              alt=""
            />
            <div className="addcart">
              <i className="fa-solid fa-cart-shopping" />
              <i className="fa-solid fa-heart" />
            </div>
          </div>

          <div className="info">
            <h5>{products.title}</h5>
            <span>
              <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
              <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
            </span>
            <p>
              ({products.size}, {products.metaKeyword})
            </p>
            <span className="price">{products.priceNew} VND</span>
          </div>
        </div>
      </>
    );
  });
  const elementNew = news.map((news) => {
    return (
      <div className="tintuc fade-in-box">
        <img src={`${news.image}`} alt="  " />
        <div className="tintuc__content">
          <h6>{news.title}</h6>
          <p dangerouslySetInnerHTML={{ __html: news.description }} />
        </div>
      </div>
    );
  });
  var settingspr = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <>
      <link rel="stylesheet" href="./css/index.css" />
      <section className="body">
        <div className="banner">
          <div className="container py-5">
            <h1>Thế giới nội thất số 1 Việt Nam</h1>
            <marquee direction="">hello</marquee>
            <h2>Hoàng hoan</h2>
            <p>
              Sứ mệnh của chúng tôi là kết hợp hài hòa gữa ý tưởng và mong muốn
              của khách hàng đem lại nhưng giây hút thư giãn tuyệt vời bên gia
              đình và những người thân yêu .
            </p>
            <button className="p-2">
              <Link to="/lienhe">Liên hệ ngay</Link>
            </button>
          </div>
        </div>
      </section>
      <Category />
      <section id="Spnoibat">
        <div className="container">
          <div className="spnoibat py-5">
            <div className="title fade-in-box">
              <h3 className="text-center">Sản phẩm nổi bật</h3>
            </div>
            <div className="slide">
              <div className="slide-san-pham ">
                <Slider {...settingspr}>{elementProduct}</Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aboutus">
        <div className="container_3 p-3 up-scoll">
          <div className="overlay" />
          <div className="title text-center fade-in-box">
            <h3 className="">Về chúng tôi</h3>
          </div>
          <div className="container aboutme">
            <div className="img-aboutme fade-in-box">
              <img src="../AnhCat/ve-chung-toi.jpg" alt="" />
            </div>
            <div className="aboutme_infor fade-in-box">
              <h4 className="p-3 pt-0">
                Nội thất <b>Hoàng hoan</b> uy tín song hành chất lượng
              </h4>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus nam numquam odio, totam aliquam ut? Alias placeat
                tempore molestias cupiditate explicabo numquam eveniet dolor.
                Dignissimos reprehenderit vero voluptatum voluptate iure
              </p>
              <div className="row px-3">
                <div className="col-md-3 col-sm-3 px-2">
                  <img src="../AnhCat/ve-chung-toi-1.jpg" alt="" />
                </div>
                <div className="col-md-3 col-sm-3 px-2">
                  <img src="../AnhCat/ve-chung-toi-2.jpg" alt="" />
                </div>
                <div className="col-md-3 col-sm-3 px-2">
                  <img src="../AnhCat/ve-chung-toi-3.jpg" alt="" />
                </div>
                <div className="col-md-3 col-sm-3 px-2">
                  <img src="../AnhCat/ve-chung-toi-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="title text-center fade-in-box">
            <h3 className="">Tại sao nên chọn hoàng hoan?</h3>
          </div>
          <div className="container li-do-chon fade-in-box">
            <div className="row">
              <div className="d-flex col-md-6 col-sm-12">
                <img src="../AnhCat/chon-1.jpg" alt="" />
                <div>
                  <h4>chính sách giá</h4>
                  <p>Tốt nhất và công khai giá trên website</p>
                </div>
              </div>
              <div className="d-flex col-md-6 col-sm-12">
                <img src="../AnhCat/chon-2.jpg" alt="" />
                <div>
                  <h4>chính sách giá</h4>
                  <p>Tốt nhất và công khai giá trên website</p>
                </div>
              </div>
              <div className="d-flex col-md-6 col-sm-12">
                <img src="../AnhCat/chon-3.jpg" alt="" />
                <div>
                  <h4>chính sách giá</h4>
                  <p>Tốt nhất và công khai giá trên website</p>
                </div>
              </div>
              <div className="d-flex col-md-6 col-sm-12">
                <img src="../AnhCat/chon-4.jpg" alt="" />
                <div>
                  <h4>chính sách giá</h4>
                  <p>Tốt nhất và công khai giá trên website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container text-center tin">
        <div className="title fade-in-box">
          <h3>tin tức</h3>
        </div>
        <div className="row">
          <div className="ttnoibat col-md-7 col-sm-12">
            <img
              src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tin-tuc/tintuc-1.jpg"
              alt=""
            />
            <div className="ttnoibat__content fade-in-box px-2">
              <h5 className="text-start">
                Cách chọn Sofa cho phòng khách thêm phần sang trọng
              </h5>
              <p
                className="
              text-start"
              >
                Không phải ai trong chúng ta cũng biết cách chọn màu sofa cho
                phòng khách trở nên sang trọng và đẹp mắt hơn. Tuy nhiên, đây là
                yếu tố quyết định phần lớn đến tính thẩm mỹ của toàn bộ ngôi
                nhà.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            {elementNew}
            <div className="tintuc_them">
              <Link to="/tintuc">
                Xem thêm <i className="fa-solid fa-arrow-right"></i>
              </Link>
              {/* <a href="/Html/Tintuc.html">Xem thêm</a> */}
            </div>
          </div>
        </div>
      </div>
      <Partner />
      <section id="lienhe" className="Block container_6">
        <img
          src="../AnhCat/lienhe-bg-removed.png"
          alt="ghe"
          className="aos-init aos-animate"
        />
        <div className="container-lg row">
          <div className="col-2" />
          <div className="col-5 title-contact aos-init aos-animate">
            <h4 className="aos-init aos-animate">Trải nghiệm dịch vụ</h4>
            <h3 className="aos-init aos-animate">
              <span>Cùng Hoàng Hoan </span>ngay
            </h3>
            <div className="diver" />
          </div>
          <div className="col-5 box-form aos-init aos-animate">
            <h4 className="aos-init aos-animate">Thông tin liên hệ</h4>
            <div className="form">
              <form action="" method="post" className="row" id="form">
                <div className="form-group col-9">
                  <input
                    type="text"
                    placeholder="Email/Phone *"
                    name="Email/Phone"
                    className="Email-phone aos-init aos-animate"
                    id="email"
                  />
                  <p
                    className="error aos-init aos-animate"
                    id="invalid_email"
                  />
                </div>
                <div className="submit col-3">
                  <input
                    type="submit"
                    defaultValue="Gửi"
                    id="submit"
                    className="aos-init aos-animate"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
