import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetailPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container">
          <div className="blog-detail">
            <article className="blog-item">
              <h3 className="blog-title"><a href="#">Thiết Kế Vượt Thời Gian: Sự Kết Hợp Hoàn Hảo</a></h3>
              <div className="entry-meta">
                <span className="post-date">20 Tháng 12 2020</span>
                <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
              </div>
              <div className="post-thumbnail">
                <a href="#"><img alt="17_blog" src="images/blogs/18.jpg" /></a>
              </div>
              <div className="blog-short-desc">
                <p>Sự kết hợp giữa chất liệu cao cấp và kiểu dáng tinh tế tạo nên một thiết kế vượt thời gian. Mỗi chi tiết đều được chăm chút tỉ mỉ, từ đường kim mũi chỉ đến chất liệu vải mềm mại, mang lại cảm giác thoải mái và sang trọng cho người mặc. Thiết kế này không chỉ phù hợp với nhiều dịp khác nhau mà còn tôn lên vẻ đẹp tự nhiên của người phụ nữ. </p>
                <p>Với gam màu trung tính, dễ dàng phối hợp với nhiều trang phục và phụ kiện khác nhau, tạo nên nhiều phong cách thời trang đa dạng. Dù bạn theo đuổi phong cách thanh lịch, năng động hay quyến rũ, thiết kế này đều có thể đáp ứng được. </p>
                <p><span className="style-italic">Hãy để thiết kế này trở thành điểm nhấn trong tủ đồ của bạn, mang lại sự tự tin và phong cách riêng biệt.</span></p>
                <p>Sản phẩm này không chỉ là một món đồ thời trang, mà còn là một tác phẩm nghệ thuật, thể hiện sự tinh tế và đẳng cấp của người sở hữu. Hãy trải nghiệm sự khác biệt và cảm nhận vẻ đẹp vượt thời gian mà thiết kế này mang lại. </p>
              </div>
            </article>
          </div>
          <div className="comment-social">
            <h4>2 Bình Luận</h4>
            <div className="social">
              <span>Chia sẻ</span>
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google-plus"></i></a>
              <a href="#"><i className="fa fa-pinterest"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
          <div className="author-info-wrap">
            <div className="avatar"><img alt="18_blogpost" src="images/blogs/avatar.png" /></div>
            <div className="content">
              <div className="author-name"><a href="#">Quản Trị Viên</a></div>
              <div className="text"><p>Những chia sẻ từ đội ngũ của chúng tôi về các xu hướng thời trang mới nhất. Hãy cùng khám phá và tìm ra phong cách độc đáo của riêng bạn.</p></div>
            </div>
          </div>
          <div className="related-wrap">
            <h4 className="related-title">BÀI VIẾT LIÊN QUAN</h4>
            <ul className="blog-related row">
              <li className="blog-item col-sm-4">
                <div className="post-thumbnail">
                  <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/blog1.png" /></a>
                </div>
                <h3 className="blog-title"><a href="#">Phong Cách Đường Phố: Năng Động và Cá Tính</a></h3>
                <div className="entry-meta">
                  <span className="post-date">20 Tháng 12 2020</span>
                  <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                </div>
              </li>
              <li className="blog-item col-sm-4">
                <div className="post-thumbnail">
                  <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/blog2.png" /></a>
                </div>
                <h3 className="blog-title"><a href="#">Thời Trang Công Sở: Thanh Lịch và Chuyên Nghiệp</a></h3>
                <div className="entry-meta">
                  <span className="post-date">20 Tháng 12 2020</span>
                  <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                </div>
              </li>
              <li className="blog-item col-sm-4">
                <div className="post-thumbnail">
                  <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/blog3.png" /></a>
                </div>
                <h3 className="blog-title"><a href="#">Xu Hướng Màu Sắc: Nổi Bật và Ấn Tượng</a></h3>
                <div className="entry-meta">
                  <span className="post-date">20 Tháng 12 2020</span>
                  <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                </div>
              </li>
            </ul>
          </div>
          <div id="comments">
            <h4 className="comment-list-title">02 BÌNH LUẬN</h4>
            <ul className="comment-list">
              <li className="comment even parent">
                <div className="comment-item">
                  <div className="comment-author">
                    <img alt="18_blogpost" src="images/blogs/avatar2.png" />
                  </div>
                  <div className="comment-body">
                    <h5 className="author">Kylian Huubappe</h5>
                    <span className="date-comment">20 Tháng 12 2020</span>
                    <div className="comment-content">
                      <p>Bài viết rất hay! Tôi rất thích những gợi ý phối đồ trong bài. Cảm ơn bạn đã chia sẻ.</p>
                    </div>
                    <a rel="nofollow" className="comment-reply-link" href="#">reply<i className="fa fa-mail-reply"></i></a>
                  </div>
                </div>
                <ol className="children">
                  <li className="comment odd">
                    <div className="comment-item">
                      <div className="comment-author">
                        <img alt="18_blogpost" src="images/blogs/avatar3.png" />
                      </div>
                      <div className="comment-body">
                        <h5 className="author">Nguyen Tien Linh</h5>
                        <span className="date-comment">20 Tháng 12 2024</span>
                        <div className="comment-content">
                          <p>Tôi cũng thấy vậy. Bài viết rất hữu ích.</p>
                        </div>
                        <a rel="nofollow" className="comment-reply-link" href="#">reply<i className="fa fa-mail-reply"></i></a>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
            </ul>
            <div className="comment-form">
              <h3 className="comment-reply-title">Để Lại Bình Luận</h3>
              <form method="post">
                <input type="text" id="author" name="author" value="" placeholder="Tên của bạn" size="30" aria-required="true" />
                <input type="text" id="email" name="email" value="" size="30" placeholder="Email của bạn" aria-required="true" />
                <textarea className="comment-form-comment" name="comment" cols="45" placeholder="Bình luận của bạn" rows="8" aria-required="true"></textarea>
                <div className="clear"></div>
                <input type="submit" name="button" className="submit style2" value="Gửi" />
                <input className="button" type="hidden" name="comment_parent" id="comment_parent" value="0" />
              </form>
            </div>
          </div>
          <div className="margin-top-60">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="element-icon style2">
                  <div className="icon"><i className="flaticon flaticon-origami28"></i></div>
                  <div className="content">
                    <h4 className="title">MIỄN PHÍ VẬN CHUYỂN TOÀN CẦU</h4>
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
                    <h4 className="title">HỖ TRỢ TRỰC TUYẾN 24/7</h4>
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

export default BlogDetailPage;
