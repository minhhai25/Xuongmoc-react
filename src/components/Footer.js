import React from 'react'

export default function Footer() {
  return (
    <>
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
  );
}
