import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <img src="images/b/47.jpg" alt="" />
        <ul className="kt-popup-gallery lookbook-list row">
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/1.jpg"><img src="images/products/1.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/2.jpg"><img src="images/products/2.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/3.jpg"><img src="images/products/3.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/4.jpg"><img src="images/products/4.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/5.jpg"><img src="images/products/5.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/6.jpg"><img src="images/products/6.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/7.jpg"><img src="images/products/7.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/8.jpg"><img src="images/products/8.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/9.jpg"><img src="images/products/9.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/10.jpg"><img src="images/products/10.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/11.jpg"><img src="images/products/11.jpg" alt="" /></a>
          </li>
          <li className="item col-sm-4 col-md-3">
            <a href="images/products/12.jpg"><img src="images/products/12.jpg" alt="" /></a>
          </li>
        </ul>
        <div className="navigation">
          <ul>
            <li><a href="#"><i className="fa fa-long-arrow-left"></i></a></li>
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i className="fa fa-long-arrow-right"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="margin-bottom-30">
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
      <Footer />
    </>
  );
};

export default GalleryPage;
