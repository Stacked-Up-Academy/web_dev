 // 1. Select the button element
        const button = document.getElementById('hoverBtn');

        // 2. Add event listener for when the mouse enters the button
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#28a745'; // Changes to green
            button.style.color = '#ffffff';
        });

        // 3. Add event listener for when the mouse leaves the button
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#007BFF'; // Resets to original blue
            button.style.color = 'white';
        });