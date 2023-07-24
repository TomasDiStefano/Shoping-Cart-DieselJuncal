const productItem = document.querySelector('.products__grid-container');
const URL = '../Products/products.json'

async function renderProducts(){
    try {
        let res = await fetch('./Products/products.json');
        const data = await res.json()

        products = data; //Guardo el valor en un arreglo para no acceder a la API cada vez que el usuario aplique un filtro. 
        productItem.innerHTML = ``;
        data.forEach((product) => {
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
    }catch(err) {
        console.log(err);
    }
}

function renderFilteredProducts(arrayToRender) {
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

