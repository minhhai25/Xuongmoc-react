import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export default class TrangChu extends Component {
  
  render() {
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
    var settingslogo = {
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
      ],
    };

    return (
      <>
        <link rel="stylesheet" href="./css/index.css" />
        <section className="body">
          <div className="banner">
            <div className="container py-5">
              <h1>Thế giới nội thất số 1 Việt Nam</h1>
              <h2>Hoàng hoan</h2>
              <p>
                Sứ mệnh của chúng tôi là kết hợp hài hòa gữa ý tưởng và mong
                muốn của khách hàng đem lại nhưng giây hút thư giãn tuyệt vời
                bên gia đình và những người thân yêu .
              </p>
              <button className="p-2">
                <a href="./Lienhe.html">Liên hệ ngay</a>
              </button>
            </div>
          </div>
        </section>
        <section id="productcate">
          <div className="container">
            <div className="danhmuc">
              <div className="row">
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-phong-khach.png"
                    alt=""
                  />
                  <br />
                  <span>Phòng khách</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-phong-ngu.png"
                    alt=""
                  />
                  <br />
                  <span>Phòng ngủ</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-phong-bep.png"
                    alt=""
                  />
                  <br />
                  <span>Phòng bếp</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-phong-tam.png"
                    alt=""
                  />
                  <br />
                  <span>Phòng tắm</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-tre-em.png"
                    alt=""
                  />
                  <br />
                  <span>Trẻ em</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-van-phong.png"
                    alt=""
                  />
                  <br />
                  <span>Văn phòng</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-cau-thang.png"
                    alt=""
                  />
                  <br />
                  <span>Cầu thang</span>
                </div>
                <div className="col-md-3 text-center fade-in-box">
                  <img
                    src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/loai-sp/icon-do-trang-tri.png"
                    alt=""
                  />
                  <br />
                  <span>Đồ trang trí</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Spnoibat">
          <div className="container">
            <div className="spnoibat py-5">
              <div className="title fade-in-box">
                <h3 className="text-center">Sản phẩm nổi bật</h3>
              </div>
              <div className="slide">
                <div className="slide-san-pham fade-in-box">
                  <Slider {...settingspr}>
                    <div className="product text-center p-2">
                      <img src="../AnhCat/sp-1.jpg" alt="" />
                      <div className="info">
                        <h3>giường châu âu</h3>
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
                        <p className="dacdiem">(Size lớn, trắng sữa)</p>
                        <p className="price">
                          8.69.000 <span>VNĐ</span>
                        </p>
                      </div>
                    </div>
                    <div className="product text-center p-2">
                      <img src="../AnhCat/sp-1.jpg" alt="" />
                      <div className="info">
                        <h3>giường châu âu</h3>
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
                        <p className="dacdiem">(Size lớn, trắng sữa)</p>
                        <p className="price">
                          8.69.000 <span>VNĐ</span>
                        </p>
                      </div>
                    </div>
                    <div className="product text-center p-2">
                      <img src="../AnhCat/sp-1.jpg" alt="" />
                      <div className="info">
                        <h3>giường châu âu</h3>
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
                        <p className="dacdiem">(Size lớn, trắng sữa)</p>
                        <p className="price">
                          8.69.000 <span>VNĐ</span>
                        </p>
                      </div>
                    </div>
                    <div className="product text-center p-2">
                      <img src="../AnhCat/sp-1.jpg" alt="" />
                      <div className="info">
                        <h3>giường châu âu</h3>
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
                        <p className="dacdiem">(Size lớn, trắng sữa)</p>
                        <p className="price">
                          8.69.000 <span>VNĐ</span>
                        </p>
                      </div>
                    </div>
                    <div className="product text-center p-2">
                      <img src="../AnhCat/sp-1.jpg" alt="" />
                      <div className="info">
                        <h3>giường châu âu</h3>
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
                        <p className="dacdiem">(Size lớn, trắng sữa)</p>
                        <p className="price">
                          8.69.000 <span>VNĐ</span>
                        </p>
                      </div>
                    </div>
                    <div className="product text-center p-2">
                      <img src="../AnhCat/sp-1.jpg" alt="" />
                      <div className="info">
                        <h3>giường châu âu</h3>
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
                        <p className="dacdiem">(Size lớn, trắng sữa)</p>
                        <p className="price">
                          8.69.000 <span>VNĐ</span>
                        </p>
                      </div>
                    </div>
                  </Slider>
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
        <div className="container text-center">
          <div className="title fade-in-box">
            <h3>tin tức</h3>
          </div>
          <div className="row">
            <div className="ttnoibat col-md-7 col-sm-12">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tin-tuc/tintuc-1.jpg"
                alt=""
              />
              <div className="ttnoibat__content fade-in-box">
                <h5>
                  Cách chọn Sofa cho phòng khách nhà bạn thêm phần sang trọng
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus deleniti fuga tempora mollitia vero? Rerum sunt
                  explicabo voluptates in laudantium blanditiis deserunt quia?
                  Asperiores, reprehenderit? Unde quam odit quis quisquam?
                </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="tintuc fade-in-box">
                <img
                  src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tintuc-2.jpg"
                  alt=""
                />
                <div className="tintuc__content">
                  <h6>trang trí phòng khách cho thêm năng động</h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt ea enim officiis ipsa praesentium, iusto blanditiis
                    reiciendis corporis ullam, incidunt placeat molestiae a
                    ratione, temporibus odio! Qui blanditiis odit repellat.
                  </p>
                </div>
              </div>
              <div className="tintuc fade-in-box">
                <img
                  src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tintuc-3.jpg"
                  alt=""
                />
                <div className="tintuc__content">
                  <h6>trang trí phòng khách cho thêm năng động</h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt ea enim officiis ipsa praesentium, iusto blanditiis
                    reiciendis corporis ullam, incidunt placeat molestiae a
                    ratione, temporibus odio! Qui blanditiis odit repellat.
                  </p>
                </div>
              </div>
              <div className="tintuc fade-in-box">
                <img
                  src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tintuc-4.jpg"
                  alt=""
                />
                <div className="tintuc__content">
                  <h6>trang trí phòng khách cho thêm năng động</h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt ea enim officiis ipsa praesentium, iusto blanditiis
                    reiciendis corporis ullam, incidunt placeat molestiae a
                    ratione, temporibus odio! Qui blanditiis odit repellat.
                  </p>
                </div>
              </div>
              <div className="tintuc_them">
                <a href="/Html/Tintuc.html">Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="title fade-in-box">
            <h3>đối tác</h3>
          </div>
          <div className="dt_logo fade-in-box">
            <Slider {...settingslogo}>
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/doi-tac/the-coffee-house.png"
                alt="coffee"
              />
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/doi-tac/marvella.png"
                alt="marvella"
              />
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/doi-tac/melissa.png"
                alt="melissa"
              />
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/doi-tac/muong-thanh.png"
                alt="muong-thanh"
              />
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/doi-tac/sheraton.png"
                alt="sheraton"
              />
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/doi-tac/sunrise-sapa.png"
                alt="sunrise-sapa"
              />
            </Slider>
            {/* <img src="../AnhCat/dt-sunrise-sapa.jpg" alt=""> */}
          </div>
        </div>
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
}
