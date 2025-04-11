import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row flex-flow">
            {/* Liên hệ */}
            <div className="col-sm-12 col-md-4 footer-sidebar">
              <div className="widget contact-info">
                <span className="text-primary PlayfairDisplay">Liên hệ với chúng tôi ngay !</span>
                <h3 className="widget-title">LIÊN HỆ</h3>
                <div className="content">
                  <p className="address">235 Hoàng Quốc Việt, Cầu Giấy</p>
                  <p className="phone"><i className="fa fa-phone"></i> (+800) 6868 2268</p>
                </div>
              </div>
            </div>

            {/* Dịch vụ */}
            <div className="col-sm-12 col-md-4 footer-sidebar">
              <div className="widget our-service">
                <span className="text-primary PlayfairDisplay">Dịch vụ của chúng tôi !</span>
                <h3 className="widget-title">DỊCH VỤ CỦA CHÚNG TÔI</h3>
                <div className="content">
                  <ul>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Lịch sử đơn hàng</a></li>
                    <li><a href="#">Trả hàng</a></li>
                    <li><a href="#">Dịch vụ khách hàng</a></li>
                    <li><a href="#">Điều khoản &amp; Điều kiện</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mạng xã hội */}
            <div className="col-sm-12 col-md-4 footer-sidebar">
              <div className="widget widget_social">
                <span className="text-primary PlayfairDisplay">Theo dõi chúng tôi !</span>
                <h3 className="widget-title">THEO DÕI CHÚNG TÔI</h3>
                <div className="content">
                  <div className="social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thanh toán */}
      <div className="footer-bottom">
        <div className="container">
          <div className="payment">
            <div className="head">
              <span>Chúng tôi chấp nhận </span>
              <span className="PlayfairDisplay">thanh toán trực tuyến an toàn</span>
            </div>
            <div className="list">
              <a href="#" className="item"><img src="images/payments/1.png" alt="" /></a>
              <a href="#" className="item"><img src="images/payments/2.png" alt="" /></a>
              <a href="#" className="item"><img src="images/payments/3.png" alt="" /></a>
              <a href="#" className="item"><img src="images/payments/4.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
