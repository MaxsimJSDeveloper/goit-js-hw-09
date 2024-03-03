const form = document.querySelector('.feedback-form');

form.addEventListener('input', getValue);

function getValue() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('load', loadForm);

function loadForm() {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}

form.addEventListener('submit', formSub);

function formSub(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  if (form.elements.email.value === '') {
    alert('Please enter your email');
  }
  if (form.elements.message.value === '') {
    alert('Please enter your message');
  }

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  form.reset();
}
