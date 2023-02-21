import { cartElement, DSSP } from "./index.js";

export function renderProduct(productList) {
  let contentHTML = "";
  productList.forEach((item) => {
    let content = `
        <div class="col-3">
        <div class= "product-box">
                <img src="${item.img}" />
                <span class="product-type">${item.type}</span>
                <h2 class="product-title">${item.name}</h2>
                <span class="product-price">$${item.price}</span>
                <button id="addCart">
                    <i class="fa fa-shopping-bag"></i>
                </button>
                </div>
            </div>
        `;
    contentHTML += content;
  });
  document.querySelector(".shop-content").innerHTML = contentHTML;
}

export function addToCart(productList) {
  let cartItem = {
    product: "",
    quantity: "",
  };
  let btns = document.querySelectorAll("#addCart");
  btns.forEach((item, id) => {
    item.addEventListener("click", () => {
      cartItem.product = productList[id];
      const curentProduct = productList[id];

      const index = cartElement.findIndex(
        (item) => item.id == curentProduct.id
      );

      if (index === -1) {
        const newProductToCart = { ...curentProduct };
        newProductToCart["quantity"] = 1;
        cartElement.push(newProductToCart);
      } else {
        cartElement[index].quantity += 1;
      }

      //   Render giỏ hàng ra màn hình
      renderCart(cartElement);

      //   Tăng giảm số lượng trong cart
      upCartItem(cartElement);
      downCartItem(cartElement);

      // Lưu cartElement vào LocalStorage
      let cartElementJson = JSON.stringify(cartElement);
      localStorage.setItem(DSSP, cartElementJson);
    });
  });
}

export function renderCart(cartElement) {
  let contentHTML = "";
  let total = 0;
  let total1Product = 0;
  cartElement.forEach((item) => {
    let content = `
        <div class="cart-box">
                        <img class="cart-img"
                            src="${item.img}" />
                        <div class="detail-box">
                            <div class="cart-product-title">${item.name}</div>
                            <div class="cart-price">$${item.price}</div>
                            <div>
                            <i class="btn btn-danger fa fa-angle-left quantity-down"></i>
                            <span class="cart-quantity"/>${item.quantity}</span>
                            <i class="btn btn-success fa fa-angle-right quantity-up"></i>
                            </div>
                        </div>
                        <!-- REMOTE CART -->
                        <i class="fa fa-trash cart-remove"></i>
                    </div>
        `;
    contentHTML += content;
    total1Product = item.price * item.quantity;
    total += total1Product;
  });
  document.querySelector(".cart-content").innerHTML = contentHTML;
  document.querySelector(".total-price").innerHTML = total;
}

function upCartItem(cartEle) {
  let btns = document.querySelectorAll(".quantity-up");
  let cartQuantity = document.querySelectorAll(".cart-quantity");
  btns.forEach((item, id) => {
    item.addEventListener("click", () => {
      let currentProduct = cartEle[id];
      currentProduct.quantity += 1;
      cartQuantity[id].innerHTML = currentProduct.quantity;
    });
  });
}

function downCartItem(cartEle) {
  let btns = document.querySelectorAll(".quantity-down");
  let cartQuantity = document.querySelectorAll(".cart-quantity");
  btns.forEach((item, id) => {
    item.addEventListener("click", () => {
      let currentProduct = cartEle[id];
      currentProduct.quantity -= 1;
      cartQuantity[id].innerHTML = currentProduct.quantity;
    });
  });
}
