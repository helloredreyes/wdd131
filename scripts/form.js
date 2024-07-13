document.addEventListener('DOMContentLoaded', () => {
    //element access and validation
    const exampleElement = document.getElementById('exampleElementId');
    if (exampleElement) {
        exampleElement.textContent = 'Example Text';
    } else {
        console.error('Element with ID "exampleElementId" not found');
    }

    // populate product names dynamically
    const productNameSelect = document.getElementById('productName');
    if (productNameSelect) {
        const products = [
            { id: 'prod1', name: 'Folding Bicycle' },
            { id: 'prod2', name: 'Electric Scooter' },
            { id: 'prod3', name: 'One Wheel Skateboard'}
        ];

        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    } else {
        console.error('Element with ID "productName" not found');
    }

    // review.html
    const reviewCountDisplay = document.getElementById('reviewCount');
    if (reviewCountDisplay) {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountDisplay.textContent = `Review Count: ${reviewCount}`;
    } else {
        console.error('Element with ID "reviewCount" not found');
    }
});
