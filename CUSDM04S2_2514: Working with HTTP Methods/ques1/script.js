const categorySelect = document.getElementById('category');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const searchBtn = document.getElementById('searchBtn');
const productsDiv = document.getElementById('products');
const statusDiv = document.getElementById('status');
const BASE_URL = 'https://mockapi.io/products';
searchBtn.addEventListener('click', () => {
  fetchProducts();
});
async function fetchProducts() {
  const category = categorySelect.value;
  const minPrice = minPriceInput.value;
  const maxPrice = maxPriceInput.value;
  statusDiv.textContent = 'Loading...';
  productsDiv.innerHTML = '';
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (minPrice) params.append('min_price', minPrice);
  if (maxPrice) params.append('max_price', maxPrice);
  params.append('sort', 'asc');
  const url = `${BASE_URL}?${params.toString()}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    if (products.length === 0) {
      statusDiv.textContent = 'No products found.';
      return;
    }
    renderProducts(products);
    statusDiv.textContent = '';
  } catch (error) {
    statusDiv.textContent = `Error: ${error.message}`;
  }
}
function renderProducts(products) {
  productsDiv.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image || 'https://via.placeholder.com/200'}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    </div>
  `).join('');
}
