const getOptionNameByValue = (options, value) => {
  let result = "";
  options.forEach(option => {
    if (option.value === value) {
      result = option.name;
    }
  });

  return result;
};

export default {
  getOptionNameByValue: getOptionNameByValue,
};
