import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPostPage from "./pages/BlogPostPage";
import CartPage from "./pages/CartPage";
import CategoryLeftSidebar from "./pages/CategoryLeftSidebar";
import CategoryThreeColumns from "./pages/CategoryThreeColumns";
import CategoryLeftSidebarFeatured from "./pages/CategoryLeftSidebarFeatured";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import LookbookPage from "./pages/LookbookPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductUnavailablePage from "./pages/ProductUnavailablePage";
import ProductFullWidthPage from "./pages/ProductFullWidthPage";
import ProductGroupedPage from "./pages/ProductGroupedPage";
import WishlistPage from "./pages/WishlistPage";

import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/chosen.css';
import './assets/css/font-awesome.min.css';
import './assets/css/jquery.mCustomScrollbar.css';
import './assets/css/lightbox.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.carousel.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/css/style.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogpost" element={<BlogPostPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category-left-sidebar" element={<CategoryLeftSidebar />} />
        <Route path="/category-3columns" element={<CategoryThreeColumns />} />
        <Route path="/category-featured" element={<CategoryLeftSidebarFeatured />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/product-2" element={<ProductUnavailablePage />} />
        <Route path="/product-3" element={<ProductFullWidthPage />} />
        <Route path="/product-6" element={<ProductGroupedPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
