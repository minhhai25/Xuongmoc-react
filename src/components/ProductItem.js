import React from "react";
import "../css/sanpham.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch(); //sử dung dispatch để gửi action
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="col-md-3 p-3 product" key={product.id}>
      <div className="box-product-top">
        <img
          className="w-100"
          src={`http://apixm.devmaster.vn${product.image}`}
          alt={product.title}
        />
        <div className="addcart">
          <i className="fa-solid fa-cart-shopping" onClick={handleAddToCart} />
          <i className="fa-solid fa-heart" />
        </div>
      </div>
      <h5>{product.title}</h5>
      <span>
        <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
        <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
        <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
        <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
        <i className="fa-solid fa-star" style={{ color: "#ffd43b" }} />
      </span>
      <p>
        ({product.size}, {product.metaKeyword})
      </p>
      <span className="price">{product.priceNew} VND</span>
    </div>
  );
};
export default ProductItem;
