import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное количество надоедалок или подписался');
    return;
  }
  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show();
    promCounter += 1;
  }, PROMPT_DELAY);
}
function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
// let promptCounter = 0;
// let hasSubscribed = true;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Нужно остановить интервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Подпишись на рассылку! -' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
