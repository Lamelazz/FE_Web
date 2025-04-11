import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header style1">
      {/* --- Top header với menu chính --- */}
      <div className="top-header">
        <div className="container">
          <div className="inner">
            <div className="main-menu-wapper">
              <div className="row">
                <div className="col-sm-8">
                  <ul className="boutique-nav main-menu clone-main-menu">
                    <li className="active menu-item-has-children item-megamenu">
                      <Link to="/">Trang chủ</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <span className="arow" />
                      <ul className="sub-menu">
                        <li><Link to="/about">Về chúng tôi</Link></li>
                        <li><Link to="/contact">Liên hệ chúng tôi</Link></li>
                        <li><Link to="/cart">Giỏ hàng</Link></li>
                        <li><Link to="/checkout">Thanh toán</Link></li>
                        <li><Link to="/wishlist">Danh sách yêu thích</Link></li>
                        <li><Link to="/lookbook">Sản phẩm nổi bật</Link></li>
                        <li><Link to="/404">Trang 404</Link></li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children item-megamenu">
                      <a href="#">Cửa hàng</a>
                      <div className="sub-menu megamenu megamenu-bg" style={{ width: '820px', backgroundImage: `url(/images/bg-megamenu.png)` }}>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="mega-custom-menu">
                              <h2 className="title">DANH MỤC</h2>
                              <ul>
                                <li><Link to="/category-left-sidebar">Thanh bên trái</Link></li>
                                <li><Link to="/category-3columns">3 cột</Link></li>
                                <li><Link to="/category-featured">Danh mục nổi bật</Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="mega-custom-menu">
                              <h2 className="title">SẢN PHẨM</h2>
                              <ul>
                                <li><Link to="/product-2">Hết hàng</Link></li>
                                <li><Link to="/product-3">Chiều rộng</Link></li>
                                <li><Link to="/product-6">Theo nhóm</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="menu-item-has-children item-megamenu">
                      <a href="#">TÍNH NĂNG</a>
                      <div className="sub-menu megamenu" style={{ width: '1500px' }}>
                        <div className="row">
                          {[
                            { icon: 'icon-custom', title: 'TÙY CHỈNH DỄ DÀNG', desc: 'Tùy chỉnh sản phẩm một cách dễ dàng.' },
                            { icon: 'icon-color', title: 'MÀU SẮC KHÔNG GIỚI HẠN', desc: 'Hàng trăm màu sắc phong phú.' },
                            { icon: 'icon-responsive', title: 'THIẾT KẾ ĐÁP ỨNG', desc: 'Tối ưu trên mọi thiết bị.' },
                            { icon: 'icon-document', title: 'HƯỚNG DẪN DỄ DÀNG', desc: 'Hướng dẫn chi tiết dễ hiểu.' },
                          ].map((item, i) => (
                            <div className="col-sm-6" key={i}>
                              <div className="element-icon">
                                <div className="icon"><img src={`/images/icons/${item.icon}.png`} alt="" /></div>
                                <div className="content">
                                  <h4 className="title">{item.title}</h4>
                                  <div className="text"><p>{item.desc}</p></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="/blogs">BLOG THỜI TRANG</Link>
                      <ul className="sub-menu">
                        <li><Link to="/blogs">Danh sách bài viết</Link></li>
                        <li><Link to="/blogpost">Chi tiết bài viết</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Cột phải */}
                <div className="col-sm-4">
                  <span className="mobile-navigation"><i className="fa fa-bars" /></span>
                  <div className="box-control">
                    <form className="box-search">
                      <input type="text" className="search" placeholder="Tìm kiếm..." />
                      <button className="button-search"><span className="pe-7s-search" /></button>
                    </form>
                    <div className="box-settings">
                      <span className="icon pe-7s-config" />
                      <div className="settings-wrapper">
                        <div className="setting-content">
                          <ul>
                            <li><a href="#"><i className="icon-heart icons" /> <span>Yêu thích</span></a></li>
                            <li><a href="#"><i className="icon-user icons" /> <span>Tài khoản</span></a></li>
                            <li><a href="#"><i className="icon-note icons" /> <span>Thanh toán</span></a></li>
                            <li><a href="#"><i className="icon-lock-open icons" /> <span>Đăng nhập / Đăng ký</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* end col */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Logo và danh mục hình tròn --- */}
      <div className="container">
        <div className="main-header">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/"><img src="/images/logos/1.png" alt="Logo" /></Link>
              </div>
            </div>
            <div className="col-lg-9">
              <ul className="category-menu">
                {['Quần áo', 'Giày thể thao', 'Phụ kiện', 'Túi xách'].map((item, index) => (
                  <li key={index}>
                    <a href="#"><img src={`/images/categorys/${index + 1}.png`} alt={item} />{item}</a>
                  </li>
                ))}
                <li className="mini-cart">
                  <a className="cart-link" href="#">
                    <img src="/images/categorys/5.png" alt="Giỏ hàng" />Giỏ hàng của tôi
                    <span className="count">3</span>
                  </a>
                  <div className="show-shopping-cart">
                    <h3 className="title">Bạn có <span className="text-primary">(3 sản phẩm)</span> trong giỏ</h3>
                    <ul className="list-product">
                      {[1, 1].map((id, i) => (
                        <li key={i}>
                          <div className="thumb"><img src={`/images/products/${id}.png`} alt="" /></div>
                          <div className="info">
                            <h4 className="product-name"><a href="#">ÁO NỈ LONDON STAR</a></h4>
                            <span className="price">1x£375.00</span>
                            <a className="remove-item" href="#"><i className="fa fa-close" /></a>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="sub-total">Tổng: £255.00</div>
                    <div className="group-button">
                      <a href="#" className="button">Giỏ hàng</a>
                      <a href="#" className="check-out button">Thanh toán</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
