import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container text-center">
          <div className="page-404">
            <h1>404</h1>
            <h2>Trang Không Tồn Tại</h2>
            <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <a href="/" className="button">
              Quay về trang chủ
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
