// Social Authentication Handlers
function handleGoogleSignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('Google Sign-up clicked');
    alert('Google OAuth integration coming soon');
}

function handleAppleSignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('Apple Sign-up clicked');
    alert('Apple Sign In integration coming soon');
}

function handleMicrosoftSignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('Microsoft Sign-up clicked');
    alert('Microsoft OAuth integration coming soon');
}

function handleGithubSignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('GitHub Sign-up clicked');
    alert('GitHub OAuth integration coming soon');
}

function handleDiscordSignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('Discord Sign-up clicked');
    alert('Discord OAuth integration coming soon');
}

function handleSpotifySignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('Spotify Sign-up clicked');
    alert('Spotify OAuth integration coming soon');
}

function handleTwitchSignup(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log('Twitch Sign-up clicked');
    alert('Twitch OAuth integration coming soon');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirm').value;
            const consent = document.getElementById('consent').checked;

            // Clear previous message
            messageDiv.hidden = true;
            messageDiv.className = '';

            // Validate inputs
            if (!name) {
                showMessage('Please enter your full name', 'error');
                return;
            }

            if (!email) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            if (password.length < 8) {
                showMessage('Password must be at least 8 characters long', 'error');
                return;
            }

            if (password !== confirm) {
                showMessage('Passwords do not match', 'error');
                return;
            }

            if (!consent) {
                showMessage('Please agree to the club rules', 'error');
                return;
            }

            // Success
            showMessage(`Success! Welcome ${name}! Check your email at ${email} for confirmation.`, 'success');
            form.reset();

            setTimeout(function() {
                // window.location.href = 'index.html';
            }, 3000);
        });
    }

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.hidden = false;
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
// Social Authentication Handlers
function handleGoogleSignup(event) {
    event && event.preventDefault();
    console.log('Google Sign-up clicked');
    alert('Google OAuth integration coming soon');
}

function handleAppleSignup(event) {
    event && event.preventDefault();
    console.log('Apple Sign-up clicked');
    alert('Apple Sign In integration coming soon');
}

function handleMicrosoftSignup(event) {
    event && event.preventDefault();
    console.log('Microsoft Sign-up clicked');
    alert('Microsoft OAuth integration coming soon');
}

function handleGithubSignup(event) {
    event && event.preventDefault();
    console.log('GitHub Sign-up clicked');
    alert('GitHub OAuth integration coming soon');
}

function handleDiscordSignup(event) {
    event && event.preventDefault();
    console.log('Discord Sign-up clicked');
    alert('Discord OAuth integration coming soon');
}

function handleSpotifySignup(event) {
    event && event.preventDefault();
    console.log('Spotify Sign-up clicked');
    alert('Spotify OAuth integration coming soon');
}

function handleTwitchSignup(event) {
    event && event.preventDefault();
    console.log('Twitch Sign-up clicked');
    alert('Twitch OAuth integration coming soon');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirm').value;
            const consent = document.getElementById('consent').checked;

            // Clear previous message
            messageDiv.hidden = true;
            messageDiv.className = '';

            // Validate inputs
            if (!name) {
                showMessage('Please enter your full name', 'error');
                return;
            }

            if (!email) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            if (password.length < 8) {
                showMessage('Password must be at least 8 characters long', 'error');
                return;
            }

            if (password !== confirm) {
                showMessage('Passwords do not match', 'error');
                return;
            }

            if (!consent) {
                showMessage('Please agree to the club rules', 'error');
                return;
            }

            // Success
            showMessage(`Success! Welcome ${name}! Check your email at ${email} for confirmation.`, 'success');
            form.reset();

            setTimeout(function() {
                // window.location.href = 'index.html';
            }, 3000);
        });
    }

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.hidden = false;
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
// Social Authentication Handlers
function handleGoogleSignup(event) {
    event.preventDefault();
    console.log('Google Sign-up clicked');
    alert('Google OAuth integration coming soon');
}

function handleAppleSignup(event) {
});
    console.log('Apple Sign-up clicked');
    alert('Apple Sign In integration coming soon');
}

function handleMicrosoftSignup(event) {
    event.preventDefault();
    console.log('Microsoft Sign-up clicked');
    alert('Microsoft OAuth integration coming soon');
}

function handleGithubSignup(event) {
    event.preventDefault();
    console.log('GitHub Sign-up clicked');
    alert('GitHub OAuth integration coming soon');
}

function handleDiscordSignup(event) {
    event.preventDefault();
    console.log('Discord Sign-up clicked');
    alert('Discord OAuth integration coming soon');
}

function handleSpotifySignup(event) {
    event.preventDefault();
    console.log('Spotify Sign-up clicked');
    alert('Spotify OAuth integration coming soon');
}

function handleTwitchSignup(event) {
    event.preventDefault();
    console.log('Twitch Sign-up clicked');
    alert('Twitch OAuth integration coming soon');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirm').value;
            const consent = document.getElementById('consent').checked;

            // Clear previous message
            messageDiv.hidden = true;
            messageDiv.className = '';

            // Validate inputs
            if (!name) {
                showMessage('Please enter your full name', 'error');
                return;
            }

            if (!email) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            if (password.length < 8) {
                showMessage('Password must be at least 8 characters long', 'error');
                return;
            }

            if (password !== confirm) {
                showMessage('Passwords do not match', 'error');
                return;
            }

            if (!consent) {
                showMessage('Please agree to the club rules', 'error');
                return;
            }

            // Success
            showMessage(`Success! Welcome ${name}! Check your email at ${email} for confirmation.`, 'success');
            form.reset();

            setTimeout(function() {
                // window.location.href = 'index.html';
            }, 3000);
        });
    }

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.hidden = false;
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
