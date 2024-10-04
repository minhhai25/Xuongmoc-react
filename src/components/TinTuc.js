import React, { useEffect, useState } from "react";
import axiosNewsApi from "../api/news-api";
function TinTuc() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getAllNews();
    console.log(news);
  }, []);
  const getAllNews = async () => {
    const resp = await axiosNewsApi.get("News");
    setNews(resp.data);
    console.log(resp.data);
    
  };
  const elementNews = news.map((item, index) => {
          // console.log(`http://apixm.devmaster.vn${item.image}`);

    return (
      <>
        <div className="col-md-4 p-3">
          <img src={`http://apixm.devmaster.vn${item.image}`} alt="  " />
          <h5>{item.title}</h5>
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </>
    );
  });
  return (
    <>
      <link rel="stylesheet" href="./css/tintuc.css"></link>
      <div className="container tintuc">
        <div className="title">
          <h3>tin tức</h3>
        </div>
        <div className="row">{elementNews}</div>
        <div className="page">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TinTuc;
