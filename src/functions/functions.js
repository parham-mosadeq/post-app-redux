import axios from 'axios';

const randomNumber = (maxNum) => {
  return Math.ceil(Math.random() * maxNum);
};

export { randomNumber };
