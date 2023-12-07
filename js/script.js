angular.module('myApp', [])
    .controller('myController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

        // Adding Catalogue with JS
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

        // Navbar
        $scope.goToSection = function (sectionId) {
            $location.hash(sectionId);
            $anchorScroll();
        };

        // Login form
        // Open login
        $scope.openLogin = function () {
            let blurPage = document.createElement('div');
            blurPage.classList.add('blur');

            let loginForm = document.createElement('div');
            loginForm.classList.add('login-form');

            loginForm.innerHTML = `
                <button class="close-btn" ng-click="closeLogin()"> X </button>
                <form class="login">
                    <h2>Welcome</h2>
                    <p>Please log in</p>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Log In" />
                    <div class="links">
                        <a href="#" id="registerUser">Register</a>
                    </div>
                </form>
            `;
            loginForm.querySelector('.close-btn').addEventListener('click', function () {
                $scope.closeLogin();
            });
            loginForm.querySelector('#registerUser').addEventListener('click', function () {
                $scope.closeLogin();
                $scope.openRegister();
            });

            blurPage.appendChild(loginForm);
            document.body.appendChild(blurPage);

            $scope.showLogin = true;
            // Event handler for login form
            document.querySelector('.login').addEventListener('submit', function (event) {
                event.preventDefault();
                $scope.login();
            });
        };

        // Open Register
        $scope.openRegister = function () {
            let blurPage = document.createElement('div');
            blurPage.classList.add('blur');

            let registerForm = document.createElement('div');
            registerForm.classList.add('login-form');

            registerForm.innerHTML = `
                <button class="close-btn" ng-click="closeRegister()"> X </button>
                <form class="login">
                    <h2>Register</h2>
                    <p>Create an account</p>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Register" />
                    <div class="links">
                        <span> Already have an account? <a href="#" id="loginUser">Log in</a></span>
                    </div>
                </form>
            `;

            registerForm.querySelector('.close-btn').addEventListener('click', function () {
                $scope.closeRegister();
            });
            registerForm.querySelector('#loginUser').addEventListener('click', function () {
                $scope.closeRegister();
                $scope.openLogin();
            });

            blurPage.appendChild(registerForm);
            document.body.appendChild(blurPage);

            $scope.showLogin = true;
        };

        // Close Login
        $scope.closeLogin = function () {
            let blurPage = document.querySelector('.blur');
            if (blurPage) {
                document.body.removeChild(blurPage);
            }

            $scope.showLogin = false;
        };

        // Close Register
        $scope.closeRegister = function () {
            let blurPage = document.querySelector('.blur');
            if (blurPage) {
                document.body.removeChild(blurPage);
            }

            $scope.showLogin = false;
        };

        // Event handler for login form
        $scope.login = function () {
            let usernameInput = document.querySelector('.login input[type=text]').value;
            let passwordInput = document.querySelector('.login input[type=password]').value;

            let user = loginData.find(user => user.username === usernameInput && user.password === passwordInput);

            if (user) {
                alert(`Selamat datang, ${user.username}!`);
                $scope.closeLogin();
                document.getElementById('login-btn').classList.remove('fa-user');
                document.getElementById('login-btn').classList.add('fa-sign-out-alt');
                document.getElementById('login-btn').onclick = $scope.logout;
            } else {
                $scope.closeLogin();
                $scope.openLogin();
                alert('Username atau password salah. Silakan coba lagi.');
            }
        };

        // Event handler for logout
        $scope.logout = function () {
            document.getElementById('login-btn').classList.remove('fa-sign-out-alt');
            document.getElementById('login-btn').classList.add('fa-user');
            document.getElementById('login-btn').onclick = $scope.openLogin;
            alert('Anda telah logout');
        };

        // Event listener for the Escape key
        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                $scope.$apply(function () {
                    $scope.closeLogin();
                    $scope.closeRegister();
                });
            }
        });
        // End of Login Form



        // Book data
        $scope.books = data;

        // Search functionality
        $scope.searchText = '';
        $scope.searchResults = [];

        $scope.searchBook = function () {
            if ($scope.searchText.trim() === '') {
                $scope.searchResults = [];
            } else {
                $scope.searchResults = $scope.books.filter(book => book.title.toLowerCase().includes($scope.searchText.toLowerCase()));
            }
        };

        $scope.goToBookDetails = function (bookuniqueID) {
            window.open(`https://myanimelist.net/manga/${bookuniqueID}`, '_blank').focus();
        };

        // When you want to submit 
        $scope.preventSubmit = function (event) {
            event.preventDefault();
        };

        // When you click off or click "x"
        $scope.clearSearch = function () {
            let autocompleteList = document.getElementById('autocomplete-list');
            autocompleteList.classList.add('hide');
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.searchResults = [];
                    autocompleteList.classList.remove('hide');
                });
            }, 200); // delay in milliseconds
        };

        // Add to Cart
        $scope.cart = [];
        let featuredItems = document.querySelectorAll('section.featured .featured-slider .box .content button');
        featuredItems.forEach(item => {
            item.addEventListener('click', (e) => {

                const key = +e.target.dataset.key;
                const selected = data.find(item => item.id === key);

                const existing = $scope.cart.find(item => item.id === key);
                const alreadyExist = (existing !== undefined);

                if (alreadyExist) {
                    existing["qty"] = existing.qty + 1;
                } else {
                    selected["qty"] = 1;
                    $scope.cart.push(selected);
                }

                const handleDelete = (e) => {
                    const key = +e.target.dataset.key;
                    $scope.cart = $scope.cart.filter(item => item.id !== key);
                    const cart = document.querySelector('section.cart > .content');
                    cart.innerHTML = '';

                    $scope.cart.forEach(item => {
                        addToCart(item, handleDelete);
                    });
                };

                const cart = document.querySelector('section.cart > .content');
                cart.innerHTML = '';

                $scope.cart.forEach(item => {
                    addToCart(item, handleDelete);
                });
            });
        });


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
    author.onclick = function () { window.open(`https://www.google.com/search?q=${obj.author}`, '_blank').focus(); }; // Updated this line
    item.appendChild(author);

    let imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
    let image = document.createElement('img');
    image.setAttribute('src', `${IMAGE_PATH}${obj.image}`);
    image.onclick = function () { goToBookDetails(obj.uniqueID); };
    imgDiv.appendChild(image);
    item.appendChild(imgDiv);

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
        <h3>${obj.title}</h3>
        <h4>Volume ${obj.volume}</h4>
        <div>
            <button data-key="${obj.id}">add to cart</button>
            <div class="price">$${obj.price}</div>
        </div>
    `;
    item.appendChild(content);

    featuredSlider.appendChild(item);

};

function goToBookDetails(bookuniqueID) {
    window.open(`https://myanimelist.net/manga/${bookuniqueID}`, '_blank').focus();
};

