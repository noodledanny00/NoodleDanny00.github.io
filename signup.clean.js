// Clean signup handlers for the signup page (use this instead of corrupted signup.js)
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

// Export nothing; these are global functions that the page will call.
