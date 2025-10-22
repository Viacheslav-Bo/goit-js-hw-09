// Оголоси поза будь-якими функціями об’єкт formData з полями email та message,
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

//===================================================================
// При завантаженні сторінки перевір, чи є дані у локальному сховищі.
// Якщо так, використовуй їх для заповнення форми та об'єкта formData.
// Якщо ні, залиш поля форми порожніми.

function autoFill() {
  const saveData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  if (saveData.email) {
    form.elements.email.value = saveData.email;
    formData.email = saveData.email;
  }
  if (saveData.message) {
    form.elements.message.value = saveData.message;
    formData.message = saveData.message;
  }
}

autoFill();
//===================================================================
// Використовуй метод делегування для відстеження змін у формі через подію input.
// Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище.
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

form.addEventListener('input', evt => {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
  } else if (evt.target.name === 'message') {
    formData.message = evt.target.value;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  console.log(localStorage);
});
console.log(localStorage);

//===================================================================
// Перед відправленням форми переконайся, що обидва поля форми заповнені.
// Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».
// Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище,
// об’єкт formData і поля форми.

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(`email: ${evt.target.elements.email.value}`);
  console.log(`message: ${evt.target.elements.message.value}`);
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
