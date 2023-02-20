import { taoDoiTuongCartItem } from "./cart.js";
import { addToCart, renderProduct } from "./controller.js";

// BASE URL API lấy từ MockAPI
const BASE_URL = "https://63e61ead7eef5b22337f3e1f.mockapi.io";

// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Lớp dối tượng Products
class Products {
  constructor(
    _id,
    _name,
    _price,
    _screen,
    _backCamera,
    _frontCamera,
    _img,
    _desc,
    _type
  ) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.screen = _screen;
    this.backCamera = _backCamera;
    this.frontCamera = _frontCamera;
    this.img = _img;
    this.desc = _desc;
    this.type = _type;
  }
}

// Tạo mảng productList
let productList = [];
// Tạo mảng cart
let cartElement = [];

// Hiển thị danh sách sản phẩm cho khách hàng
axios({
  url: `${BASE_URL}/Phones`,
  method: "GET",
})
  .then((res) => {
    productList = res.data;

    console.log(productList);

    // In sản phẩm ra giao diện
    renderProduct(productList);

    // Thêm sản phẩm vào biến cart
    addToCart(productList);
  })
  .catch((err) => {
    console.log(err);
  });
