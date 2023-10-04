const generateId = (length) => {
  return new Promise((resolve, reject) => {
    if (typeof length !== 'number' || length <= 0) {
      setTimeout(() => {
        reject(new Error('Parameter harus number'));
      }, 1000);
    } else {
      setTimeout(() => {
        const randomID = getRandomId(length);
        resolve(randomID);
      }, 1000);
    }
  });
};

const getRandomId = (length) => {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum.toString();
};

generateId(5)
  .then((randomID) => {
    console.log(randomID);
  })
  .catch((err) => {
    console.log(err);
  });
