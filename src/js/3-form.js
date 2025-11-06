const formData = {
  email: '',
  message: '',
  color: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-message';
// ==================================================
// Функція ЗБЕРЕЖЕННЯ В Local Storage
function SaveToLocalStorage(key, value) {
  const banka = JSON.stringify(value);
  localStorage.setItem(key, banka);
}
// ===================================================
// Функція ЗАВАНТАЖЕННЯ З Local Storage
function LoadFromLocalStorage(key) {
  const banka = localStorage.getItem(key);
  try {
    return JSON.parse(banka);
  } catch {
    return banka;
  }
}

// ===================================================
// Коли користувач вводить данні, ми дані збираємо в об'єкт, і зберігаємо в local Storage
form.addEventListener('input', () => {
  const formData = new FormData(form);
  const values = {
    email: formData.get('email'),
    message: formData.get('message'),
    color: formData.get('color'),
  };
  const color = form.elements.color.value;
  SaveToLocalStorage(STORAGE_KEY, values);

  document.body.style.backgroundColor = color;
});

// ===================================================
// Коли сайт завантажиться - ми дістаємо дані з local Storage і зберігаємо в кожен інпут окремо
document.addEventListener('DOMContentLoaded', () => {
  const data = LoadFromLocalStorage(STORAGE_KEY);
  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
  form.elements.color.value = data?.color || '';
  // Беремо колір з того самого об'єкта, що збережений під STORAGE_KEY
  const color = data?.color || '';
  if (color) {
    document.body.style.backgroundColor = color;
  }
  // Якщо об'єкт data є в сховищі, то візьми його властивість name, але якшо data немає - нічого не роби, повертай undefined, тому ми пррописуємо значенні за замовчуванням ||
  //   form.elements - звернення до інпутів, email/message - до якого саме інпуту, value - до їх значення
});
// ===================================================
// Під час події Сабміт ми дані видаляємо з localStorage
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const values = {
    email: formData.get('email'),
    message: formData.get('message'),
    color: formData.get('color'),
  };
  console.log(values);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
