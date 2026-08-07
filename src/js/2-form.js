const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const storageItem = localStorage.getItem(STORAGE_KEY);
if (storageItem) {
  try {
    const parsedData = JSON.parse(storageItem);
    formData.email = parsedData.email ?? '';
    formData.message = parsedData.message ?? '';
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

const formInputHandler = (e) => {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const formSubmitHandler = (e) => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
};

form.addEventListener('input', formInputHandler);
form.addEventListener('submit', formSubmitHandler);