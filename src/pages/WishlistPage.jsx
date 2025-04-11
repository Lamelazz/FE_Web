import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WishlistPage = () => {
  return (
    <>
      <Header />
      <div className="main-container no-sidebar">
        <div className="container">
          <div className="main-content">
            <div className="page-title">
              <h3>DANH SÁCH YÊU THÍCH</h3>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <table className="shop_table cart">
                  <tbody>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/1.png" alt="" /></td>
                      <td className="product-name"><a href="#">Quần Ống Rộng và Giày Sneaker</a></td>
                      <td>£85.00</td>
                      <td>Còn hàng</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                      <td className="text-right"><a className="button" href="#">THÊM VÀO GIỎ HÀNG</a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/2.jpg" alt="" /></td>
                      <td className="product-name"><a href="#">Quần Ống Rộng và Giày Sneaker</a></td>
                      <td>£85.00</td>
                      <td>Còn hàng</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                      <td className="text-right"><a className="button" href="#">THÊM VÀO GIỎ HÀNG</a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/1.png" alt="" /></td>
                      <td className="product-name"><a href="#">Quần Ống Rộng và Giày Sneaker</a></td>
                      <td>£85.00</td>
                      <td>Còn hàng</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                      <td className="text-right"><a className="button" href="#">THÊM VÀO GIỎ HÀNG</a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/2.jpg" alt="" /></td>
                      <td className="product-name"><a href="#">Quần Ống Rộng và Giày Sneaker</a></td>
                      <td>£85.00</td>
                      <td>Còn hàng</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                      <td className="text-right"><a className="button" href="#">THÊM VÀO GIỎ HÀNG</a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/1.png" alt="" /></td>
                      <td className="product-name"><a href="#">Quần Ống Rộng và Giày Sneaker</a></td>
                      <td>£85.00</td>
                      <td>Còn hàng</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                      <td className="text-right"><a className="button" href="#">THÊM VÀO GIỎ HÀNG</a></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><img src="images/products/2.jpg" alt="" /></td>
                      <td className="product-name"><a href="#">Quần Ống Rộng và Giày Sneaker</a></td>
                      <td>£85.00</td>
                      <td>Còn hàng</td>
                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                      <td className="text-right"><a className="button" href="#">THÊM VÀO GIỎ HÀNG</a></td>
                    </tr>
                  </tbody>
                </table>
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

export default WishlistPage;
