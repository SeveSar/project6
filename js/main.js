let itemsHover = document.querySelectorAll('.category__menu > .category__menu-item');
let categoryListItem = document.querySelector('.category__menu');
let categoryLinksItems = document.querySelectorAll('.category__menu > .category__menu-item > .category__menu-link');
categoryListItem.addEventListener('click', (e) => {
    let eventTarget = e.target;
    if (eventTarget && eventTarget.classList.contains('category__menu-link')) {
        categoryLinksItems.forEach((item,i) => {
            e.preventDefault();
            if (eventTarget == item) {
                let dropDownMenu = item.closest('.category__menu-item').querySelector('.dropdown__menu');
                if (dropDownMenu) {
                    item.classList.toggle('is-active');
                    if (dropDownMenu.style.maxHeight) {
                        dropDownMenu.style.maxHeight = null;
                        dropDownMenu.style.overflow = "hidden";
                    } else {
                        dropDownMenu.style.maxHeight = dropDownMenu.scrollHeight + "px";
                        setTimeout(function() {
                            dropDownMenu.style.overflow = "visible";
                        }, 100);
                    }
                }
            }
        });
    }
});




// SWIPER SLIDER
let slides = document.querySelectorAll(".swiper-container");
console.log(slides);
slides.forEach((el) => {
    console.log(el);
    let mySwiper = new Swiper(el, {
        // Optional parameters
        slidesPerView: 1,

        // If we need pagination
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        }

        // And if we need scrollbar

    });

});

// TREANDS-CATALOG
let treandsNavArea = document.querySelector('.treands__nav');
let treandsBtns = document.querySelectorAll('.treands__nav-link');
let productItems = document.querySelectorAll('.treands__col .product');

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
            item.closest('.treands__col').style.display = "block";
        });
    } else {
        productItems.forEach((item) => {
            if (dataTarget != item.getAttribute('data-target')) {
                item.closest('.treands__col').style.display = 'none'
            } else {
                item.closest('.treands__col').style.display = 'block'
            }
        });
    }
}
treandsBtns[0].classList.add('active');