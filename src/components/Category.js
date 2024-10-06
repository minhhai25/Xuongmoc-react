import React, { useEffect, useState } from "react";
import axiosApi from "../api/api";
// import "../css/index.css"
export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const resp = await axiosApi.get("Categories");
    const cate = resp.data.slice(0, 8);
    setCategory(cate);
    console.log(cate);
  };
  const elementCate = category.map((category) => {

    return (
      <div className="col-md-3 text-center fade-in-box">
        <img src={`${category.icon}`} alt="" />
        <br />
        <span>{category.title}</span>
      </div>
    );
  });
  return (
    <>
      <section id="productcate">
        <div className="container">
          <div className="danhmuc">
            <div className="row">{elementCate}</div>
          </div>
        </div>
      </section>
    </>
  );
}
