// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const clickMeBtn = document.getElementById('clickMeBtn');
    const messageElement = document.getElementById('message');
    
    // Add click event listener to the button
    clickMeBtn.addEventListener('click', function() {
        // Update the message when button is clicked
        messageElement.textContent = 'Button was clicked!';
        messageElement.style.color = 'green';
        
        // Change button text temporarily
        clickMeBtn.textContent = 'Clicked!';
        
        // Reset button text after 1 second
        setTimeout(function() {
            clickMeBtn.textContent = 'Click Me';
        }, 1000);
    });
});
