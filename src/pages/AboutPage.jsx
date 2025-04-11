import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="page-banner about-banner">
        <div className="banner-content">
          <span className="subtitle">Chào mừng tới Boutique - Hãy cùng mua sắm với chúng tôi !</span>
          <h2 className="title">BOUTIQUE</h2>
        </div>
      </div>

      <div className="section-about">
        <div className="container">
          <div className="section-title text-center style7 margin-top-60">
            <span className="sub-title">
              Chào mừng tới Boutique - Nền tảng thương mại điện tử sáng tạo và tinh tế!
            </span>
            <h3>THE BOUTIQUE</h3>
          </div>

          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <blockquote className="style2 margin-bottom-10">
                Boutique được xây dựng với sứ mệnh mang đến trải nghiệm mua sắm trực tuyến tuyệt vời nhất cho khách
                hàng. Chúng tôi cam kết cung cấp những sản phẩm chất lượng cao, thiết kế độc đáo và dịch vụ khách hàng
                tận tâm. Hãy khám phá thế giới thời trang và phong cách sống tại Boutique.
              </blockquote>
            </div>
          </div>

          <div className="text-center GreatVibes">Đội ngũ Boutique</div>
        </div>
      </div>

      <div className="section-team margin-top-80">
        <div className="container">
          <div className="section-title text-center style7">
            <span className="sub-title">Đội ngũ tuyệt vời của chúng tôi!</span>
            <h3>GẶP GỠ ĐỘI NGŨ CỦA CHÚNG TÔI</h3>
          </div>
          <div
            className="teams owl-carousel nav-center-center nav-style7"
            data-loop="true"
            data-nav="true"
            data-dots="false"
            data-margin="30"
            data-responsive='{"0":{"items":1},"600":{"items":2},"1000":{"items":3}}'
          >
            <div className="team">
              <div className="avatar">
                <img src="images/teams/1.jpg" alt="" />
              </div>
              <div className="info">
                <h3 className="name">John Doe</h3>
                <span className="position">CEO/Người sáng lập Boutique</span>
              </div>
            </div>
            <div className="team">
              <div className="avatar">
                <img src="images/teams/2.jpg" alt="" />
              </div>
              <div className="info">
                <h3 className="name">Christiana Q</h3>
                <span className="position">Giám đốc nghệ thuật/Người sáng lập Boutique</span>
              </div>
            </div>
            <div className="team">
              <div className="avatar">
                <img src="images/teams/3.jpg" alt="" />
              </div>
              <div className="info">
                <h3 className="name">Jonathan Howard</h3>
                <span className="position">Sản phẩm Boutique</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-skills margin-top-80">
        <div className="container">
          <div className="section-title text-center style7">
            <span className="sub-title">Chúng ta đều là Tài năng!</span>
            <h3>NHỮNG KĨ NĂNG TUYỆT VỜI CỦA CHÚNG TÔI</h3>
          </div>

          <div className="kt-processbar">
            <div
              data-bgskill="#c99947"
              data-bgbar="#e4e4e4"
              data-percent="85"
              data-height="36"
              className="item-processbar"
            >
              <span className="processbar-title">ADOBE/PHOTOSHOP</span>
              <div className="processbar-bg">
                <div className="processbar-width">
                  <div className="processbar-percent">85%</div>
                </div>
              </div>
            </div>
            <div
              data-bgskill="#c99947"
              data-bgbar="#e4e4e4"
              data-percent="70"
              data-height="36"
              className="item-processbar"
            >
              <span className="processbar-title">LAYOUT/FRAME</span>
              <div className="processbar-bg">
                <div className="processbar-width">
                  <div className="processbar-percent">70%</div>
                </div>
              </div>
            </div>
            <div
              data-bgskill="#c99947"
              data-bgbar="#e4e4e4"
              data-percent="90"
              data-height="36"
              className="item-processbar"
            >
              <span className="processbar-title">UI DESIGN</span>
              <div className="processbar-bg">
                <div className="processbar-width">
                  <div className="processbar-percent">90%</div>
                </div>
              </div>
            </div>
            <div
              data-bgskill="#c99947"
              data-bgbar="#e4e4e4"
              data-percent="75"
              data-height="36"
              className="item-processbar"
            >
              <span className="processbar-title">FONT/TYPOGRAPHY</span>
              <div className="processbar-bg">
                <div className="processbar-width">
                  <div className="processbar-percent">75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-testimonials margin-top-40">
        <div className="container">
          <div className="section-title text-center style7">
            <span className="sub-title">Lời chứng thực!</span>
            <h3>KHÁCH HÀNG CỦA CHÚNG TÔI NÓI GÌ</h3>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div
                className="testimonials owl-carousel nav-center-center nav-style7"
                data-autoplay="true"
                data-loop="true"
                data-nav="false"
                data-dots="true"
                data-margin="30"
                data-responsive='{"0":{"items":1},"600":{"items":1},"1000":{"items":1}}'
              >
                <div className="testimonial">
                  <div className="text">
                    Tôi vô cùng hài lòng với dịch vụ nhận được. Đội ngũ làm việc chuyên nghiệp và vượt quá sự mong đợi
                    của tôi. Tôi thực sự khuyên dùng công ty này.
                  </div>
                  <h3 className="name">Marco Rossi</h3>
                  <span className="position">Doanh nhân</span>
                </div>
                <div className="testimonial">
                  <div className="text">
                    Sự chú ý đến chi tiết và sự chăm sóc khách hàng thật tuyệt vời. Họ đã làm cho quá trình này trở nên
                    đơn giản và không căng thẳng. Một trải nghiệm thực sự tích cực.
                  </div>
                  <h3 className="name">Laura Bianchi</h3>
                  <span className="position">Người làm nghề tự do</span>
                </div>
                <div className="testimonial">
                  <div className="text">
                    Tôi thấy sự hỗ trợ của họ là nền tảng cho sự phát triển kinh doanh của mình. Chuyên môn và sự tận
                    tâm của họ là yếu tố quyết định cho thành công của chúng tôi.
                  </div>
                  <h3 className="name">Giovanni Verdi</h3>
                  <span className="position">Giám đốc Marketing</span>
                </div>
              </div>
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

export default AboutPage;
