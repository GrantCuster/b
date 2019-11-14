module.exports = {
  exportPathMap: function(defaultPathMap) {
    let pathMap = Object.assign({}, defaultPathMap);
    delete pathMap['/index'];
    for (let key of Object.keys(pathMap)) {
      if (key.startsWith('/s/')) {
        let mod_key = key.slice(2);
        pathMap[mod_key] = pathMap[key];
        delete pathMap[key];
      }
    }
    console.log(pathMap);
    return pathMap;
  },
};
