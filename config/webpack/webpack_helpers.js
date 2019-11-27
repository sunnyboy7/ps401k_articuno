const helpers = {
  envConfig(json) {
    return Object.keys(json).reduce(
      (acc, currrentKey) => ({
        ...acc,
        [currrentKey]: JSON.stringify(json[currrentKey])
      }),
      {}
    );
  }
};

module.exports = helpers;
