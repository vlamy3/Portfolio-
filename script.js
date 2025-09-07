// Typewriter Effect
const typewriterText = ["Software Engineering Student", "Web Developer", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;
const speed = 100, pause = 1500;
const element = document.getElementById("typewriter");

function type() {
    current = typewriterText[i];
    if (isDeleting) {
        element.textContent = current.substring(0, j--);
        if (j < 0) {
        isDeleting = false;
        i = (i + 1) % typewriterText.length;
        }
    } else {
        element.textContent = current.substring(0, j++);
        if (j > current.length) {
        isDeleting = true;
        setTimeout(type, pause);
        return;
        }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed);
    }
    type();

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    window.addEventListener('scroll', () => {
    for (let r of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
        r.classList.add('active');
        }
}
// Contact Form Submission
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default submission

    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        status.textContent = "Thanks! Your message has been sent.";
        status.classList.add("text-green-600");
        form.reset();
    })
    .catch(() => {
        status.textContent = "Oops! Something went wrong. Try again.";
        status.classList.add("text-red-600");
    });
});
