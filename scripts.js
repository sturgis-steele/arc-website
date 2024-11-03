document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header");
    let lastScrollY = window.scrollY; // Store the initial scroll position

    window.addEventListener("scroll", () => {
        if (window.innerWidth > 969) { // Only apply the effect if screen width is greater than 969px
            if (window.scrollY > lastScrollY) {
                // User is scrolling down, hide the header
                header.style.transform = "translateY(-100%)";
            } else {
                // User is scrolling up, show the header
                header.style.transform = "translateY(0)";
            }
        } else {
            // Reset header position if screen width is less than or equal to 969px
            header.style.transform = "translateY(0)";
        }
        lastScrollY = window.scrollY; // Update the last scroll position
    });
});




// Hamburger menu
function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.getElementById("navbar");
    const body = document.body; // Get the body element

    // Toggle the active class for the navbar and hamburger
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Disable scrolling when the navbar is active
    if (navbar.classList.contains("active")) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }

    // Add a delay before rotating to create the two-step effect
    setTimeout(() => {
        const lines = document.querySelectorAll(".hamburger .line");
        lines.forEach(line => {
            line.classList.toggle("rotate");
        });
    }, 150); // Adjust the delay time as needed
}




// Sparkle effect`
let lastX = 0;
let lastY = 0;
const minDistance = 30; // Minimum distance in pixels to generate a new sparkle

document.addEventListener("mousemove", function (e) {
    // Calculate the distance the mouse has moved
    const distance = Math.sqrt(Math.pow(e.pageX - lastX, 2) + Math.pow(e.pageY - lastY, 2));

    if (distance > minDistance) {
        lastX = e.pageX;
        lastY = e.pageY;

        // Generate a sparkle
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        // Randomize the position around the cursor
        const randomX = e.pageX + (Math.random() - 0.5) * 30; // Adjust the range for dispersion
        const randomY = e.pageY + (Math.random() - 0.5) * 30;
        sparkle.style.left = `${randomX}px`;
        sparkle.style.top = `${randomY}px`;

        // Randomize the size of the sparkles
        const size = Math.random() * 3 + 2; // Size between 2px and 5px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        document.body.appendChild(sparkle);

        // Remove the sparkle after a short duration
        setTimeout(() => {
            sparkle.remove();
        }, 1000); // Duration in milliseconds
    }
});



// Typing effect
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".type-effect");
    const delayBeforeTyping = 500; // Delay in milliseconds before typing starts

    // Function to apply the typing effect
    const applyTypingEffect = (element) => {
        const textLength = element.textContent.length;
        const typingSpeed = 0.1; // Time in seconds per character
        const duration = textLength * typingSpeed; // Calculate total duration

        setTimeout(() => {
            element.style.animation = `typing ${duration}s steps(${textLength}, end) forwards`;

            // Check if the element has the "gradient-enabled" class
            if (element.classList.contains("gradient-enabled")) {
                // Add the gradient effect after the typing animation finishes
                setTimeout(() => {
                    element.classList.add("active-gradient");
                }, duration * 1000); // Convert seconds to milliseconds
            }
        }, delayBeforeTyping);
    };

    // Observer to trigger the typing effect when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                applyTypingEffect(entry.target);
                observer.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    });

    // Observe each element
    elements.forEach(element => {
        observer.observe(element);
    });
});



// Footer year
document.getElementById('year').textContent = new Date().getFullYear();