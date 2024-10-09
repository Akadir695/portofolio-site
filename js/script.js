// Add custom JavaScript here
const effect = document.getElementById('typing-text'); // Target the element

const effectFunct = () => {
  const text = 'I am Abdulkadir Aweys'; // Text to be typed
  const typingEle = effect; // Targeted element
  const typingDelay = 100; // Typing speed in milliseconds
  typingEle.textContent = ''; // Clear any existing text before typing starts
  typeText(text, typingEle, typingDelay); // Call the function
};

const typeText = (text, typingEle, typingDelay) => {
  for (let index = 0; index < text.length; index++) {
    setTimeout(() => {
      typingEle.textContent += text.charAt(index); // Use text.charAt(index) to get the character
    }, typingDelay * index); // Use index to control delay
  }
};

document.addEventListener('DOMContentLoaded', function () {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
});

// Call the function to start the effect
const loaded = () => {
  window.addEventListener('DOMContentLoaded', effectFunct)
}
loaded()