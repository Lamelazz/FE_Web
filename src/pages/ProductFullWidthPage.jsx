import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductFullWidthPage = () => {
  return (
    <>
      <Header />
      <div className="main-container product-detail no-sidebar">
        <div className="container">
          <div className="product-single full-width">
            <div className="row">
              <div className="col-sm-6">
                <div className="product-images">
                  <img src="images/products/2.jpg" alt="Áo Khoác Thể Thao" className="img-responsive" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="product-summary">
                  <h2 className="product-title">Áo Khoác Thể Thao Dáng Rộng</h2>
                  <div className="product-price">
                    <span className="price">£295.00</span>
                  </div>
                  <p className="description">
                    Áo khoác thể thao kiểu dáng rộng rãi, phong cách cá tính, phù hợp thời tiết se lạnh.
                  </p>
                  <div className="add-to-cart">
                    <input type="number" defaultValue={1} min={1} className="qty" />
                    <button className="button">Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-description margin-top-30">
              <h4>Chi tiết sản phẩm</h4>
              <p>
                Chất liệu cotton pha polyester mang lại cảm giác mềm mại và thoải mái. Thiết kế thời trang với mũ trùm
                và dây rút, túi hai bên tiện lợi.
              </p>
              <p>
                Hướng tới phong cách năng động, phù hợp nhiều hoàn cảnh: đi chơi, dạo phố hay thể thao nhẹ nhàng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductFullWidthPage;
