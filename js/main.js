let itemsHover = document.querySelectorAll('.category__menu > .category__menu-item');
let categoryListItem = document.querySelector('.category__menu');
let categoryLinksItems = document.querySelectorAll('.category__menu > .category__menu-item > .category__menu-link');
let categoryImgItems = document.querySelectorAll('.category__menu-image');

categoryListItem.addEventListener('click', (e) => {
    e.preventDefault();
    let eventTarget = e.target;
    if (eventTarget && eventTarget.classList.contains("category__menu-link") || eventTarget.classList.contains("category__menu-image")) {
        dropDownShow(categoryLinksItems, eventTarget);
        dropDownShow(categoryImgItems, eventTarget);
    }
});

function dropDownShow (links, eventTarget) {
    links.forEach((item,i) => {
        if (eventTarget == item) {
            let dropDownMenu = item.closest('.category__menu-item').querySelector('.dropdown__menu');
            if (dropDownMenu) {
                categoryLinksItems[i].classList.toggle('is-active');
                if (dropDownMenu.style.maxHeight) {
                    dropDownMenu.style.maxHeight = null;
                } else {
                    dropDownMenu.style.maxHeight = dropDownMenu.scrollHeight + "px";
                }
            }
        }
    });
}

// SWIPER SLIDER

let slides = document.querySelectorAll('.swiper-container');

slides.forEach((el) => {
    let mySwiper = new Swiper(el, {
        // Optional parameters
        slidesPerView: 1,
        // If we need pagination
        loop: false,
        // Navigation arrows
        navigation: {
          nextEl: el.closest('[data-slider]').querySelector('.swiper-button-next'),
          prevEl: el.closest('[data-slider]').querySelector('.swiper-button-prev'),
        },
        // And if we need scrollbar

    });

});
let mySwiper2 = new Swiper('.swiper-container1', {
    // slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        1587: {
            slidesPerView: 5,
        },
        1330: {
            slidesPerView: 4,
        },
        830: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        },

    }

});
let mySwiper3 = new Swiper('.swiper-container2', {
    // slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        830: {
            slidesPerView: 3,
        },
        1330: {
            slidesPerView: 4,
        },
        1587: {
            slidesPerView: 5,
        }
    }

});

let mySwiper4 = new Swiper('.swiper-container3', {
    // slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        830: {
            slidesPerView: 3,
        },
        1330: {
            slidesPerView: 4,
        },
        // 1585: {
        //     slidesPerView: 5,
        // },
        1619: {
            slidesPerView: 4,
        },

    }

});
let mySwiper5 = new Swiper('.swiper-container4', {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
        1591: {
            slidesPerView: 4
        },
        1360: {
            slidesPerView: 3
        },
        831: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        540: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        }




    }

});
let mySwiper6 = new Swiper('.swiper-container5', {
    slidesPerView: 5,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    breakpoints: {
        1400: {
            slidesPerView: 6
        },
        1300: {
            slidesPerView: 5
        },
        800: {
            slidesPerView: 4
        },
        600: {
            slidesPerView: 3
        },
        430: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        }

    }

});
let mySwiper7 = new Swiper('.swiper-container6', {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
    breakpoints: {

        1600: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        }

    }

});
// TREANDS-CATALOG
let treandsNavArea = document.querySelector('.treands__nav');
let treandsBtns = document.querySelectorAll('.treands__nav-link');
let productItems = document.querySelectorAll('.treands__col .product');
let swiperSlides = document.querySelectorAll('.swiper-container1 .swiper-slide');

treandsNavArea.addEventListener('click', function(event) {
    let eventTarget = event.target;
    treandsBtns.forEach(function(item, i) {
        if (eventTarget && eventTarget == item) {
            event.preventDefault();
            hideContent();
            showContent(i, item.getAttribute('data-target'));

        }
    })
});

function hideContent() {
    treandsBtns.forEach((item) => {
        item.classList.remove('active');
    });
}
hideContent();
function showContent(i, dataTarget) {
    treandsBtns[i].classList.add('active');
    if (dataTarget == 'all') {
        productItems.forEach((item) => {
            item.closest('[data-myswiper]').style.display = "block";
            item.closest('[data-myswiper]').classList.add('swiper-slide');
        });
        mySwiper2.update();
        mySwiper3.update();
    } else {
        productItems.forEach((item,i) => {
            if (dataTarget != item.getAttribute('data-target')) {
                item.closest('[data-myswiper]').style.display = 'none'
                item.closest('[data-myswiper]').classList.remove('swiper-slide');
            } else {
                item.closest('[data-myswiper]').style.display = 'block';
                item.closest('[data-myswiper]').classList.add('swiper-slide');
            }
        });
        mySwiper2.update();
        mySwiper3.update();
    }


}
treandsBtns[0].classList.add('active');




// BURGER
let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('_active');
    burgerMenu.classList.toggle('burger-menu_active');
    if (burgerMenu.classList.contains('burger-menu_active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
});


// TABS categorie-products

let categorieList = document.querySelector('.categorie-products__list');
let categoriePorudctsItems = document.querySelectorAll('.categorie-products__catalog .product');
categorieList.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains('categorie-products__list-link')) {
        categoriePorudctsItems.forEach((item, i) => {
            if (e.target.getAttribute('data-tab') != item.getAttribute('data-tab')) {
                item.closest('[data-tabSlide]').classList.add('hide');
                item.closest('[data-tabSlide]').classList.remove('swiper-slide', 'fade' ,'show');

            } else {
                item.closest('[data-tabSlide]').classList.add('show', 'swiper-slide','fade');
                item.closest('[data-tabSlide]').classList.remove('hide');
            }
            mySwiper5.update();
        });

    }

});


// ACTIVE GOLD STARS



// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

//     alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")


