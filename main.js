const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');
const numberDiv = document.querySelector('.number');
const outputDiv = document.querySelector('.output');
let timer;

const predictions = {
  1: 'Сегодня тебе лучше не напрягаться',
  2: 'Кажется, ты забыл о чём то важном',
  3: 'Будь осторожен в ближайшие дни',
  4: 'Настройся на продуктивную работу',
  5: 'В течении недели тебя ждет успех',
  6: 'Пора наладить старые контакты',
  7: 'Свяжись с родными',
  8: 'Не думай ни о чем хотя бы пару часу',
  9: 'Завтра будет лучше, чем сегодня',
  10: 'Здесь ничего нет)',
};
const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min, 2);
};
const start = () => {
  outputDiv.textContent = '';
  timer = setInterval(() => {
    numberDiv.textContent = random(1, 10);
  }, 100);
  startBtn.removeEventListener('click', start);
};

const doPredict = () => {
  clearInterval(timer);
  outputDiv.textContent = predictions[numberDiv.textContent];
  startBtn.addEventListener('click', start);
};


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', doPredict);
