function filterResults() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();

    var galleryContainer = document.getElementById('galleryContainer');
    var products = galleryContainer.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.getAttribute('data-name').toLowerCase();
        var productCategory = product.getAttribute('data-category').toLowerCase();

        // Check if the product name contains the search input and matches the selected category
        var showProduct = productName.includes(searchInput) &&
                          (categoryFilter === 'all' || productCategory === categoryFilter);

        // Toggle the display property based on the filtering conditions
        product.style.display = showProduct ? 'block' : 'none';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Check if product is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add scroll event listener to each product
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        window.addEventListener('scroll', function() {
            if (isInViewport(product)) {
                product.classList.add('visible');
            }
        });
    });
});
function searchProducts() {
    // Lấy giá trị từ ô tìm kiếm
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Thực hiện tìm kiếm và hiển thị kết quả
    var searchResultsContainer = document.getElementById("galleryContainer");
    searchResultsContainer.innerHTML = ""; // Xóa nội dung trước đó

    // Giả sử có một danh sách sản phẩm (mỗi sản phẩm là một đối tượng)
    var products = [
        { name: "sen", image: "images/SenHong.jpg"},
        { name: "sen", image: "images/SenTrang.jpg"},
        { name: "sen", image: "images/SenXanh.jpg"},
        { name: "hue", image: "images/CamHueTrang.jpg" },
        { name: "hue", image: "images/HueTrang.jpg" },
        { name: "linh lan", image: "images/LinhLanHong.webp" },
        { name: "linh lan", image: "images/LinhLanXanh.webp" },
        { name: "linh lan", image: "images/LinhLanTrang.webp" },
        { name: "sen hong", image: "images/SenHong.jpg"},
        { name: "sen trang", image: "images/SenTrang.jpg"},
        { name: "sen xanh", image: "images/SenXanh.jpg"},
        { name: "hue cam trong binh", image: "images/CamHueTrang.jpg" },
        { name: "hoa hue", image: "images/HueTrang.jpg" },
        { name: "linh lan hong", image: "images/LinhLanHong.webp" },
        { name: "linh lan xanh", image: "images/LinhLanXanh.webp" },
        { name: "linh lan trang", image: "images/LinhLanTrang.webp" },
        // ...Thêm sản phẩm khác vào đây
    ];

    // Lọc sản phẩm theo từ khóa tìm kiếm
    var filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchTerm);
    });

    // Hiển thị kết quả
    filteredProducts.forEach(function (product) {
        var productElement = document.createElement("div");
        productElement.classList.add("product-item");
        productElement.innerHTML = `<img src="${product.image}" alt="${product.name}"><p>${product.name}</p>`;
        searchResultsContainer.appendChild(productElement);
    });
}
