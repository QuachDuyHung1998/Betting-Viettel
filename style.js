//Xử lí sự kiện khi chọn option language
var dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function(item) {
    item.addEventListener('click', function (e) {
        var selectedLanguage = this.textContent.trim().substr(0, 3); // Lấy nội dung của option đã chọn và chỉ lấy 3 ký tự đầu
        var dropdownToggle = this.closest('.dropdown').querySelector('.dropdown-toggle');
        var iconHTML = this.querySelector('i').outerHTML; // Lấy HTML của thẻ i
        dropdownToggle.innerHTML = iconHTML + selectedLanguage; // Cập nhật nội dung của dropdown-toggle
    });
});

//swiper
new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

new Swiper(".entertainmentSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".swiper-button-prev",
    },
});

new Swiper(".mySwiper1", {
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Thiết lập cho màn hình nhỏ hơn hoặc bằng 768px
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        // Thiết lập cho màn hình nhỏ hơn hoặc bằng 992px
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
});

function menuMobile() {
    document.getElementById("mobileMenu").classList.add('active');
    document.getElementsByClassName("opacity_menu")[0].classList.add('active');
}
function closeMobile() {
    document.getElementById("mobileMenu").classList.remove('active');
    document.getElementsByClassName("opacity_menu")[0].classList.remove('active');
}