

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send data to server or handle form submission
  console.log('Form submitted:', { name, email, message });

  // Reset form
  form.reset();
});

