document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Handle form submission
    const orderForm = document.querySelector('form');
  
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = orderForm.querySelector('input[type="text"]').value.trim();
      const email = orderForm.querySelector('input[type="email"]').value.trim();
      const product = orderForm.querySelector('select').value;
      const quantity = orderForm.querySelector('input[type="number"]').value;
  
      if (!name || !email || !product || quantity <= 0) {
        alert('Please fill in all fields correctly.');
        return;
      }
  
      alert(`Thank you, ${name}! Your order for ${quantity} x ${product} has been placed.`);
      orderForm.reset();
    });
  });
  