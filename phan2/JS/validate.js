let validateInput = (product) => {
  product = getFormValue();

  console.log(product);

  let isValid = true;

  isValid = kiemTraSo(product.giaSP, "spanPrice", "Số tiền không hợp lệ!");

  isValid =
    isValid & kiemTraChuoi(product.tenSP, "spanName", "Tên không hợp lệ!");

  isValid =
    isValid & kiemTraUrl(product.hinhSP, "spanImage", "Url không hợp lệ!");

  return isValid;
};

function kiemTraSo(value, idSpan, alert) {
  var reg =  /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
  var isNumber = reg.test(value);
  if (isNumber) {
    document.getElementById(idSpan).innerText = "";
    return true;
  } else {
    document.getElementById(idSpan).innerText = alert;
    return false;
  }
}

function kiemTraChuoi(value, idSpan, alert) {
  var reg = /^[a-zA-Z ]+$/;
  var isText = reg.test(value);
  if (isText) {
    document.getElementById(idSpan).innerText = "";
    return true;
  } else {
    document.getElementById(idSpan).innerText = alert;
  }
}

function kiemTraUrl(value, idSpan, alert) {
  var expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  var t = value;

  if (t.match(regex)) {
    document.getElementById(idSpan).innerText = "";
    return true;
  } else {
    document.getElementById(idSpan).innerText = alert;
    return false;
  }
}
