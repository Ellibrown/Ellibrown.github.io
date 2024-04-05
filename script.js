document.addEventListener('DOMContentLoaded', function() {
    console.log('Page is fully loaded!');

    var sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('mouseover', function() {
        alert('You are hovering over the sidebar!');
    });

    // New feature to display greeting depending on the time of day
    var today = new Date();
    var hour = today.getHours();
    var greeting;

    if (hour >= 0 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon!";
    } else if (hour >= 18 && hour <= 23) {
        greeting = "Good evening!";
    } else {
        greeting = "Hello!";
    }

    document.getElementById('greeting').textContent = greeting;

    document.getElementById('defaultScheme').addEventListener('click', function() {
        document.body.className = ''; // Reset to default scheme
    });

    document.getElementById('darkScheme').addEventListener('click', function() {
        document.body.className = 'dark-scheme'; // Apply dark scheme
    });

    document.getElementById('lightScheme').addEventListener('click', function() {
        document.body.className = 'light-scheme'; // Apply light scheme
    });

    document.getElementById('researchSuggestionForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Validate each input
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var researchTopic = document.getElementById('researchTopic').value;
        var email = document.getElementById('email').value;
        var sourceLink = document.getElementById('sourceLink').value;
        var sourceFile = document.getElementById('sourceFile').value;

        if (!name || !phone || !researchTopic || !email || !sourceLink || !sourceFile) {
            console.log('All fields are required.');
            return false;
        }

        var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!phonePattern.test(phone)) {
            console.log('Invalid phone number format. Use 123-456-7890 format.');
            return false;
        }

        console.log('Form is valid. ');
    });
});