document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử HTML cần thiết
    var modal = document.querySelector(".canvas-customer-login");
    var modalMenu = document.querySelector(".header-canvas-menu");
    var btn = document.querySelector(".header-account");
    var overLay = document.querySelector(".header-overlay");
    var btnClose = document.querySelector(".close");
    var btnClose2 = document.querySelector(".header-overlay");

    // Xử lý sự kiện khi người dùng nhấp vào nút mở cửa sổ đăng nhập
    btn.addEventListener("click", function () {
        modal.style.right = "0";
        overLay.style.display = "block";
    });

    // Xử lý sự kiện khi người dùng nhấp vào nút đóng cửa sổ đăng nhập
    btnClose.addEventListener("click", function () {
        modal.style.right = "-500px";
        overLay.style.display = "none";
    });

    // Xử lý sự kiện khi người dùng nhấp vào nút đóng cửa sổ đăng nhập hoặc nền đen mờ
    btnClose2.addEventListener("click", function () {
        modal.style.right = "-500px";
        overLay.style.display = "none";
    });

    // Xử lý slideshow
    var slideIndex = 0;
    var timeout;

    showSlides();

    function showSlides() {
        var i;
        var slides = document.querySelectorAll(".slide");
        var dots = document.querySelectorAll(".dot");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(showSlides, 3000); // Đổi ảnh mỗi 3 giây
    }

    // Xử lý sự kiện khi người dùng nhấp vào các dot
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            slideIndex = index;
            showSlides();
        });
    });

    // Phần phân trang
    var productList = document.querySelector(".list-products");
    var pageButtons = document.querySelectorAll(".page-btn");

    var productsPerPage = 8;
    var currentPage = 1;
    var totalProducts = productList.children.length;
    var totalPages = Math.ceil(totalProducts / productsPerPage);

    showPage(currentPage);

    // Xử lý sự kiện khi người dùng nhấp vào nút phân trang
    pageButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            if (index === 0) {
                if (currentPage > 1) {
                    currentPage--;
                }
            } else if (index === pageButtons.length - 1) {
                if (currentPage < totalPages) {
                    currentPage++;
                } else if (currentPage === totalPages && totalProducts % productsPerPage !== 0) {
                    totalProducts = productList.children.length;
                    totalPages = Math.ceil(totalProducts / productsPerPage);
                    totalPages++;
                    currentPage = totalPages;
                }
            } else {
                currentPage = index;
            }
            showPage(currentPage);
        });
    });

    // Hiển thị sản phẩm trên trang cụ thể
    function showPage(page) {
        for (var i = 0; i < totalProducts; i++) {
            productList.children[i].style.display = "none";
        }

        var startIndex = (page - 1) * productsPerPage;
        var endIndex = Math.min(startIndex + productsPerPage, totalProducts);

        for (var i = startIndex; i < endIndex; i++) {
            productList.children[i].style.display = "block";
        }

        pageButtons.forEach(function (button, index) {
            var buttonPage = parseInt(button.getAttribute("data-page"));
            if (buttonPage === page) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        pageButtons.forEach(function (button, index) {
            if (index === 0 && currentPage === 1) {
                button.style.display = "none";
            } else if (index === pageButtons.length - 1 && currentPage === totalPages) {
                button.style.display = "none";
            } else if (index === currentPage) {
                button.classList.add("active");
            } else {
                button.style.display = "inline";
                button.classList.remove("active");
            }
        });
    }
});
