import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CategoryLeftSidebarFeatured = () => {
  const products = [
    {
      id: 1,
      name: "Áo Sơ Mi Nam Cổ Trụ",
      price: "£65.00",
      oldPrice: "£80.00",
      frontImage: "images/products/9.jpg",
      backImage: "images/products/10.jpg"
    },
    {
      id: 2,
      name: "Áo Nỉ Có Mũ",
      price: "£70.00",
      oldPrice: "£90.00",
      frontImage: "images/products/10.jpg",
      backImage: "images/products/11.jpg"
    },
    {
      id: 3,
      name: "Áo Polo Basic",
      price: "£50.00",
      oldPrice: "£60.00",
      frontImage: "images/products/11.jpg",
      backImage: "images/products/12.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="banner">
        <div className="banner-content">
          <img src="images/b/3.jpg" alt="Banner" />
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
                    <span>Danh mục nổi bật</span>
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

export default CategoryLeftSidebarFeatured;
