import { Toast } from 'toaster-js';

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
    new Toast(
      'Please enter your email and message!',
      Toast.TYPE_ERROR,
      Toast.TIME_NORMAL
    );
    return;
  }

  const formData = { email: emailValue, message: messageValue };
  addMessage(formData);

  form.reset();
}

function addMessage(dto) {
  const list = document.querySelector('.form-list');

  const listItem = document.createElement('li');
  const email = document.createElement('h3');
  const message = document.createElement('p');

  email.textContent = `email: ${dto.email}`;
  message.textContent = `message: ${dto.message}`;

  listItem.appendChild(email);
  listItem.appendChild(message);

  list.appendChild(listItem);
}
