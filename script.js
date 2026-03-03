const products = [
  { id: 1, name: "Laptop Lenovo IdeaPad 15 Ryzen 7", priceGTQ: 5499.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", category: "Laptops", rating: 4.7, offer: true },
  { id: 2, name: "Laptop ASUS TUF Gaming F15 RTX 4050", priceGTQ: 8999.0, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", category: "Laptops", rating: 4.8, offer: true },
  { id: 3, name: "Laptop HP Pavilion 14 Intel i5", priceGTQ: 6299.0, image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80", category: "Laptops", rating: 4.6, offer: false },
  { id: 4, name: "Monitor Gamer 27 pulgadas 165Hz", priceGTQ: 2199.0, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", category: "Monitores", rating: 4.7, offer: true },
  { id: 5, name: "Monitor IPS 24 pulgadas FHD", priceGTQ: 1299.0, image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80", category: "Monitores", rating: 4.5, offer: false },
  { id: 6, name: "Teclado Mecanico RGB Red Switch", priceGTQ: 589.5, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80", category: "Perifericos", rating: 4.6, offer: true },
  { id: 7, name: "Mouse Gamer RGB 16000 DPI", priceGTQ: 299.0, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80", category: "Perifericos", rating: 4.4, offer: false },
  { id: 8, name: "Mouse Inalambrico Ergonomico", priceGTQ: 219.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80", category: "Perifericos", rating: 4.3, offer: false },
  { id: 9, name: "Audifonos Bluetooth Noise Cancelling", priceGTQ: 849.0, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", category: "Audio", rating: 4.7, offer: true },
  { id: 10, name: "Headset Gamer 7.1 con Microfono", priceGTQ: 499.0, image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&w=800&q=80", category: "Audio", rating: 4.5, offer: false },
  { id: 11, name: "Disco SSD NVMe 1TB Gen4", priceGTQ: 899.99, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", category: "Almacenamiento", rating: 4.8, offer: true },
  { id: 12, name: "Disco Duro Externo 2TB USB-C", priceGTQ: 699.0, image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9e6?auto=format&fit=crop&w=800&q=80", category: "Almacenamiento", rating: 4.6, offer: false },
  { id: 13, name: "Memoria RAM DDR5 32GB Kit", priceGTQ: 1299.0, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80", category: "Componentes", rating: 4.7, offer: true },
  { id: 14, name: "Tarjeta Grafica RTX 4060 8GB", priceGTQ: 4499.0, image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80", category: "Componentes", rating: 4.9, offer: true },
  { id: 15, name: "Fuente de Poder 750W 80 Plus Gold", priceGTQ: 899.0, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80", category: "Componentes", rating: 4.6, offer: false },
  { id: 16, name: "Camara Web Full HD 60fps", priceGTQ: 399.0, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80", category: "Streaming", rating: 4.5, offer: false },
  { id: 17, name: "Microfono USB Condensador", priceGTQ: 549.0, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80", category: "Streaming", rating: 4.6, offer: true },
  { id: 18, name: "Silla Gamer Ergonomica", priceGTQ: 1799.0, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80", category: "Oficina", rating: 4.4, offer: false },
  { id: 19, name: "Router WiFi 6 Doble Banda", priceGTQ: 999.0, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80", category: "Redes", rating: 4.5, offer: true },
  { id: 20, name: "UPS 1200VA Respaldo de Energia", priceGTQ: 1399.0, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", category: "Redes", rating: 4.6, offer: false }
];

const USD_RATE = 7.8;
let selectedCurrency = "GTQ";
let selectedCategory = "Todos";
let searchText = "";
let cart = [];
let lastReceipt = null;

const productsContainer = document.getElementById("productsContainer");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const currencySelect = document.getElementById("currencySelect");
const themeToggle = document.getElementById("themeToggle");
const paymentForm = document.getElementById("paymentForm");
const paymentMessage = document.getElementById("paymentMessage");
const pdfBtn = document.getElementById("pdfBtn");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModalBtn = document.getElementById("closeModalBtn");
const cartCount = document.getElementById("cartCount");
const categoryChips = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const resultsInfo = document.getElementById("resultsInfo");

function formatCurrency(valueGTQ) {
  if (selectedCurrency === "USD") return "$ " + (valueGTQ / USD_RATE).toFixed(2);
  return "Q " + valueGTQ.toFixed(2);
}

function calculateTotalGTQ() {
  return cart.reduce((sum, item) => sum + item.priceGTQ * item.quantity, 0);
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryOk = selectedCategory === "Todos" || product.category === selectedCategory;
    const text = searchText.toLowerCase();
    const textOk = product.name.toLowerCase().includes(text) || product.category.toLowerCase().includes(text);
    return categoryOk && textOk;
  });
}

function ratingStars(value) {
  const full = Math.round(value);
  return "*".repeat(full) + "-".repeat(5 - full);
}

function renderCategories() {
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];
  categoryChips.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (selectedCategory === cat ? " active" : "");
    btn.type = "button";
    btn.textContent = cat;
    btn.setAttribute("data-cat", cat);
    categoryChips.appendChild(btn);
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productsContainer.innerHTML = "";

  if (!filtered.length) {
    productsContainer.innerHTML = "<p>No se encontraron productos para esa busqueda.</p>";
    resultsInfo.textContent = "0 productos";
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${product.image}" alt="${product.name}" data-id="${product.id}" />
      </div>
      <div class="card-body">
        <div class="badge-row">
          <span class="badge">${product.category}</span>
          ${product.offer ? '<span class="badge offer">Oferta</span>' : ""}
        </div>
        <h3>${product.name}</h3>
        <p class="rating">${ratingStars(product.rating)} (${product.rating.toFixed(1)})</p>
        <p class="price">${formatCurrency(product.priceGTQ)}</p>
        <button class="btn primary" data-add-id="${product.id}">Agregar al carrito</button>
      </div>
    `;

    productsContainer.appendChild(card);
  });

  resultsInfo.textContent = `${filtered.length} productos`;
}

function renderCart() {
  cartList.innerHTML = "";

  if (!cart.length) {
    const li = document.createElement("li");
    li.textContent = "Tu carrito esta vacio.";
    cartList.appendChild(li);
  } else {
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <div>
          <strong>${item.name}</strong><br />
          Cantidad: ${item.quantity}
        </div>
        <div>${formatCurrency(item.priceGTQ * item.quantity)}</div>
      `;
      cartList.appendChild(li);
    });
  }

  cartTotal.textContent = formatCurrency(calculateTotalGTQ());
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });

  paymentMessage.textContent = "";
  pdfBtn.disabled = true;
  renderCart();
}

function validatePayment(event) {
  event.preventDefault();

  if (!cart.length) {
    paymentMessage.textContent = "No hay productos en el carrito.";
    paymentMessage.style.color = "#b91c1c";
    return;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const amountPaidInput = Number(document.getElementById("amountPaid").value);

  const nameOk = fullName.length >= 3;
  const cardOk = /^\d{16}$/.test(cardNumber);
  const cvvOk = /^\d{3}$/.test(cvv);
  const totalGTQ = calculateTotalGTQ();
  const amountPaidGTQ = selectedCurrency === "USD" ? amountPaidInput * USD_RATE : amountPaidInput;
  const amountOk = !Number.isNaN(amountPaidGTQ) && amountPaidGTQ >= totalGTQ;

  if (!nameOk || !cardOk || !cvvOk || !amountOk) {
    paymentMessage.textContent = "Pago invalido. Revisa nombre, tarjeta, CVV y monto entregado.";
    paymentMessage.style.color = "#b91c1c";
    pdfBtn.disabled = true;
    return;
  }

  const changeGTQ = amountPaidGTQ - totalGTQ;
  lastReceipt = {
    date: new Date().toLocaleString("es-GT"),
    customer: fullName,
    items: cart.map((item) => ({ ...item })),
    totalGTQ,
    paidGTQ: amountPaidGTQ,
    changeGTQ
  };

  paymentMessage.textContent = `Pago validado. Cambio: ${formatCurrency(changeGTQ)}`;
  paymentMessage.style.color = "#15803d";
  pdfBtn.disabled = false;
}

function generatePDF() {
  if (!lastReceipt) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text("Recibo - TecnoMarket", 10, 15);
  doc.setFontSize(11);
  doc.text(`Fecha: ${lastReceipt.date}`, 10, 24);
  doc.text(`Cliente: ${lastReceipt.customer}`, 10, 31);

  let y = 42;
  doc.text("Productos:", 10, y);
  y += 7;

  lastReceipt.items.forEach((item) => {
    doc.text(`${item.name} x${item.quantity} - Q ${(item.priceGTQ * item.quantity).toFixed(2)}`, 10, y);
    y += 7;
  });

  y += 4;
  doc.text(`Total: Q ${lastReceipt.totalGTQ.toFixed(2)}`, 10, y);
  y += 7;
  doc.text(`Pagado: Q ${lastReceipt.paidGTQ.toFixed(2)}`, 10, y);
  y += 7;
  doc.text(`Cambio: Q ${lastReceipt.changeGTQ.toFixed(2)}`, 10, y);
  doc.save("recibo_carrito_informatica.pdf");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.textContent = darkMode ? "Modo Claro" : "Modo Oscuro";
}

function openImagePreview(productId) {
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return;
  modalImage.src = product.image;
  modalTitle.textContent = product.name;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImagePreview() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
}

productsContainer.addEventListener("click", (event) => {
  const addId = event.target.getAttribute("data-add-id");
  const imageId = event.target.getAttribute("data-id");
  if (addId) addToCart(Number(addId));
  if (imageId) openImagePreview(imageId);
});

categoryChips.addEventListener("click", (event) => {
  const cat = event.target.getAttribute("data-cat");
  if (!cat) return;
  selectedCategory = cat;
  renderCategories();
  renderProducts();
});

searchInput.addEventListener("input", () => {
  searchText = searchInput.value.trim();
  renderProducts();
});

clearCartBtn.addEventListener("click", () => {
  cart = [];
  lastReceipt = null;
  pdfBtn.disabled = true;
  paymentMessage.textContent = "Carrito vaciado.";
  paymentMessage.style.color = "var(--muted)";
  renderCart();
});

currencySelect.addEventListener("change", () => {
  selectedCurrency = currencySelect.value;
  renderProducts();
  renderCart();
});

themeToggle.addEventListener("click", toggleTheme);
paymentForm.addEventListener("submit", validatePayment);
pdfBtn.addEventListener("click", generatePDF);
closeModalBtn.addEventListener("click", closeImagePreview);
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeImagePreview();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeImagePreview();
});

renderCategories();
renderProducts();
renderCart();
