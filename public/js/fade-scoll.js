$(document).ready(function () {
  // Kiểm tra nếu phần tử trong viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Đặt lại trạng thái ban đầu của phần tử
  function resetElement($el) {
    $el.css("opacity", 0);
    $el.css("transform", "translateY(50px)");
  }

  // Xử lý sự kiện cuộn
  $(window).on("scroll", function () {
    $(".fade-in-box").each(function () {
      if (isElementInViewport(this)) {
        anime({
          targets: this,
          translateY: 0,
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
        });
      } else {
        resetElement($(this));
      }
    });
  });

  // Khởi tạo trạng thái ban đầu
  $(window).on("load", function () {
    $(".fade-in-box").each(function () {
      resetElement($(this));
    });
    // console.log("oke")
  });
});
