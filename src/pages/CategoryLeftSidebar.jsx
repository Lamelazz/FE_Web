import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CategoryLeftSidebar = () => {
  const products = [
    {
      id: 1,
      name: "Áo Nỉ Ngôi Sao London",
      price: "£85.00",
      oldPrice: "£95.00",
      frontImage: "images/products/1.jpg",
      backImage: "images/products/2.jpg"
    },
    {
      id: 2,
      name: "Áo Nỉ Ngôi Sao London",
      price: "£85.00",
      oldPrice: "£95.00",
      frontImage: "images/products/2.jpg",
      backImage: "images/products/3.jpg"
    },
    {
      id: 3,
      name: "Áo Nỉ Ngôi Sao London",
      price: "£85.00",
      oldPrice: "£95.00",
      frontImage: "images/products/3.jpg",
      backImage: "images/products/4.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="banner">
        <div className="banner-content">
          <img src="images/b/1.jpg" alt="Banner" />
        </div>
      </div>

      <div className="main-container left-slidebar">
        <div className="container">
          <div className="row">
            <div className="main-content col-sm-8 col-md-9">
              <div className="shop-top">
                <div className="shop-top-left">
                  <div className="breadcrumbs">
                    <a href="#">Trang chủ</a>
                    <span>Danh mục Thanh bên trái</span>
                  </div>
                </div>
                <div className="shop-top-right">
                  <span className="woocommerce-result-count">
                    Hiển thị 1-10 trên 53 kết quả
                  </span>
                  <div className="orderby-wapper">
                    <select className="orderby">
                      <option value="">SẮP XẾP THEO MỚI NHẤT</option>
                      <option value="">Sắp xếp theo giá</option>
                    </select>
                  </div>
                  <div className="show-grid-list">
                    <span className="label-filter">XEM:</span>
                    <a className="show-grid active" href="#">
                      <i className="fa fa-th"></i>
                    </a>
                    <a className="show-list" href="#">
                      <i className="fa fa-list"></i>
                    </a>
                  </div>
                </div>
              </div>

              <ul className="product-list-grid desktop-columns-3 tablet-columns-2 mobile-columns-1 row">
                {products.map((product) => (
                  <li className="product-item col-sm-6 col-md-4" key={product.id}>
                    <div className="product-inner">
                      <div className="product-thumb has-back-image">
                        <a href="#">
                          <img src={product.frontImage} alt={product.name} />
                        </a>
                        <a className="back-image" href="#">
                          <img src={product.backImage} alt={product.name} />
                        </a>
                        <div className="gorup-button">
                          <a href="#" className="wishlist">
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="#" className="compare">
                            <i className="fa fa-exchange"></i>
                          </a>
                          <a href="#" className="quick-view">
                            <i className="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">
                          <a href="#">{product.name}</a>
                        </h3>
                        <span className="price">
                          <ins>{product.price}</ins>
                          <del>{product.oldPrice}</del>
                        </span>
                        <a href="#" className="button">
                          THÊM VÀO GIỎ HÀNG
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryLeftSidebar;
