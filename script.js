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
            alert ('You have click a button', digit);
            
            // Change the background color of the clicked digit box
            digitBox.style.backgroundColor = '#555'; // New color on click
            setTimeout(function() {
                digitBox.style.backgroundColor = ''; // Reset to original after 0.3 seconds
            }, 300);
        });

        container.appendChild(digitBox);
    });
}
