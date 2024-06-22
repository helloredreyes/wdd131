// Step 1: Declare variables to hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button
button.addEventListener('click', function() {
    // Ensure the input is not empty
    if (input.value.trim() !== '') {
        // Step 2: Create a li element to hold the chapter title and delete button
        const li = document.createElement('li');

        // Step 3: Create a delete button
        const deleteButton = document.createElement('button');

        // Step 4: Populate the li element's textContent with the input value
        li.textContent = input.value;

        // Step 5: Populate the button's textContent with a '❎'
        deleteButton.textContent = '❎';

        // Step 6: Append the delete button to the li element
        li.append(deleteButton);

        // Step 7: Append the li element to the unordered list
        list.append(li);

        // Add event listener to delete button to remove the li element
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Return focus to the input field
        });

        // Clear the input field after adding the chapter
        input.value = '';
    } else {
        alert('Please enter a book and chapter.');
    }

    // Set focus back to the input field
    input.focus();
});
