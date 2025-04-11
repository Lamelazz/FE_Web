import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogsPage = () => {
  return (
    <>
      <Header />
      <div className="main-container wishlist list-blogs">
        <div className="container">
          <h3 className="page-title">Blog Của Chúng Tôi</h3>
          <div className="blog-grid butique-masonry">
            <div className="masonry-grid" data-layoutmode="masonry" data-cols="3">
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog1.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Phong Cách Thời Trang Đường Phố Mùa Đông</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Khám phá những xu hướng thời trang đường phố mùa đông mới nhất, từ áo khoác ấm áp đến phụ kiện thời trang.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog2.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Bí Quyết Phối Đồ Với Giày Sneakers</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Tìm hiểu cách phối đồ với giày sneakers để tạo nên những bộ trang phục năng động và thời trang.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog3.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Xu Hướng Túi Xách Hot Nhất 2025</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Cập nhật những mẫu túi xách đang được yêu thích nhất trong năm 2025.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog4.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Phụ Kiện Thời Trang Không Thể Thiếu</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Khám phá những phụ kiện thời trang giúp bạn tạo điểm nhấn cho bộ trang phục.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog5.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Gợi Ý Trang Phục Cho Buổi Hẹn Hò</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Những gợi ý trang phục giúp bạn tự tin và quyến rũ trong buổi hẹn hò.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog6.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Cách Chọn Quần Jeans Phù Hợp Với Dáng Người</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Hướng dẫn chi tiết cách chọn quần jeans phù hợp với từng dáng người.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog7.jpg" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Mẹo Chăm Sóc Quần Áo Bền Đẹp</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Những mẹo đơn giản giúp quần áo của bạn luôn bền đẹp như mới.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog8.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Phong Cách Thời Trang Công Sở Thanh Lịch</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Gợi ý những bộ trang phục công sở thanh lịch và chuyên nghiệp.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
                </div>
              </div>
              <div className="grid-item masonry-item">
                <div className="blog-item">
                  <div className="post-thumbnail">
                    <a className="banner-opacity" href="#"><img alt="17_blog" src="images/blogs/17-Blog9.png" /></a>
                  </div>
                  <h3 className="blog-title"><a href="#">Xu Hướng Thời Trang Bền Vững</a></h3>
                  <div className="entry-meta">
                    <span className="post-date">20 Tháng 12 2020</span>
                    <span className="blog-comment"><i className="fa fa-comment"></i><span className="count-comment">36</span></span>
                  </div>
                  <div className="blog-short-desc">
                    <p>Khám phá những cách để thời trang trở nên thân thiện với môi trường hơn.</p>
                  </div>
                  <a className="readmore" href="#">Đọc Thêm</a>
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

export default BlogsPage;
