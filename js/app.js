const getProductItem = () =>{
    const products = getCart();
    for(const name in products){
      console.log(name);
        getProduct(name);
    }

}

  const addProduct = () => {
      const product = document.getElementById('product-name');
      const name = product.value;
      if(!name){
          return;
      }
          getProduct(name);
          getItem(name);
      product.value='';
  }
  const getProduct = (name) => {
      const ul = document.getElementById('productList');
      const li = document.createElement('li');
      li.innerText=name;
      ul.appendChild(li);
  }
const getCart = () => {
const cart = localStorage.getItem('cart');
let cartObj;
if(cart){
   cartObj = JSON.parse(cart);
}
else{
   cartObj = {}; 
}
return cartObj;
}
const getItem = name =>{
const cart = getCart();
console.log(cart);

if(cart[name]){
cart[name] = cart[name] + 1;
}
else{
cart[name] = 1;
}
console.log(cart);

const stringyf = JSON.stringify(cart);
localStorage.setItem('cart',stringyf);
//  console.log(stringyfy);
}
const placeOrder = () =>{
document.getElementById('productList').textContent='';
localStorage.removeItem('cart');
}
getProductItem(); 