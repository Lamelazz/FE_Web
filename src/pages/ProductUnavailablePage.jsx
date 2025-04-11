import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductUnavailablePage = () => {
  return (
    <>
      <Header />
      <div className="main-container product-detail">
        <div className="container">
          <div className="product-single">
            <div className="row">
              <div className="col-sm-6">
                <div className="product-images">
                  <img src="images/products/1.jpg" alt="Áo Hoodie" className="img-responsive" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="product-summary">
                  <h2 className="product-title">Áo Hoodie Ngôi Sao</h2>
                  <div className="product-price">
                    <span className="price">£375.00</span>
                  </div>
                  <p className="description">
                    Áo hoodie thiết kế hiện đại, chất liệu thoáng mát, phù hợp cho các hoạt động ngoài trời hoặc
                    mặc thường ngày.
                  </p>
                  <div className="stock-status out-of-stock">
                    <span>Hết hàng</span>
                  </div>
                  <button className="button disabled" disabled>
                    Không thể mua
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductUnavailablePage;
