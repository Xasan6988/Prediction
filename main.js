const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');
const numberDiv = document.querySelector('.number');
const outputDiv = document.querySelector('.output');
let timer;

const predictions = {
  1: 'Саня хуй соси',
  2: 'Губой тряси',
  3: 'Потуси',
  4: 'Купи Галу пивас',
  5: 'Продавай аллюминий',
  6: 'Пора валить забугор',
  7: 'Скинь контент',
  8: 'Время дрочить вприсядку',
  9: 'Саня дай деняк',
  10: 'Сяоми топ за свои деньги',
};
const random = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min, 2)
}
const start = () => {
  outputDiv.textContent = '';
  timer = setInterval(() => {
    numberDiv.textContent = random(1, 10)
  }, 100);
};

const doPredict = () => {
  clearInterval(timer);
  outputDiv.textContent = predictions[numberDiv.textContent];
};


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', doPredict)
