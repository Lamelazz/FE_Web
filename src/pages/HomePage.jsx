import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider'; // Slider nằm sau Header

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSlider />

      <div className="margin-top-40">
        <div className="row">
          <div className="col-sm-4" style={{ textAlign: 'right' }}>
            <img style={{ marginRight: '20px' }} className="margin-top-25" src="images/logos/1.png" alt="" />
          </div>
          <div className="col-sm-7">
            <blockquote>
              Boutique là sự phản chiếu của bạn! Sự gợi cảm và tự tin tỏa sáng qua tủ đồ táo bạo của mình. Chúng tôi
              mang đến cho bạn những gì quyến rũ và gợi cảm nhất, đồng thời luôn ghi nhớ rằng chất lượng cao không
              nhất thiết phải đi kèm với giá cao.
            </blockquote>
          </div>
        </div>
      </div>

      <div className="margin-top-40">
        <div className="row">
          <div className="col-sm-12 col-md-6 margin-bottom-30">
            <a className="banner-opacity" href="#"><img src="images/b/2.jpg" alt="" /></a>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              {[11, 13, 27, 28].map((img, idx) => (
                <div className="col-sm-6" key={idx}>
                  <a href="#" className="banner-product">
                    <img src={`images/products/${img}.jpg`} alt="" />
                    <h3 className="text">Áo thun Weekday Crew</h3>
                    <span className="price">£125.00</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center margin-top-20">
        GIAO HÀNG MIỄN PHÍ TẠI ANH + TRẢ HÀNG TRÊN 85,00 BẢNG ANH (KHÔNG BAO GỒM ĐỒ GIA DỤNG) | MIỄN PHÍ NHẬN HÀNG TẠI
        ANH TẠI CỬA HÀNG
      </div>

      <div className="margin-top-50">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12">
                <a href="#" className="banner-product">
                  <img src="images/products/17.jpg" alt="" />
                  <h3 className="text">Áo thun Weekday Crew</h3>
                  <span className="price">
                    <ins>£125.00</ins> <del>£150.00</del>
                  </span>
                </a>
              </div>
              {[27, 28].map((img, idx) => (
                <div className="col-sm-6" key={idx}>
                  <a href="#" className="banner-product">
                    <img src={`images/products/${img}.jpg`} alt="" />
                    <h3 className="text">Áo thun Weekday Crew</h3>
                    <span className="price">£125.00</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <a className="banner-opacity" href="#"><img src="images/b/3.jpg" alt="" /></a>
          </div>
        </div>
      </div>

      <div className="margin-top-30 section-lasttest-blog">
        <div className="section-title text-center"><h3>Blog của chúng tôi</h3></div>
        <div className="lastest-blog owl-carousel nav-center-center nav-style7"
          data-nav="true"
          data-dots="false"
          data-loop="true"
          data-margin="30"
          data-responsive='{"0":{"items":1},"600":{"items":1},"1000":{"items":2}}'>
          {[1, 2, 1].map((num, idx) => (
            <div className="item-blog" key={idx}>
              <div className="left">
                <div className="blog-date">
                  <span className="day">7</span>
                  <span className="month">/SEP</span><br />
                  <span className="year">{idx === 0 ? '2024' : '2015'}</span>
                </div>
                <h3 className="blog-title"><a href="#">Chúng tôi là những nhà thiết kế giỏi nhất từ ​Việt Nam</a></h3>
                <div className="meta">
                  <span className="author">John Doe</span>
                  <span className="comment"><i className="fa fa-comment"></i> 36 bình luận</span>
                </div>
              </div>
              <div className="right">
                <a className="banner-border" href="#"><img src={`images/blogs/${num}.jpg`} alt="" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-brand-slide">
        <div className="brands-slide owl-carousel nav-center-center nav-style7"
          data-nav="true"
          data-dots="false"
          data-loop="true"
          data-margin="60"
          data-responsive='{"0":{"items":1},"600":{"items":3},"1000":{"items":5}}'>
          {[1, 2, 3, 4, 5].map((num, idx) => (
            <a href="#" key={idx}><img src={`images/brands/brand${num}.png`} alt="" /></a>
          ))}
        </div>
      </div>

      <div className="margin-top-60">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <div className="video video-lightbox">
              <img src="images/bg_video.png" alt="" />
              <div className="overlay"></div>
              <a href="#" className="link-lightbox button-play" data-videoid="134060140" data-videosite="vimeo"></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="newsletter">
              <div className="section-title text-center"><h3>BẢN TIN</h3></div>
              <i className="newsletter-info">Đăng ký nhận bản tin của chúng tôi &amp; Khuyến mãi</i>
              <form className="form-newsletter">
                <input type="text" name="newsletter" placeholder="Điền địa chỉ Email của bạn ở đây..." defaultValue="" />
                <span><button className="newsletter-submit" type="submit">ĐĂNG KÝ</button></span>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-top-60 margin-bottom-30">
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

      <Footer />
    </>
  );
};

export default HomePage;
