const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(btn => {
  btn.addEventListener('click', function () {
    // Close all other contents
    collapsibles.forEach(otherBtn => {
      const content = otherBtn.nextElementSibling;
      if (otherBtn !== this) {
        otherBtn.classList.remove('active');
        content.style.maxHeight = null;
      }
    });

    // Toggle current one
    this.classList.toggle('active');
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});




const footerToggle = document.querySelector('.footer-toggle');
const footerContent = document.querySelector('.footer-extra-content');

footerToggle.addEventListener('click', function () {
  this.classList.toggle('active');

  if (footerContent.style.maxHeight) {
    footerContent.style.maxHeight = null;
  } else {
    footerContent.style.maxHeight = footerContent.scrollHeight + 'px';
  }
});
