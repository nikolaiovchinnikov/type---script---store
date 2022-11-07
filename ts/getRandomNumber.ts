type num = number
export const getRandomNumber = (min:num, max:num):num => Math.floor(Math.random() * (max - min + 1 ) + min)