export let renderProducts = (Arr) => {
  let contentHTML = "";
  Arr.forEach((item) => {
    let contentDiv = `
    <div class="col-3">
                <div class="layout__items">
                    <div class="layout__img">
                        <img
                            src="${item.img}">
                    </div>
                    <div class="layout__text">
                        <p class="item__type">${item.type}</p>
                        <p class="item__name">${item.name}</p>
                        <p class="item__price">${item.price}</p>
                        <p class="item__desc">${item.desc}</p>
                        <div class="layout__hidden">
                            <p class="item__screen">${item.screen}</p>
                            <p class="item__backCamera">${item.backCamera}</p>
                            <p class="item__frontCamera">${item.frontCamera}</p>
                            <button class="btn btn-success">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
    contentHTML += contentDiv;
  });
  document.getElementById('productList').innerHTML = contentHTML;
};
