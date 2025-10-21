// Оголоси поза будь-якими функціями об’єкт formData з полями email та message,
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.

// Використовуй метод делегування для відстеження змін у формі через подію input.
// Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище.
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

// При завантаженні сторінки перевір, чи є дані у локальному сховищі.
// Якщо так, використовуй їх для заповнення форми та об'єкта formData.
// Якщо ні, залиш поля форми порожніми.

// Перед відправленням форми переконайся, що обидва поля форми заповнені.
// Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».
// Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище,
// об’єкт formData і поля форми.

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};
console.log(formData);

form.addEventListener('input', evt => {
  formData.email = evt.target.email.value;
  formData.message = evt.target.message.value;
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
console.log(formData);

// const newFormData (e, = {
// if (formData.email || formData.message === '') {
//   console.log('Fill please all fields');
// } else {
//   return formData;
// }
// });
