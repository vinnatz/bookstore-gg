angular.module('myApp', [])
  .controller('myController', ['$scope', function ($scope) {

    /*------- search button ----------- */
    $scope.searchform = document.querySelector('.search-form');

    $scope.toggleSearchForm = function () {
      $scope.searchform.classList.toggle('active');
    };

    window.onscroll = function () {
      $scope.searchform.classList.remove('active');

      if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
      } else {
        document.querySelector('.header .header-2').classList.remove('active');
      }
    };

    window.onload = function () {
      if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
      } else {
        document.querySelector('.header .header-2').classList.remove('active');
      }
    };

    /*----- login form -------- */
    $scope.loginForm = document.querySelector('.login-form-container');

    $scope.toggleLoginForm = function () {
      $scope.loginForm.classList.toggle('active');
    };

    $scope.closeLoginForm = function () {
      $scope.loginForm.classList.remove('active');
    };

    /*-------- swiper ---------- */
    var swiper = new Swiper(".books-list", {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    /*-------- featured section start ---------- */

    var swiper = new Swiper(".featured-slider", {

      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });


    /*-------- arrivals section start ---------- */

    var swiper = new Swiper(".arrivals-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });


    /*-------- reviews section start ---------- */

    var swiper = new Swiper(".reviews-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    /*-------- blog section start ---------- */

    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

  }]);