const toggler = document.querySelector('.dropdown-menu');
const ProductArray = ['Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Permeability Tester', 'Core Cutter Apparatus', 'Sieve Shaker Hand Operated', 'Pocket Penetrometer', 'Automatic Soil Compaction'];
let filteredArray = new Set();
const searchBarContent = document.querySelector('#searchBar');

let counter = 0;
const itemHTML = (item) => `<li class="dropdown-item_${counter}">${item}</li>`;

let pressThis = document.querySelector('.ThisButton');
searchBarContent.addEventListener('keyup', (e = '') => {

    filteredArray.clear();
   
    let query = e.target.value;
    console.log(query);
    if (query.length === 0) {
        filteredArray.clear();
    }
    
    else {
        toggler.style.display="block";

        ProductArray.map((product) => {
            if (product.toLowerCase().includes(query.toLowerCase()) ) {
                filteredArray.add(product);
            }
        }).join('');
    }
renderer();

    console.log(filteredArray);
})
function renderer(){
    let renderHTML = ``;
    filteredArray.forEach((product) => {
        renderHTML += itemHTML(product);

        counter++;
    console.log(product);

    })
    toggler.innerHTML = renderHTML;

} 
// TODO: create DOM element for each item in the filteredArray
// TODO: append each item to the DOM
// TODO: add event listener to each item in the DOM
//TODO: when an item is clicked, add it to the Quotation cart
// TODO: create a function that will add the item to the cart
// TODO: create a function that will remove the item from the cart
// TODO: Add event listener to the cart button