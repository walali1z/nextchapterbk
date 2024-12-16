// JavaScript Interactivity for Next Chapter Bookshop Website

document.addEventListener("DOMContentLoaded", function () {
    // Navbar Highlighting on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Back-to-Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Dynamic Quote Display
    const quotes = [
        "A room without books is like a body without a soul.",
        "Books are a uniquely portable magic.",
        "Reading gives us someplace to go when we have to stay where we are.",
    ];
    const quoteElement = document.getElementById("quote-display");

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    setInterval(displayRandomQuote, 5000);

    // Newsletter Subscription Validation
    const form = document.getElementById("newsletter-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailInput = document.getElementById("email").value;
        const feedback = document.getElementById("feedback");

        if (validateEmail(emailInput)) {
            feedback.textContent = "Thank you for subscribing!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
