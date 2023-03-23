const BASE_URL = "https://63f47c6855677ef68bbcfaf8.mockapi.io/sanPham";

function fetchFoodList() {
  batLoading();
  axios({
    url: `${BASE_URL}`,
    method: "GET",
  })
    .then((res) => {
      renderProducts(res.data);
      tatLoading();
    })
    .catch((err) => {
      console.log(err);
      tatLoading();
    });
}

fetchFoodList();

let renderProducts = (product) => {
  let contentHTML = "";
  let HTML = document.querySelector(".body__table");

  product.sort().map((item) => {
    contentHTML += `
    <tr>
        <td>${item.id}</td>
        <td>
        <img style='width: 50px' src='${item.hinhSP}'/></td>
        <td style="color: black; font-weight: bold"> ${item.tenSP}</td>
        <td>${item.giaSP}</td>
        <td>${item.motaSP}</td>
        <td><button class="btn btn-success" onclick="editProduct(${item.id})"><i class="fa fa-edit"></i></button>
        <button class="btn btn-danger" onclick='deleteProduct(${item.id})'><i class="fa fa-trash"></i></button></td>
      </tr>
        `;
  });
  document.querySelector(".body__table").innerHTML = contentHTML;
};

let addProducts = () => {
  let dataInput = getFormValue();

  let validate = validateInput(dataInput);
  console.log(validate);

  if (validate) {
    batLoading();
    axios({
      url: `${BASE_URL}`,
      method: "POST",
      data: dataInput,
    })
      .then((res) => {
        $("#exampleModal").modal("hide");
        fetchFoodList();
        removeInputValue();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

let deleteProduct = (id) => {
  batLoading();
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

let editProduct = (id) => {
  removeValidateAlert();
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then((res) => {
      $("#exampleModal").modal("show");
      putFormValue(res.data);
      document.querySelector("#saveProduct").style.display = "none";
      document.querySelector("#updateProduct").style.display = "block";
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

let updateProducts = () => {
  let data = getFormValue();
  let dataInput = getFormValue();

  let validate = validateInput(dataInput);
  console.log(validate);

  if (validate) {
    batLoading();
    axios({
      url: `${BASE_URL}/${data.id}`,
      method: "PUT",
      data: data,
    })
      .then((res) => {
        $("#exampleModal").modal("hide");
        a;
        fetchFoodList();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
