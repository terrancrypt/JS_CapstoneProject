export function taoDoiTuongCartItem (id, soluong){
    let cartItem = new Object;
    cartItem.id = id;
    cartItem.soluong = soluong;
    return cartItem;
}