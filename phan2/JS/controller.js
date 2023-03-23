function batLoading() {
  document.getElementById("spinner").style.display = "flex";
}

function tatLoading() {
  document.getElementById("spinner").style.display = "none";
}

let turnAddProductButtonOn = () => {
  document.querySelector("#saveProduct").style.display = "block";
  document.querySelector("#updateProduct").style.display = "none";
};

let removeValidateAlert = () => {
  document.getElementById("spanPrice").innerText = "";
};

let removeInputValue = () => {
  document.querySelector("#iSP").value = "";
  document.querySelector("#iName").value = "";
  document.querySelector("#iImage").value = "";
  document.querySelector("#iPrice").value = "";
  document.querySelector("#iDescription").value = "";
};

let putFormValue = (product) => {
  document.querySelector("#iSP").value = product.id;
  document.querySelector("#iName").value = product.tenSP;
  document.querySelector("#iImage").value = product.hinhSP;
  document.querySelector("#iPrice").value = product.giaSP;
  document.querySelector("#iDescription").value = product.motaSP;
};

let getFormValue = () => {
  let ID = document.querySelector("#iSP").value;
  let Name = document.querySelector("#iName").value;
  let Image = document.querySelector("#iImage").value;
  let Price = document.querySelector("#iPrice").value;
  let Desc = document.querySelector("#iDescription").value;

  let data = {
    id: ID,
    tenSP: Name,
    hinhSP: Image,
    giaSP: Price,
    motaSP: Desc,
  };

  return data;
};
