document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const collapsibleButtons = document.querySelectorAll(".collapsible");
    const footerToggle = document.querySelector(".footer-toggle");
    const toggleReviewsBtn = document.getElementById("toggleReviewsBtn");

    // Hamburger Menu Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Collapsible Buttons (Accordion effect)
    if (collapsibleButtons.length > 0) {
        collapsibleButtons.forEach(button => {
            button.addEventListener("click", function () {
                collapsibleButtons.forEach(otherButton => {
                    if (otherButton !== this) {
                        otherButton.classList.remove("active");
                        const otherContent = otherButton.nextElementSibling;
                        if (otherContent) {
                            otherContent.style.maxHeight = null;
                        }
                    }
                });

                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content) {
                    content.style.maxHeight = this.classList.contains("active")
                        ? `${content.scrollHeight}px`
                        : null;
                }
            });
        });
    }

    // Footer Scroll to Top
    if (footerToggle) {
        footerToggle.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Learn More Button - Show More Reviews
    if (toggleReviewsBtn) {
        toggleReviewsBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            const reviews = document.querySelectorAll('.client-review-card:nth-child(n+5)');

            // Reveal all hidden reviews
            reviews.forEach(review => {
                review.style.display = 'flex';
            });

            // Disable the button after it is clicked (Optional)
            toggleReviewsBtn.style.display = 'none';
        });
    }
});
