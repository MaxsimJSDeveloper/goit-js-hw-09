const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveFormData);

function saveFormData() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('load', loadFormData);

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Please enter your email and message!');
    return;
  }

  console.log({ email: emailValue, message: messageValue });

  form.reset();
}

