const form = document.querySelector('.feedback-form');
const label = document.querySelector('.input');
const text = document.querySelector('.text');

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
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    label.append('Please enter your email !!!');
    text.append('Please enter your message !!!');
    return;
  }

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  form.reset();
}
