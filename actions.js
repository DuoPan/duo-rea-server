module.exports = {
  addProperty: function(id, userJsonData) {
    let propertyInResults = userJsonData.results.find(x => x.id === id);
    // wrong id
    if (!propertyInResults) {
      return {message: 'Sorry, we can not find this property.'};
    }
    let propertyInSaved = userJsonData.saved.find(x => x.id === id);
    // already added
    if (propertyInSaved) {
      return {message: 'You have already saved this property.'};
    }
    userJsonData.saved.push(propertyInResults);
    return {data: userJsonData.saved};
  },

  removeProperty: function(id, userJsonData) {
    userJsonData.saved = userJsonData.saved.filter(x => x.id !== id);
    return {data: userJsonData.saved};
  },

  resetProperty: function(defaultJsonData) {
    return JSON.parse(JSON.stringify(defaultJsonData));
  },
};