const toggler = document.querySelector('.dropdown-menu');
const ProductArray = ['Permeability Tester','Core Cutter Apparatus','Sieve Shaker Hand Operated', 'Pocket Penetrometer','Automatic Soil Compaction'];
toggler.innerHTML = `${ProductArray.map(product => `<li><a class="dropdown-item" href="#">${product}</a></li>`).join('')}`;;

// TODO: Add autocomplete to the search bar
