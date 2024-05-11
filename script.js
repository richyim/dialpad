document.addEventListener('DOMContentLoaded', function() {
    displayCount('123456789*0#');
});

function displayCount(count) {
    const container = document.getElementById('counter-container');
    container.innerHTML = ''; // Clear previous count display

    // Split the count into digits and create a box for each digit
    count.split('').forEach(digit => {
        const digitBox = document.createElement('div');
        digitBox.classList.add('digit-box');
        digitBox.textContent = digit;

        // Add click event listener to the digit box
        digitBox.addEventListener('click', function() {
            // Call playTone with frequency 800 Hz and duration 0.4 seconds
            window.playTone(800, 0.4);

            // Send the digit to the server
            fetch('http://localhost:8011/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `digit=${digit}`
            })
            .then(response => response.text())
            .then(text => console.log(text))
            .catch(error => console.error('Error:', error));

            // Change the background color of the clicked digit box
            digitBox.classList.add('digit-box-clicked');
            setTimeout(function() {
                digitBox.classList.remove('digit-box-clicked');
            }, 300);
        });

        container.appendChild(digitBox);
    });
}
