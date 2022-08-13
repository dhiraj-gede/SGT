const toggler = document.querySelector('.dropdown-menu');
const ProductArray = ['Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Permeability Tester','Core Cutter Apparatus','Sieve Shaker Hand Operated', 'Pocket Penetrometer','Automatic Soil Compaction'];
let filteredArray = [];
const searchBarContent= document.querySelector('#searchBar');
// for(let i=0; i<ProductArray.length; i++){
//     let inputText='';
//     searchBarContent.addEventListener('keyup', function(e){
//         inputText=e.target.value.toLowerCase();
//         console.log(e.target.value);
//         if(e.target.value===ProductArray[i].toLowerCase()){
//             filteredArray.push(ProductArray[i]);
//         }
//     console.log(filteredArray);

        
//     });
// }


searchBarContent.onkeyup=(e)=>{
    filterBySearch(e.target.value);
};
let counter = 0;
const itemHTML = (item)=>`<li class="dropdown-item_${counter}">${item}</li>`;

const filterBySearch = (query= '')=>{
    if(query.length===0){
        toggler.style.display="none";
    }
    else{
        toggler.style.display="block";
        
    }
    let renderHTML = ``;
    ProductArray.forEach((product)=>{
        if(product.toLowerCase().includes(query.toLowerCase())){
            filteredArray.push(product);
            renderHTML += itemHTML(product);
            counter++;
        }
        
    })
    toggler.innerHTML = renderHTML;
}

filterBySearch();
let pressThis = document.querySelector('.ThisButton');
pressThis.addEventListener('click', (e)=>{
    console.log(filteredArray);
})
