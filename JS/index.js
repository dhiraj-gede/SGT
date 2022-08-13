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
