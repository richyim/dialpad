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
        container.appendChild(digitBox);
    });
}
