module.exports = () => {
  let config = {
    defaults: { },
    private: { }
  };

  // Defaults
  config.defaults.heightRatio = 0.55;

  return {
    defaults: config.defaults
  };
};
