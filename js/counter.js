// -------------- COUNTER -----------------------------

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
