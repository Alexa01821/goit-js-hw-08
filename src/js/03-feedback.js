import throttle from 'lodash.throttle';

const KEY_LOCAL = 'feedback-form-state';
const formElement = document.querySelector('.feedback-form');
const { email, message } = formElement.elements;
let dataForm = JSON.parse(localStorage.getItem(KEY_LOCAL)) ?? {};

if (dataForm) {
  email.value = dataForm.email || '';
  message.value = dataForm.message || '';
};

formElement.addEventListener('input', throttle(onInputForm, 500));
formElement.addEventListener('submit', onSubmitForm);

function onInputForm() {
  dataForm[email.name] = email.value;
  dataForm[message.name] = message.value;
  localStorage.setItem(KEY_LOCAL, JSON.stringify(dataForm));
};

function onSubmitForm(event){
    event.preventDefault();
    console.log(dataForm);
    event.currentTarget.reset();
    localStorage.removeItem(KEY_LOCAL);
}