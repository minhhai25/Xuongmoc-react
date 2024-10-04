import React, { useState, useEffect } from "react";
import axiosProductApi from "../api/products-api";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { cid } = useParams(); // Lấy cid từ URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    axiosProductApi
      .get("")
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

  return (
    <>
      <link rel="stylesheet" href="./css/sanpham.css"></link>
      <div className="container sanpham p-5">
        <div className="title fade-in-box">
          <h3>Danh sách sản phẩm cho danh mục {cid}</h3>
        </div>
        <div className="row fade-in-box">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-3 p-3 product" key={product.id}>
                <img
                  src={`http://apixm.devmaster.vn${product.image}`}
                  alt={product.title}
                />
                <div className="addcart">
                  <i className="fa-solid fa-cart-shopping" />
                  <i className="fa-solid fa-heart" />
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
