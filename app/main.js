const functionLength = (array) => {
  let i = 0;
  for (i in array) {
    i++;
  }

  return i;
};

const functionPop = (array) => {
  if (array.lenght === 0) {
    return indefined;
  }

  const lasElement = array[array.lenght - 1];
  array.lenght -= 1;

  return lasElement;
};

export default {
  functionLength,
  functionPop,
};
