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
                      Nội thấy Hoàng Hoan được xây dựng dựa trên tình yêu, đam
                      mê của tôi đối với nghề mộc và Khao khát mang những sản
                      phẩm nội thất đẹp của mình đến với khách hàng thân yêu.
                    </p>
                    <p>
                      Cả một quá trình từ 1 người thợ phụ rồi được làm thợ mộc
                      chính, tự tạo ra cho mình 1 phân xưởng nhỏ rồi dần phát
                      triển và hiện tại Hoàng Hoan đã là một trong những công ty
                      có dịch vụ thiết kế và thi công nội thất uy tín chất lượng
                      với giá tốt nhất tại Hà Nội với sứ mệnh “đem đến cho khách
                      hàng không gian nội thất hòan hảo”.
                    </p>
                    <p>
                      Hoàng Hoan luôn nỗ lực để tạo ra không gian đẹp đẹp cho
                      khách hàng theo nhiều gam màu sắc khác nhau và phong cách
                      đa dạng theo đúng ở sở thích, lứa tuổi và phong thủy của
                      khách hàng.
                    </p>
                  </div>
                </div>
                <div className="title fade-in-box">
                  <h3>Tầm nhìn</h3>
                </div>
                <div className="tamnhin mx-5 fade-in-box">
                  <img src="../AnhCat/tamnhin.jpg" alt="" />
                  <p>
                    Chúng tôi luôn hướng đến việc tạo ra các sản phẩm nội thất
                    chất trên triết lý tôn trọng và giữ gìn những gì tự nhiên đã
                    ban tặng cho con người. Chúng tôi luôn tìm tòi và ứng dụng
                    các giải pháp sản phẩm và công nghệ tiên tiến nhất, hợp tác
                    với các đối tác công nghệ hàng đầu thế giới, tìm kiếm và
                    phát triển các vùng nguyên liệu tự nhiên được thiên nhiên
                    chọn lọc, ưu đãi trong nước lẫn nước ngoài, tất cả nhằm tạo
                    ra các sản phẩm nội thất tự nhiên gần gũi cho người khách
                    hàng Việt Nam.
                  </p>
                </div>
                <div className="title fade-in-box">
                  <h3>Sứ mệnh</h3>
                </div>
                <div className="row sumenh fade-in-box">
                  <div className="box-content-info col-6 d-flex align-items-center">
                    <img
                      src="../AnhCat/p-bep.jpg"
                      alt=""
                      className="aos-init"
                    />
                    <div className="content-mission">
                      <h3 className="aos-init">Với xã hội</h3>
                      <p className="aos-init">
                        Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                        cực cùng cộng đồng xây dựng môi trường sống bền vững
                      </p>
                    </div>
                  </div>
                  <div className="box-content-info col-6 d-flex align-items-center">
                    <img
                      src="../AnhCat/p-bep.jpg"
                      alt=""
                      className="aos-init"
                    />
                    <div className="content-mission">
                      <h3 className="aos-init">Với nhân viên</h3>
                      <p className="aos-init">
                        Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                        cực cùng cộng đồng xây dựng môi trường sống bền vững
                      </p>
                    </div>
                  </div>
                  <div className="box-content-info col-6 d-flex align-items-center">
                    <img
                      src="../AnhCat/p-bep.jpg"
                      alt=""
                      className="aos-init"
                    />
                    <div className="content-mission">
                      <h3 className="aos-init">Với xã hội</h3>
                      <p className="aos-init">
                        Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                        cực cùng cộng đồng xây dựng môi trường sống bền vững
                      </p>
                    </div>
                  </div>
                  <div className="box-content-info col-6 d-flex align-items-center">
                    <img
                      src="../AnhCat/p-bep.jpg"
                      alt=""
                      className="aos-init"
                    />
                    <div className="content-mission">
                      <h3 className="aos-init">Với nhân viên</h3>
                      <p className="aos-init">
                        Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                        cực cùng cộng đồng xây dựng môi trường sống bền vững
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
