import Timer from './Timer.js';

const dateInput = document.getElementById('date');
const nameInput = document.getElementById('event-name');
const button = document.getElementById('add');

button.addEventListener('click', (e) => {
  e.preventDefault();
  // TODO: input validation
  const w = new Worker('./Timer.js');
  const event = w.onmessage = new Timer(dateInput.value, nameInput.value);
  event.showTimer();
});
