let filteredProducts = [];

// Get the form and input element
const filterFormText = document.getElementById('filterFormText');
const formInput = document.getElementById('filterByNameInput');

// Function to filter array by Input
function filterByInput(value) {
    value = (value.toLowerCase()).replace(/ /g,''); // Quito los espacios en blanco y las mayusculas
    filteredProducts = products.filter(function( item ) {
        let typeConditionClean = ((item.type).toLowerCase()).replace(/ /g,'') //without spaces and upper
        let specificationConditionClean = ((item.specification).toLowerCase()).replace(/ /g,'') //without spaces and upper
        let bothCondition = typeConditionClean + specificationConditionClean;
        if(value == '') {
            return products;
        } else if (bothCondition.includes(value)) {
            return item
        };
    });
    renderProducts(filteredProducts);
}

filterFormText.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get the entered property value
    const userInput = formInput.value;
    
    // Filter the array based on the entered property
    filterByInput(userInput);
});

// filtrar por categorias
