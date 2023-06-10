const cartBtn = document.querySelector('.items__cart');
const cartModalContainer = document.querySelector('.cart-modal');

cartBtn.addEventListener('click', () => {
    cartModalContainer.classList.toggle('hidden-cart');
})

// RENDER PRODUCTS LIST

const productItem = document.querySelector('.products__grid-container');

function renderProducts(){
    products.forEach((product) => {
        productItem.innerHTML += `
            <div class="products__grid-item"> 
                <p> ${product.type} ${product.specification}</p> 
                <img class="products__grid-item--img" src="${product.img}"> 
                <div class="products__grid-item--price"> 
                    <button onclick="addToCart(${product.id})">Agregar</button> 
                    <p> $ ${product.price}</p> 
                </div> 
            </div>`                    
        });
}

renderProducts();

// Cart Array
let cart = [];

function addToCart(id) {

    const item = products.find((product) => product.id === id);

    if(cart.some(item => item.id === id)){
        alert('Ya existe en el carrito');
    } else {
        cart.push({...item, qty: 1});
    }
    
    updateCart();
}

// UPDATE CART

function updateCart() {
    renderCartItems();
    renderSubtotal();
}

// RENDER CART ITEMS
const cartItem = document.querySelector('.cart-modal__container');

function renderCartItems() {
    cartItem.innerHTML = ` `
    cart.forEach((item) => {
        let totalPerItem = item.qty*item.price;
        cartItem.innerHTML += `
            <div class="cart-modal__details-container">
                <img src="${item.img}" class="cart-modal__img" alt="">
                <div class="cart-modal__product-description">
                    <p class="cart-modal__product">${item.type} ${item.specification}</p>
                    <p class="cart-modal__price">$ ${item.price} x${item.qty} <span>$${totalPerItem}</span></p>
                    <div class="cart-modal__qty-container">
                        <div class="cart-modal__qty-btn" onclick="changeItemQty('minus',${item.id})">-</div>
                        <div class="cart-modal__product--qty">${item.qty}</div>
                        <div class="cart-modal__qty-btn" onclick="changeItemQty('plus',${item.id})">+</div>  
                    </div>
                </div>
                <img class="cart-modal__discard-bin" src="./images/contenedor-de-basura.png" alt="">
                
            </div>
        `
    })
}

// ADD FUNCTIONALITY FOR PLUS AND MINUS BTN
function changeItemQty(operation, id) {
    cart = cart.map ((item) => {
        if(item.id === id) {
            if(operation === 'minus' & item.qty >1 ) {
                item.qty--;
            } else if (operation === 'plus'){
                item.qty++;
            }
        }
        return item;
    })
    updateCart();
}

// RENDER SUBTOTAL

const cartSubtotal = document.querySelector('.cart-modal__container');

function renderSubtotal() {

}



/*
let producto;
let precioTotal = 0;
let totalEnCuotas = 0;
let cuotaActual = 0;
let cantidadCuotas;

ingresarProducto();

function ingresarProducto(){
    producto = prompt('Ingrese el producto que desee adquirir (1: Inyector, 2: Bomba, 3: Sensor)');
    selectorCuotas();
}

function selectorCuotas () {
    
    switch (producto) {
        case '1':
            cantidadCuotas = prompt('El precio de su inyector en 1 pago es de $125.354, eliga la cantidad de cuotas: ');
            precioTotal = 125354; 
            break;
        case '2':
            cantidadCuotas = prompt('El precio de su bomba en 1 pago es de $540.350, eliga la cantidad de cuotas: ');
            precioTotal = 540350;
            break
        case '3':
            cantidadCuotas = prompt('El precio de su Sensor en 1 pago es de $35.690, eliga la cantidad de cuotas: ');
            precioTotal = 35690;
            break;
        default:
            ingresarProducto();
            break;
    }

    //verifico que la cantidad ingresada sea mayor o igual a cero
    if(parseInt(cantidadCuotas)>0){
        calcularPago()
    } else {
        ingresarProducto();
    }
    
} 

function calcularPago(){
    //Calculo el valor de la cuota sin intereses
    cuotaActual = precioTotal/cantidadCuotas;
    //En cada cuota se hará un recargo del 5% respecto de la cuota anterior.
    for(let i=0;i<cantidadCuotas;i++){
        cuotaActual *= 1.05;
        console.log('La cuota ', i+1, 'será de:', cuotaActual.toFixed(2));
        totalEnCuotas += cuotaActual;
    }
    console.log('El total a abonar en cuotas será de: ', totalEnCuotas.toFixed(2), 'en 1 cuota sería de:', precioTotal.toFixed(2));
    console.log('Realizando el pago en 1 cuota se ahorraría:', (totalEnCuotas - precioTotal).toFixed(2))
}
 

*/
