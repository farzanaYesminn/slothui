const collapsibleButtons = document.querySelectorAll('.collapsible');
const footerToggle = document.querySelector('.footer-toggle');

if (collapsibleButtons.length) {
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function () {
            collapsibleButtons.forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.style.maxHeight = null;
                }
            });

            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.maxHeight = this.classList.contains('active')
                ? content.scrollHeight + 'px'
                : null;
        });
    });
}

if (footerToggle) {
    footerToggle.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
