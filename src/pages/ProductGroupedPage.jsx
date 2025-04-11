import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductGroupedPage = () => {
  const groupedItems = [
    {
      id: 1,
      name: "Áo Thun Màu Trắng",
      price: "£35.00",
      image: "images/products/3.jpg"
    },
    {
      id: 2,
      name: "Áo Thun Màu Xám",
      price: "£35.00",
      image: "images/products/4.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="main-container product-detail">
        <div className="container">
          <div className="product-single">
            <div className="row">
              <div className="col-sm-6">
                <div className="product-images">
                  <img src="images/products/group.jpg" alt="Nhóm sản phẩm" className="img-responsive" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="product-summary">
                  <h2 className="product-title">Combo Áo Thun</h2>
                  <div className="product-price">
                    <span className="price">£70.00</span>
                  </div>
                  <p className="description">
                    Bộ combo gồm 2 áo thun cơ bản màu trắng và xám, tiện lợi cho việc phối đồ hằng ngày.
                  </p>
                  <div className="grouped-products">
                    <table className="grouped-table">
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>Giá</th>
                          <th>Số lượng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupedItems.map((item) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                              <input
                                type="number"
                                defaultValue={0}
                                min={0}
                                className="qty-input"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button className="button margin-top-20">Thêm vào giỏ hàng</button>
                  </div>
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

export default ProductGroupedPage;
