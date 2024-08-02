const textElement = document.getElementById('typing');

const texts = ["Full Stack Developer", "Cloud Practitioner", "TDD Advocate"];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = '';

function type() {
    // Determine the current text to type
    currentText = texts[textIndex];
    if (isDeleting) {
        // Remove a character
        charIndex--;
    } else {
        // Add a character
        charIndex++;
    }

    // Update the displayed text
    textElement.innerHTML = `I'm a ${currentText.substring(0, charIndex)}`;

    // Check if the text is fully typed or deleted
    if (!isDeleting && charIndex === currentText.length) {
        // Pause before deleting
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 1000);
    } else if (isDeleting && charIndex === 0) {
        // Pause before typing the next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 100);
    } else {
        // Continue typing or deleting
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// Start the typing animation
type();