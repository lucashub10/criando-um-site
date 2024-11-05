const cart = [
    { id: 1, name: 'Samsung A05', price: 1120, quantity: 1, image: 'img/Nova pasta (14)/favicon_io/apple-touch-icon.png' },
    { id: 2, name: 'Iphone XR', price: 1200, quantity: 1, image: 'img/Nova pasta (15)/favicon_io (1)/apple-touch-icon.png' },
    { id: 3, name: 'Motorola G20', price: 1000, quantity: 1, image: 'img/Nova pasta (16)/favicon_io/apple-touch-icon.png' }
];

function updateCart() {
    const cartTableBody = document.querySelector('#cart tbody');
    cartTableBody.innerHTML = '';

    let totalValue = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalValue += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="${item.name}" class="product-image"></td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
            </td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td>R$ ${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${item.id})">Remover</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    document.getElementById('totalValue').innerText = `R$ ${totalValue.toFixed(2)}`;
}

function updateQuantity(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCart();
    }
}

function removeItem(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

// Inicializa o carrinho na primeira carga da página
updateCart();


function removeItem(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

// Inicializa o carrinho na primeira carga da página
updateCart();
