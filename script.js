document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const collapsibleButtons = document.querySelectorAll(".collapsible");
    const footerToggle = document.querySelector(".footer-toggle");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
    

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

    if (footerToggle) {
        footerToggle.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});