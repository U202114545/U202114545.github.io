// Function for smooth scrolling
function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function for form validation
function formValidation() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        var email = document.querySelector('input[type="email"]').value;

        if (!email) {
            // Improved feedback for form validation
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p>Please enter your email.</p>');
        } else if (!validateEmail(email)) {
            // Improved feedback for form validation
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p>Please enter a valid email.</p>');
        } else {
            // Improved feedback for form validation
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p>Thank you for subscribing!</p>');
        }
    });
}

// Function for email validation
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Call the functions
smoothScrolling();
formValidation();