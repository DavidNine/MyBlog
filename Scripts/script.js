window.onscroll = function() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.classList.add("show");
  } else {
      backToTopBtn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
