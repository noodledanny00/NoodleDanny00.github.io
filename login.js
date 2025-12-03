// Login script for static login.html
// Social Authentication Handlers
function handleGoogleLogin(event) {
    event.preventDefault();
    console.log('Google Login clicked');
    alert('Google OAuth integration coming soon');
}

function handleAppleLogin(event) {
    event.preventDefault();
    console.log('Apple Login clicked');
    alert('Apple Sign In integration coming soon');
}

function handleMicrosoftLogin(event) {
    event.preventDefault();
    console.log('Microsoft Login clicked');
    alert('Microsoft OAuth integration coming soon');
}

function handleGithubLogin(event) {
    event.preventDefault();
    console.log('GitHub Login clicked');
    alert('GitHub OAuth integration coming soon');
}

function handleDiscordLogin(event) {
    event.preventDefault();
    console.log('Discord Login clicked');
    alert('Discord OAuth integration coming soon');
}

function handleSpotifyLogin(event) {
    event.preventDefault();
    console.log('Spotify Login clicked');
    alert('Spotify OAuth integration coming soon');
}

function handleTwitchLogin(event) {
    event.preventDefault();
    console.log('Twitch Login clicked');
    alert('Twitch OAuth integration coming soon');
}

document.addEventListener('DOMContentLoaded', function() {
    attachEventListeners();
});

function attachEventListeners() {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            // Clear previous message
            messageDiv.hidden = true;
            messageDiv.className = '';

            // Validate inputs
            if (!email) {
                showMessage('Please enter your email address', 'error');
                return;
            }

            if (!password) {
                showMessage('Please enter your password', 'error');
                return;
            }

            if (password.length < 6) {
                showMessage('Password is incorrect', 'error');
                return;
            }

            // Success
            showMessage(`Welcome back! You've successfully logged in.`, 'success');
            form.reset();

            if (remember) {
                localStorage.setItem('rememberedEmail', email);
            }

            setTimeout(function() {
                // window.location.href = 'index.html';
            }, 2000);
        });

        // Load remembered email if exists
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            document.getElementById('email').value = rememberedEmail;
            document.getElementById('remember').checked = true;
        }
    }

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.hidden = false;
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
