// JavaScript to show search box on scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.body.classList.add("show-search-box");
    } else {
      document.body.classList.remove("show-search-box");
    }
  });
});



