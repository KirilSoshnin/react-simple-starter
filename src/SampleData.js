const SampleData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        defaultState: "Default State Sample Data"
      });
    }, 2000);
  });
};

export default SampleData;
