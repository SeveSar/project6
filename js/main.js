let itemsHover = document.querySelectorAll('.category__menu > .category__menu-item');

// let dropDownMenu = document.querySelector('.dropdown__menu');
itemsHover.forEach(function(item) {
    let dropwDownMenu = item.querySelector('.dropdown__menu');
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if (dropwDownMenu) {
            dropwDownMenu.closest('li').querySelector('.category__menu-link').classList.toggle('is-active');
            dropwDownMenu.classList.toggle('active');
            setTimeout(function() {
                if (dropwDownMenu.style.maxHeight) {
                    dropwDownMenu.style.maxHeight = null;
                } else {
                    dropwDownMenu.style.maxHeight = dropwDownMenu.scrollHeight + "px";
                }
                
            }, 200)
            
            
        }
    });
    
});

let a = 1,
    b = 2;

let c = a++ + b++;
console.log(a,b);