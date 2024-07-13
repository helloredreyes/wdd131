document.addEventListener('DOMContentLoaded', () => {
    // Load saved form data if available
    loadFormData();

    // Populate product names dynamically
    const productNameSelect = document.getElementById('productName');
    if (productNameSelect) {
        const products = [
            { id: 'prod1', name: 'Product 1' },
            { id: 'prod2', name: 'Product 2' },
            { id: 'prod3', name: 'Product 3' }
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

    // localStorage for review count
    const reviewCountDisplay = document.getElementById('reviewCount');
    if (reviewCountDisplay) {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountDisplay.textContent = `Review Count: ${reviewCount}`;
    } else {
        console.error('Element with ID "reviewCount" not found');
    }

    // Save form data on form input change
    const form = document.querySelector('form');
    form.addEventListener('input', saveFormData);

    // Increment review count on form submission
    form.addEventListener('submit', () => {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
    });
});

function saveFormData() {
    const formData = new FormData(document.querySelector('form'));
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(formObject));
}

function loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formObject = JSON.parse(savedData);
        for (const key in formObject) {
            const field = document.querySelector(`[name=${key}]`);
            if (field) {
                field.value = formObject[key];
            }
        }
    }
}