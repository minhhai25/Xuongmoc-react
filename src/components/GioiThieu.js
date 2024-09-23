import React, { Component } from "react";

export default class GioiThieu extends Component {
  render() {
    return (
      <>
      <link rel="stylesheet" href="./css/gioithieu.css"></link>
        <section className="banner">
          <div className="banner_content">
            <img
              src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/logo.png"
              alt=""
            />
            <h1>Giới thiệu</h1>
          </div>
        </section>
        <section id="body">
          <div className="container">
            <div className="thong-tin-gt">
              <div className="title fade-in-box">
                <h3>Thành lập và phát triển</h3>
              </div>
              <div className="content justify-content-around fade-in-box">
                <img
                  src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tintuc-5.png"
                  alt=""
                />
                <div className="content__info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    repellat, praesentium aut temporibus dolorum molestias,
                    distinctio, obcaecati error laboriosam repudiandae itaque
                    amet! Fugiat voluptatem corporis dolorum incidunt quis!
                    Incidunt, ab
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur pariatur nesciunt quae id optio quas, consectetur
                    nobis repellat magni cupiditate, ab, enim obcaecati! In
                    libero qui voluptatum natus explicabo architecto?
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque laboriosam aut nisi nulla doloribus cupiditate
                    eligendi consectetur consequuntur, veniam officia est iure
                    ullam, dolorum ipsum numquam temporibus perferendis, iste
                    quas?
                  </p>
                </div>
              </div>
              <div className="title fade-in-box">
                <h3>Tầm nhìn</h3>
              </div>
              <div className="tamnhin mx-5 fade-in-box">
                <img src="../AnhCat/banner.jpg" alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  esse eveniet alias. Quis fugiat totam quo laboriosam,
                  explicabo, beatae soluta est in doloremque quaerat, ipsum
                  porro rem nisi cumque necessitatibus!Lorem Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Iste esse eveniet
                  alias. Quis fugiat totam quo laboriosam, explicabo, beatae
                  soluta est in doloremque quaerat, ipsum porro rem nisi cumque
                  necessitatibus!LoremLorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Iste esse eveniet alias. Quis fugiat totam
                  quo laboriosam, explicabo, beatae soluta est in doloremque
                  quaerat, ipsum porro rem nisi cumque necessitatibus!Lorem
                </p>
              </div>
              <div className="title fade-in-box">
                <h3>Sứ mệnh</h3>
              </div>
              <div className="row sumenh fade-in-box">
                <div className="box-content-info col-6 d-flex align-items-center">
                  <img src="../AnhCat/p-bep.jpg" alt="" className="aos-init" />
                  <div className="content-mission">
                    <h3 className="aos-init">Với xã hội</h3>
                    <p className="aos-init">
                      Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực
                      cùng cộng đồng xây dựng môi trường sống bền vững
                    </p>
                  </div>
                </div>
                <div className="box-content-info col-6 d-flex align-items-center">
                  <img src="../AnhCat/p-bep.jpg" alt="" className="aos-init" />
                  <div className="content-mission">
                    <h3 className="aos-init">Với nhân viên</h3>
                    <p className="aos-init">
                      Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực
                      cùng cộng đồng xây dựng môi trường sống bền vững
                    </p>
                  </div>
                </div>
                <div className="box-content-info col-6 d-flex align-items-center">
                  <img src="../AnhCat/p-bep.jpg" alt="" className="aos-init" />
                  <div className="content-mission">
                    <h3 className="aos-init">Với xã hội</h3>
                    <p className="aos-init">
                      Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực
                      cùng cộng đồng xây dựng môi trường sống bền vững
                    </p>
                  </div>
                </div>
                <div className="box-content-info col-6 d-flex align-items-center">
                  <img src="../AnhCat/p-bep.jpg" alt="" className="aos-init" />
                  <div className="content-mission">
                    <h3 className="aos-init">Với nhân viên</h3>
                    <p className="aos-init">
                      Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực
                      cùng cộng đồng xây dựng môi trường sống bền vững
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
