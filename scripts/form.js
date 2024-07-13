document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'product1', name: 'Product 1' },
        { id: 'product2', name: 'Product 2' },
        { id: 'product3', name: 'Product 3' }
    ];

    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
});


// review.html review counter
document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = reviewCount;
});