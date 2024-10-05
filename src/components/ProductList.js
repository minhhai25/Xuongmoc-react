import React, { useState, useEffect } from "react";
import axiosApi from "../api/api";
import { useParams } from "react-router-dom";
import "../css/sanpham.css";
const ProductList = () => {
  const { cid } = useParams(); // Lấy cid từ URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    axiosApi
      .get("Products")
      .then((response) => {
        // Lọc sản phẩm theo cid
        const filteredProducts = response.data.filter(
          (product) => product.cid === parseInt(cid)
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.log("xảy ra lỗi khi hiển thị sản phẩm", error);
      });
  }, [cid]); // Mỗi khi cid thay đổi, useEffect sẽ được gọi lại
  const getRoomName = (cid) => {
    switch (parseInt(cid)) {
      case 7:
        return "Phòng khách";
      case 8:
        return "Phòng ngủ ";
      case 10:
        return "Phòng bếp";
      case 11:
        return "Phòng tắm";
      case 12:
        return "Trẻ em";
      case 13:
        return "văn phòng";
      case 14:
        return "cầu thang";
      case 15:
        return "trang trí";
    }
  };
  return (
    <>
      {/* <link rel="stylesheet" href="/css/sanpham.css" /> */}
      <div className="container sanpham p-5">
        <div className="title ">
          <h3>{getRoomName(cid)}</h3>
        </div>
        <div className="row ">
          {products.length > 0 ? (
            products.map((product) => (
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
            ))
          ) : (
            <p>Không có sản phẩm nào.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
