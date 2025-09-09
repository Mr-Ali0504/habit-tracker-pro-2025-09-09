// Habit Tracker Pro - Generated App
document.addEventListener('DOMContentLoaded', function() {
    console.log('Habit Tracker Pro loaded successfully!');
    
    
    const mainButton = document.getElementById('mainButton');
    const output = document.getElementById('output');
    
    if (mainButton && output) {
        mainButton.addEventListener('click', function() {
            output.innerHTML = '<p>Hello from Habit Tracker Pro! Button clicked at ' + new Date().toLocaleTimeString() + '</p>';
        });
    }
});