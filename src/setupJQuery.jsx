// src/setupJQuery.js
import $ from 'jquery';
window.$ = window.jQuery = $;

// Dùng require để tránh hoisting
require('owl.carousel'); // đảm bảo sau khi jQuery được gán

export default $;
