// slideshow
let slideIndex = 0;
let timeout;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    if (timeout) {
        clearTimeout(timeout); // Xóa timeout hiện tại
    }

    timeout = setTimeout(showSlides, 3000); // Đổi ảnh mỗi 2 giây
}

// Xử lý sự kiện khi người dùng nhấp vào dot
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        slideIndex = i;
        showSlides();
    });
}
// phân trang
// Lấy danh sách sản phẩm, nút phân trang và nút mũi tên
const productList = document.querySelector('.list-products');
const pageButtons = document.querySelectorAll('.page-btn');
const prevPageButton = document.getElementById('prev-page-btn');
const nextPageButton = document.getElementById('next-page-btn');

// Số sản phẩm trên mỗi trang
const productsPerPage = 8;
let currentPage = 1;

// Tính số lượng trang dựa trên số sản phẩm và sản phẩm trên mỗi trang
let totalProducts = productList.children.length;
let totalPages = Math.ceil(totalProducts / productsPerPage);

// Hiển thị sản phẩm trên trang đầu tiên khi trang web được tải
showPage(currentPage);

// Gán sự kiện click cho nút phân trang
pageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            // Nút "Trang trước"
            if (currentPage > 1) {
                currentPage--;
            }
        } else if (index === pageButtons.length - 1) {
            // Nút "Trang tiếp theo"
            if (currentPage < totalPages) {
                currentPage++;
            } else if (currentPage === totalPages && totalProducts % productsPerPage !== 0) {
                // Tạo thêm trang nếu có sản phẩm dư
                totalProducts = productList.children.length;
                totalPages = Math.ceil(totalProducts / productsPerPage);
                totalPages++;
                currentPage = totalPages;
            }
        } else {
            // Nút trang
            currentPage = index;
        }
        showPage(currentPage);
    });
});

// Hiển thị sản phẩm trên trang cụ thể và ẩn sản phẩm dư
function showPage(page) {
    // Ẩn tất cả sản phẩm
    for (let i = 0; i < totalProducts; i++) {
        productList.children[i].style.display = 'none';
    }

    // Tính chỉ mục sản phẩm bắt đầu và kết thúc cho trang hiện tại
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

    // Hiển thị sản phẩm trên trang hiện tại
    for (let i = startIndex; i < endIndex; i++) {
        productList.children[i].style.display = 'block';
    }
    // Đổi màu nút phân trang
    pageButtons.forEach((button) => {
        const buttonPage = parseInt(button.getAttribute('data-page'));
        if (buttonPage === page) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    // Đánh dấu trạng thái của nút phân trang
    pageButtons.forEach((button, index) => {
        if (index === 0 && currentPage === 1) {
            // Ẩn nút "Trang trước" khi ở trang đầu
            button.style.display = 'none';
        } else if (index === pageButtons.length - 1 && currentPage === totalPages) {
            // Ẩn nút "Trang tiếp theo" khi ở trang cuối
            button.style.display = 'none';
        } else if (index === currentPage) {
            // Đánh dấu trang hiện tại
            button.classList.add('active');
        } else {
            button.style.display = 'inline';
            button.classList.remove('active');
        }
    });
}





