import React, { Component } from "react";

export default class LienHe extends Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="./css/lienhe.css"></link>
        <section className="banner">
          <div className="banner_content">
            <img
              src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/logo.png"
              alt=""
            />
            <h1>Liên hệ</h1>
          </div>
        </section>
        <section id="body">
          <div className="container ">
            <div className="lienhe d-flex  content justify-content-around">
              <img
                src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/tintuc-5.png"
                alt=""
              />
              <form className="" action="">
                <h2>Liên hệ với chúng tôi</h2>
                <div className="input my-3">
                  {" "}
                  <input
                    className="p-2 w-100"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="input my-3">
                  {" "}
                  <input
                    className="p-2 w-100"
                    type="text"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div className="input my-3">
                  {" "}
                  <input
                    className="p-2 w-100"
                    type="text"
                    name="phone"
                    id=""
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="input my-3">
                  {" "}
                  <input
                    className="p-2 w-100"
                    type="text "
                    name="noidung"
                    placeholder="Nội dung"
                  />
                </div>
                <button className="py-2 px-5" type="submit">
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
