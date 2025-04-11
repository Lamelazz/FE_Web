import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="page-banner contact-banner">
        <div className="banner-content">
          <span className="subtitle">Chúng tôi ở đây để giúp bạn vui</span>
          <h2 className="title">Hãy cùng nhau trò chuyện</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="kt-contact-form margin-top-60">
              <div id="message-box-conact"></div>
              <h3 className="title">LIÊN HỆ VỚI CHÚNG TÔI ĐỂ ĐƯỢC GIẢI ĐÁP BẤT KỲ CÂU HỎI NÀO</h3>
              <p>
                <input id="name" type="text" placeholder="Tên của bạn" />
              </p>
              <p>
                <input id="email" type="text" placeholder="Địa chỉ Email" />
              </p>
              <p>
                <textarea id="content" placeholder="Lời nhắn của bạn!"></textarea>
              </p>
              <button id="btn-send-contact" className="button">GỬI TIN NHẮN</button>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="margin-top-60">
              <img src="images/b/46.jpg" alt="" />
              <h6 className="margin-top-20">GỌI CHO CHÚNG TÔI</h6>
              <p className="roboto">
                Bạn muốn nói chuyện với nhân viên bán hàng? Hãy gửi cho chúng tôi câu hỏi và chúng tôi sẽ vui lòng trả
                lời bất kỳ câu hỏi nào!
              </p>
              <p style={{ fontSize: 18, color: '#222', fontWeight: 'bold' }}>
                <i className="fa fa-phone"></i> (+800) 6868 2268
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-top-60 margin-bottom-30">
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

export default ContactPage;
