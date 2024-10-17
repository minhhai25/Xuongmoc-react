// import React, { Component } from 'react'

// export default class Cart extends Component {
//   render() {
//     return (
//       <>
//         <div className="cart-shopping d-flex align-items-center">
//           <i className="fa-solid fa-cart-shopping" />
//         </div>
//       </>
//     );
//   }
// }
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector để lấy dữ liệu từ Redux

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Lấy danh sách sản phẩm trong giỏ hàng
console.log("cart", cartItems);
  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={`http://apixm.devmaster.vn${item.image}`} alt={item.title} />
            <h5>{item.title}</h5>
            <p>Số lượng: {item.quantity}</p>
            <p>Giá: {item.priceNew} VND</p>
          </div>
        ))
      )}
    </div>
  );
}
