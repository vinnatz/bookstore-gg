angular.module('myApp', [])
    .controller('myController', ['$scope', function ($scope) {

        data.forEach(item => createFeaturedBook(item));
        data.forEach(item => createNewArrivalItems(item, 1));
        data.reverse().forEach(item => createNewArrivalItems(item, 2));

        // Search Button
        $scope.searchform = document.querySelector('.search-form');
        $scope.toggleSearchForm = function () {
            $scope.searchform.classList.toggle('active');
        };

        // Search Bar Disappear on Scroll
        window.onscroll = function () {
            $scope.searchform.classList.remove('active');
            if (window.scrollY > 80) {
                document.querySelector('header .navbar').classList.add('active');
            } else {
                document.querySelector('header .navbar').classList.remove('active');
            }
        };

        window.onload = function () {
            if (window.scrollY > 80) {
                document.querySelector('header .navbar').classList.add('active');
            } else {
                document.querySelector('header .navbar').classList.remove('active');
            }
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

    }]);

function createFeaturedBook(obj) {
    let featuredSlider = document.querySelector('section.featured > .swiper > .swiper-wrapper');

    let item = document.createElement('div');
    item.classList.add('swiper-slide', 'box');

    let author = document.createElement('h4');
    author.classList.add('author');
    author.textContent = obj.author;
    item.appendChild(author);

    let imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    let image = document.createElement('img');
    image.setAttribute('src', `${IMAGE_PATH}${obj.image}`);
    imgDiv.appendChild(image);
    item.appendChild(imgDiv);

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
        <h3>${obj.title}</h3>
        <h4>Volume ${obj.volume}</h4>
        <div>
            <a href="" class="btn">add to cart</a>
            <div class="price">$${obj.price}</div>
        </div>
    `;
    item.appendChild(content);

    featuredSlider.appendChild(item);
};

function createNewArrivalItems(obj, rowNum) {
    let newArrivals = document.querySelector(`section.arrivals > .swiper.row${rowNum} > .swiper-wrapper`);

    let item = document.createElement('a');
    item.classList.add('swiper-slide', 'box');

    let imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    let image = document.createElement('img');
    image.setAttribute('src', `${IMAGE_PATH}${obj.image}`);
    imgDiv.appendChild(image);
    item.appendChild(imgDiv);

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
        <h3>${obj.title}</h3>
        <p>Volume ${obj.volume}</p>
        <div class="price">$${obj.price}</div>
        <h4>${obj.author}</h4>
    `;
    item.appendChild(content);

    newArrivals.appendChild(item);
}


const IMAGE_PATH = "./assets/manga/";

// Comic dataset
const data = [{
    title: "100 Ghost Stories",
    volume: "1",
    author: "Matono Anji",
    image: "ghost1.png",
    price: "9.99",
}, {
    title: "100 Ghost Stories",
    volume: "2",
    author: "Matono Anji",
    image: "ghost2.jpg",
    price: "11.99",
}, {
    title: "100 Ghost Stories",
    volume: "3",
    author: "Matono Anji",
    image: "ghost3.jpg",
    price: "9.99",
}, {
    title: "100 Ghost Stories",
    volume: "4",
    author: "Matono Anji",
    image: "ghost4.jpg",
    price: "12.99",
}, {
    title: "100 Ghost Stories",
    volume: "5",
    author: "Matono Anji",
    image: "ghost5.jpg",
    price: "11.99",
}, {
    title: "100 Ghost Stories",
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
