document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  let errors = [];
  if (!fullName) errors.push('Full Name is required.');
  if (!email) errors.push('Email Address is required.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.');
  if (!subject) errors.push('Subject is required.');
  if (!message) errors.push('Message is required.');

  if (errors.length > 0) {
    formMessage.textContent = errors.join(' ');
    formMessage.style.color = '#e84118';
  } else {
    formMessage.textContent = 'Thank you for contacting us!';
    formMessage.style.color = '#44bd32';
   
  }
});