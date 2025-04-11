import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckoutPage = () => {
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
              <div className="col-sm-6">
                <div className="form-checkout">
                  <h5 className="form-title">ĐỊA CHỈ THANH TOÁN</h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Tên" /></p>
                    </div>
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Họ" /></p>
                    </div>
                  </div>
                  <p><input type="text" placeholder="Tên công ty" /></p>
                  <p><input type="text" placeholder="Địa chỉ" /></p>
                  <p><input type="text" placeholder="Thị trấn / Thành phố" /></p>
                  <p><input type="text" placeholder="Huyện / Quốc gia" /></p>
                  <div className="row">
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Mã bưu điện" /></p>
                    </div>
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Điện thoại" /></p>
                    </div>
                  </div>
                </div>

                <div className="form-checkout order">
                  <h5 className="form-title">ĐƠN CỦA BẠN</h5>
                  <table className="shop-table order">
                    <thead>
                      <tr>
                        <th className="product-name"></th>
                        <th className="total">TỔNG</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-name">Quần thể thao oversize fit</td>
                        <td className="total"><span className="price">£85.00</span></td>
                      </tr>
                      <tr>
                        <td className="product-name">Quần thể thao oversize fit</td>
                        <td className="total"><span className="price">£85.00</span></td>
                      </tr>
                      <tr>
                        <td className="subtotal">Tổng phụ</td>
                        <td className="total"><span className="price">£85.00</span></td>
                      </tr>
                      <tr>
                        <td className="subtotal">Tổng phụ</td>
                        <td className="total">Quốc tế</td>
                      </tr>
                      <tr>
                        <td className="subtotal">Phiếu giảm giá</td>
                        <td className="total">0%</td>
                      </tr>
                      <tr className="order-total">
                        <td className="subtotal">TỔNG ĐẶT HÀNG</td>
                        <td className="total"><span className="price">£170.00</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="button btn-primary medium">TIẾN HÀNH THANH TOÁN</button>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-checkout">
                  <h5 className="form-title">ĐỊA CHỈ SHIP</h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Tên" /></p>
                    </div>
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Họ" /></p>
                    </div>
                  </div>
                  <p><input type="text" placeholder="Tên công ty" /></p>
                  <p><input type="text" placeholder="Địa chỉ" /></p>
                  <p><input type="text" placeholder="Thị trấn / Thành phố" /></p>
                  <p><input type="text" placeholder="Huyện / Quốc gia" /></p>
                  <div className="row">
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Mã bưu điện" /></p>
                    </div>
                    <div className="col-sm-6">
                      <p><input type="text" placeholder="Điện thoại" /></p>
                    </div>
                  </div>
                </div>

                <div className="form-checkout checkout-payment">
                  <h5 className="form-title">THANH TOÁN CỦA BẠN</h5>
                  <div className="payment_methods">
                    <div className="payment_method">
                      <label><input name="payment_method" type="radio" />CHUYỂN KHOẢN NGÂN HÀNG TRỰC TIẾP</label>
                      <div className="payment_box">
                        Vui lòng chuyển khoản trực tiếp vào tài khoản ngân hàng của chúng tôi. Sử dụng mã đơn hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được vận chuyển cho đến khi tiền được ghi có vào tài khoản của chúng tôi.
                      </div>
                    </div>
                    <div className="payment_method">
                      <label><input name="payment_method" type="radio" />THANH TOÁN KHI GIAO HÀNG</label>
                      <div className="payment_box">
                        Thanh toán bằng tiền mặt khi bạn nhận được hàng.
                      </div>
                    </div>
                    <div className="payment_method">
                      <label><input name="payment_method" type="radio" />PAYPAL</label>
                      <div className="payment_box">
                        Thanh toán qua PayPal; bạn có thể thanh toán bằng thẻ tín dụng nếu bạn không có tài khoản PayPal.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-top-10">
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

export default CheckoutPage;
