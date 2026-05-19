const products = [

    {
        id: 1,
        title: "Fresh Apples",
        desc: "Organic red apples from local farms.",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },

    {
        id: 2,
        title: "Milk Pack",
        desc: "Fresh dairy milk with natural taste.",
        price: "$2.50",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
    },

    {
        id: 3,
        title: "Bread",
        desc: "Soft bakery bread baked daily.",
        price: "$1.80",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    },

    {
        id: 4,
        title: "Fresh Broccoli",
        desc: "Healthy green broccoli full of vitamins.",
        price: "$3.20",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
    }

];

const productsContainer = document.getElementById("products");

const cartCount = document.getElementById("cartCount");

let cart = 0;

function renderProducts() {

    products.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}">
        </div>
  
        <div class="product-content">
  
          <h3>${product.title}</h3>
  
          <p>${product.desc}</p>
  
          <div class="price">${product.price}</div>
  
          <button class="add-btn" onclick="addToCart()">
            Add To Cart
          </button>
  
        </div>
      `;

        productsContainer.appendChild(card);

    });

}

function addToCart() {

    cart++;

    cartCount.textContent = cart;

}

renderProducts();