import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <>
      <Header />

      <div className="main-container no-sidebar">
        <div className="container">
          <div className="main-content">
            <div className="page-title">
              <h3>GIỎ HÀNG</h3>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <table className="shop_table cart">
                  <thead>
                    <tr>
                      <th colSpan="2" className="product-name">Sản phẩm</th>
                      <th className="product-price">Giá</th>
                      <th className="product-quantity">Số lượng</th>
                      <th className="product-subtotal">Tổng</th>
                      <th className="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/1.png" alt="" /></td>
                      <td className="product-name"><a href="#">Quần thể thao oversize fit</a></td>
                      <td>£85.00</td>
                      <td><input className="qty" type="text" defaultValue="+1" /></td>
                      <td>£85.00</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/2.jpg" alt="" /></td>
                      <td className="product-name"><a href="#">Quần thể thao oversize fit</a></td>
                      <td>£85.00</td>
                      <td><input className="qty" type="text" defaultValue="+1" /></td>
                      <td>£85.00</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                    </tr>
                  </tbody>
                </table>

                <div className="box-coupon">
                  <div className="coupon">
                    <h3 className="coupon-box-title">Phiếu giảm giá</h3>
                    <div className="inner-box">
                      <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Mã giảm giá" />
                      <input type="submit" className="button" name="apply_coupon" value="Áp dụng mã giảm giá" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4">
                <div className="box-cart-total">
                  <h2 className="title">Tổng Giỏ Hàng</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td>Tổng phụ</td>
                        <td><span className="price">£170.00</span></td>
                      </tr>
                      <tr>
                        <td>Vận chuyển</td>
                        <td>
                          <label><input name="shipping" type="radio" />Miễn phí vận chuyển</label>
                          <label>
                            <input name="shipping" type="radio" />
                            Giao hàng nội địa <span className="price">£50</span>
                          </label>
                          <label>
                            <input name="shipping" type="radio" />
                            Phí cố định <span className="price">£100</span>
                          </label>
                          <label>
                            <input name="shipping" type="radio" />
                            Quốc tế <span className="price">£150</span>
                          </label>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <td>Tổng cộng</td>
                        <td><span className="price">£320.00</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="button medium">CẬP NHẬT GIỎ HÀNG</button>
                  <button className="button btn-primary medium checkout-button">TIẾN HÀNH THANH TOÁN</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-top-60">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="element-icon style2">
                  <div className="icon"><i className="flaticon flaticon-origami28"></i></div>
                  <div className="content">
                    <h4 className="title">MIỄN PHÍ SHIP TOÀN QUỐC</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="element-icon style2">
                  <div className="icon"><i className="flaticon flaticon-curvearrows9"></i></div>
                  <div className="content">
                    <h4 className="title">ĐẢM BẢO HOÀN TIỀN</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="element-icon style2">
                  <div className="icon"><i className="flaticon flaticon-headphones54"></i></div>
                  <div className="content">
                    <h4 className="title">HỖ TRỢ ONLINE 24/7</h4>
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

export default CartPage;