// When you want to submit 
function preventSubmit(event) {
    event.preventDefault();
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

    createPopUp(item, obj);

    newArrivals.appendChild(item);
}

function createPopUp(ptr, obj) {
    ptr.addEventListener("click", () => {
        let blurPage = document.createElement('div');
        blurPage.classList.add('blur');

        let image = document.createElement('img');
        image.setAttribute('src', `${IMAGE_PATH}${obj.image}`);
        image.classList.add('scale-in-center');

        blurPage.addEventListener("click", () => {
            image.classList.remove('scale-in-center');
            image.classList.add('scale-out-center');
            document.body.removeChild(blurPage);
        });

        blurPage.appendChild(image);
        document.body.insertBefore(blurPage, document.querySelector('header'));
    });
}

// Create Add Cart Notification
function addCartNotification(obj) {
    let popUp = document.createElement('div');
    popUp.classList.add('add-cart-dialog');

    popUp.innerHTML = `<span>${obj.title} Vol.${obj.volume}</span> added to cart`;
    document.body.insertBefore(popUp, document.querySelector('header'));

    setTimeout(() => document.body.removeChild(popUp), 1200);
}


// Add to Cart UI
function addToCart(obj, handleDelete) {
    const cartContainer = document.querySelector('section.cart');
    const cart = document.querySelector('section.cart > .content');

    addCartNotification(obj);

    let item = document.createElement('div');
    item.classList.add('item');

    let image = document.createElement('img');
    image.setAttribute('src', `${IMAGE_PATH}${obj.image}`);
    item.appendChild(image);

    let desc = document.createElement('div');
    desc.classList.add('desc');

    desc.innerHTML = `
        <h4>${obj.title}</h4>
        <h5>Volume ${obj.volume}</h5>
        <p>Qty: ${obj.qty}</p>
    `;
    item.appendChild(desc);

    // Create delete button with trash bin icon
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i data-key="${obj.id}" class="fas fa-trash"></i>`;
    deleteBtn.classList.add("trash-btn");
    deleteBtn.addEventListener("click", handleDelete);


    item.appendChild(deleteBtn);
    cart.appendChild(item);

    // Check if the checkout button already exists within cartContainer
    if (!cartContainer.querySelector('.checkout')) {
        const checkoutButton = document.createElement('button');
        checkoutButton.classList.add('checkout');
        checkoutButton.innerText = 'Checkout';

        checkoutButton.addEventListener('click', () => {
            // Add your checkout logic here
            // For example, redirect to a checkout page
            console.log('Checkout button clicked');
        });

        cartContainer.appendChild(checkoutButton);
    }
}


// Show Shopping Cart
const shoppingCartBtn = document.querySelector('a.fas.fa-shopping-cart');
shoppingCartBtn.addEventListener("click", () => {
    const cart = document.querySelector('section.cart');
    cart.classList.remove('slide-out-right');
    cart.classList.add('slide-in-right');
    cart.classList.toggle('active');
});

// Hide Shopping Cart
const hideCartBtn = document.querySelector('a.fa-solid.fa-chevron-right');
hideCartBtn.addEventListener("click", () => {
    const cart = document.querySelector('section.cart');
    cart.classList.remove('slide-in-right');
    cart.classList.add('slide-out-right');
    setTimeout(() => {
        cart.classList.remove('active');
    }, 500);
});

const IMAGE_PATH = "./assets/manga/";

const loginData = [{
    username: "user",
    password: "user"
}];

// Manga dataset
const data = [{
    id: 1,
    title: "100 Ghost Stories",
    volume: "1",
    author: "Matono Anji",
    image: "ghost1.png",
    price: "9.99",
    uniqueID: 141760,
}, {
    id: 2,
    title: "100 Ghost Stories",
    volume: "2",
    author: "Matono Anji",
    image: "ghost2.jpg",
    price: "11.99",
    uniqueID: 141760,
}, {
    id: 3,
    title: "100 Ghost Stories",
    volume: "3",
    author: "Matono Anji",
    image: "ghost3.jpg",
    price: "9.99",
    uniqueID: 141760,
}, {
    id: 4,
    title: "100 Ghost Stories",
    volume: "4",
    author: "Matono Anji",
    image: "ghost4.jpg",
    price: "12.99",
    uniqueID: 141760,
}, {
    id: 5,
    title: "100 Ghost Stories",
    volume: "5",
    author: "Matono Anji",
    image: "ghost5.jpg",
    price: "11.99",
    uniqueID: 141760,
}, {
    id: 6,
    title: "100 Ghost Stories",
    volume: "6",
    author: "Matono Anji",
    image: "ghost6.jpg",
    price: "14.99",
    uniqueID: 141760,
}, {
    id: 7,
    title: "Goodbye, Eri",
    volume: "1",
    author: "Fujimoto Tatsuki",
    image: "goodbyeEri.jpg",
    price: "19.99",
    uniqueID: 145863,
}, {
    id: 8,
    title: "The Horizon",
    volume: "1",
    author: "Jeong Ji-Hoon",
    image: "theHorizon1.jpg",
    price: "10.99",
    uniqueID: 125036,
}, {
    id: 9,
    title: "The Horizon",
    volume: "2",
    author: "Jeong Ji-Hoon",
    image: "theHorizon2.jpg",
    price: "14.99",
    uniqueID: 125036,
}, {
    id: 10,
    title: "The Horizon",
    volume: "3",
    author: "Jeong Ji-Hoon",
    image: "theHorizon3.jpg",
    price: "19.99",
    uniqueID: 125036,
}, {
    id: 11,
    title: "Annarasumanara",
    volume: "1",
    author: "Ha Il-Kwon",
    image: "annarasumanara1.jpg",
    price: "9.99",
    uniqueID: 30079,
}, {
    id: 12,
    title: "Annarasumanara",
    volume: "2",
    author: "Ha Il-Kwon",
    image: "annarasumanara2.jpg",
    price: "8.99",
    uniqueID: 30079,
}, {
    id: 13,
    title: "Annarasumanara",
    volume: "3",
    author: "Ha Il-Kwon",
    image: "annarasumanara3.jpg",
    price: "6.99",
    uniqueID: 30079,
}, {
    id: 14,
    title: "Uzumaki",
    volume: "1",
    author: "Itou Junji",
    image: "uzumaki1.jpg",
    price: "11.99",
    uniqueID: 436,
}, {
    id: 15,
    title: "Uzumaki",
    volume: "2",
    author: "Itou Junji",
    image: "uzumaki2.jpg",
    price: "13.99",
    uniqueID: 436,
}, {
    id: 16,
    title: "Uzumaki",
    volume: "3",
    author: "Itou Junji",
    image: "uzumaki3.jpg",
    price: "12.99",
    uniqueID: 436,
}, {
    id: 17,
    title: "Stargazing Dog",
    volume: "1",
    author: "Murakami Takashi",
    image: "stargazingDog1.jpg",
    price: "12.99",
    uniqueID: 21467,
}, {
    id: 18,
    title: "Stargazing Dog",
    volume: "2",
    author: "Murakami Takashi",
    image: "stargazingDog2.jpg",
    price: "14.99",
    uniqueID: 21467,
}];
