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
    quantity: "1",
  };
  let btns = document.querySelectorAll("#addCart");
  console.log(btns);
  btns.forEach((item, index) => {
    item.addEventListener("click", () => {
        cartItem.product = productList[index];
        console.log(cartItem);
    });
  });
};
