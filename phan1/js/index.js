import { renderProducts } from "./controller.js";
import { Products } from "./model.js";

const BASE_URL = "https://63e61ead7eef5b22337f3e1f.mockapi.io";

let fetchProductList = () =>{
    axios({
        url: `${BASE_URL}/Phones`,
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          renderProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

}
fetchProductList();



// let products = new Products(
//   data.id,
//   data.name,
//   data.price,
//   data.screen,
//   data.backCamera,
//   data.frontCamera,
//   data.img,
//   data.desc,
//   data.type
// );

// console.log(products);
