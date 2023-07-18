
const cartBtn = document.querySelector('.items__cart');
const cartModalContainer = document.querySelector('.cart-modal');

cartBtn.addEventListener('click', () => {
    cartModalContainer.classList.toggle('hidden-cart');
})

const cartItemQtyIndicator = document.getElementById("cart-notification");
let cart = localStorage.cartJSON ? JSON.parse(localStorage.cartJSON) : [];

const cartSubtotal = document.querySelector('.cart-modal__buy-container');

function addToCart(id) {

    const item = products.find((product) => product.id === id);

    if(cart.some(item => item.id === id)){
        alert('Ya existe en el carrito');
    } else {
        cart.push({...item, qty: 1});
    }
    
    updateCart();
}

function updateCart() {

    if(cart.length == 0 ){
        cartItemQtyIndicator.style.display = "none";
    } else {
        cartItemQtyIndicator.style.display = "block";
        cartItemQtyIndicator.innerText = cart.length;
    }
    
    let subtotal = 0;

    cart.forEach((item) => {
        subtotal += item.qty * item.price;
    })

    if(subtotal == 0) {
        cartSubtotal.innerHTML = `
            <p class="cart-modal__total-price"><span>Total: </span>$ ${subtotal}</p>
        `;
    } else {
        cartSubtotal.innerHTML = `
            <p class="cart-modal__total-price"><span>Total: </span>$ ${subtotal}</p>
            <button  onclick="endPurchase()" class="cart-modal__buy-button"> Finalizar compra </button>
        `;
    }

    renderCartItems();

    //update Storage
    localStorage.clear();
    localStorage.setItem("cartJSON", JSON.stringify(cart));
}

// RENDER CART ITEMS
const cartItem = document.querySelector('.cart-modal__container');

function renderCartItems() {
    cartItem.innerHTML = ` `
    if(cart.length == 0) {
        cartItem.innerHTML += `<p class="cart-modal__empty empty-hidden"> El carrito esta vacío</p>`
    } else {
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
                    <img class="cart-modal__discard-bin" src="./images/contenedor-de-basura.png" alt="" onclick="deleteItem(${item.id})">
                    
                </div>
            `
        })
    }
}

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

function deleteItem (id) {
    cart = cart.filter(function( item ) {
        return item.id !== id;
    });
    updateCart();
}

function endPurchase() {
    cart = [];
    updateCart();
    localStorage.clear();
}
