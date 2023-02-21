import { addToCart, renderProduct, renderCart } from "./controller.js";

// BASE URL API lấy từ MockAPI
const BASE_URL = "https://63e61ead7eef5b22337f3e1f.mockapi.io";

// Tạo mảng productList
let productList = [];

// Tạo mảng cart
export let cartElement = [];

// Biến lưu lữu Local Storage
export let DSSP = "DSSP";
// Lấy dữ liệu từ Local Storage
export var cartElementJson = localStorage.getItem(DSSP);
if (cartElementJson != null) {
  cartElement = JSON.parse(cartElementJson);
  renderCart();
}

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

// Hiển thị danh sách sản phẩm cho khách hàng
axios({
  url: `${BASE_URL}/Phones`,
  method: "GET",
})
  .then((res) => {
    productList = res.data;

    // In sản phẩm ra giao diện
    renderProduct(productList);

    // Thêm sản phẩm vào biến cart
    addToCart(productList);
  })
  .catch((err) => {
    console.log(err);
  });

export const fetchProductByID = async (id) => {
  try {
    const data = axios({
      url: `${BASE_URL}/Phones/${id}`,
      method: "get",
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
