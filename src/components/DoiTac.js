import React, { Component } from "react";
import axiosApi from "../api/api";

export default class DoiTac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [], // Sửa thành mảng đối tác
    };
  }

  componentDidMount() {
    axiosApi
      .get("Partners")
      .then((response) => {
        const partners = response.data;
        this.setState({ partners }); // Cập nhật đúng state của đối tác
        console.log("Partners", partners);
      })
      .catch((error) => {
        console.log("Có lỗi khi tải đối tác");
      });
  }

  render() {
    const { partners } = this.state;

    return (
      <>
        <link rel="stylesheet" href="./css/doitac.css"></link>
        <section className="banner">
          <div className="banner_content">
            <img
              src="../AnhCat/AnhCatTC-20240709T030502Z-001/AnhCatTC/logo.png"
              alt="Logo"
            />
            <h1>Đối tác</h1>
          </div>
        </section>

        <section id="body">
          <div className="container">
            <div className="doi-tac">
              {partners.length > 0 ? (
                partners.map((partner) => (
                  <div className="align-items-center content" key={partner.id}>
                    <img
                      className="w-95"
                      src={partner.logo}
                      alt={partner.title}
                    />
                    <div className="content-info">
                      <h3>{partner.title}</h3>
                      <p>{partner.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Không có đối tác để hiển thị.</p>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
