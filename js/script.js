angular.module('myApp', [])
    .controller('myController', ['$scope', function ($scope) {

        // Search Button
        $scope.searchform = document.querySelector('.search-form');
        $scope.toggleSearchForm = function () {
            $scope.searchform.classList.toggle('active');
        };

        // Search Bar Disappear on Scroll
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

        // Login Form
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

// Comic dataset
const data = [{
    title: "100 Ghost Stories to Die for",
    volume: "1",
    author: "Matono Anji",
    image: "ghost1.jpg",
    price: "9.99",
}, {
    title: "100 Ghost Stories to Die for",
    volume: "2",
    author: "Matono Anji",
    image: "ghost2.jpg",
    price: "11.99",
}, {
    title: "100 Ghost Stories to Die for",
    volume: "3",
    author: "Matono Anji",
    image: "ghost3.jpg",
    price: "9.99",
}, {
    title: "100 Ghost Stories to Die for",
    volume: "4",
    author: "Matono Anji",
    image: "ghost4.jpg",
    price: "12.99",
}, {
    title: "100 Ghost Stories to Die for",
    volume: "5",
    author: "Matono Anji",
    image: "ghost5.jpg",
    price: "11.99",
}, {
    title: "100 Ghost Stories to Die for",
    volume: "6",
    author: "Matono Anji",
    image: "ghost6.jpg",
    price: "14.99",
}, {
    title: "Goodbye, Eri",
    volume: "1",
    author: "Fujimoto Tatsuki",
    image: "goodbyeEri.jpg",
    price: "19.99",
}, {
    title: "The Horizon",
    volume: "1",
    author: "Jeong Ji-Hoon",
    image: "theHorizon1.jpg",
    price: "10.99",
}, {
    title: "The Horizon",
    volume: "2",
    author: "Jeong Ji-Hoon",
    image: "theHorizon2.jpg",
    price: "14.99",
}, {
    title: "The Horizon",
    volume: "3",
    author: "Jeong Ji-Hoon",
    image: "theHorizon3.jpg",
    price: "19.99",
}, {
    title: "Annarasumanara",
    volume: "1",
    author: "Ha Il-Kwon",
    image: "annarasumanara1.jpg",
    price: "9.99",
}, {
    title: "Annarasumanara",
    volume: "2",
    author: "Ha Il-Kwon",
    image: "annarasumanara2.jpg",
    price: "8.99",
}, {
    title: "Annarasumanara",
    volume: "3",
    author: "Ha Il-Kwon",
    image: "annarasumanara3.jpg",
    price: "6.99",
}, {
    title: "Uzumaki",
    volume: "1",
    author: "Itou Junji",
    image: "uzumaki1.jpg",
    price: "11.99",
}, {
    title: "Uzumaki",
    volume: "2",
    author: "Itou Junji",
    image: "uzumaki2.jpg",
    price: "13.99",
}, {
    title: "Uzumaki",
    volume: "3",
    author: "Itou Junji",
    image: "uzumaki3.jpg",
    price: "12.99",
}, {
    title: "Stargazing Dog",
    volume: "1",
    author: "Murakami Takashi",
    image: "stargazingDog1.jpg",
    price: "12.99",
}, {
    title: "Stargazing Dog",
    volume: "2",
    author: "Murakami Takashi",
    image: "stargazingDog2.jpg",
    price: "14.99",
}];
