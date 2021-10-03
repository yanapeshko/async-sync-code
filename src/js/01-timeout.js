import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */
// setTimeout(
//   y => {
//     console.log(y);
//     console.log('Inside the callback for setTimeout');
//   },
//   2000,
//   5,
// );
// console.log('Inside the call setTimeout');
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
const logger = time => {
  // console.log('Лог через ${{time}}ms, потому что не отменили таймаут');
};
const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
