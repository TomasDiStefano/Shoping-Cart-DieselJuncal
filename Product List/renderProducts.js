const productItem = document.querySelector('.products__grid-container');

function renderProducts(arrayToRender){
    productItem.innerHTML = ``;
    arrayToRender.forEach((product) => {
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

