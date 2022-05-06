import './styles/style.scss';

function getSum(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(getSum(12412, 34534, 43543));
