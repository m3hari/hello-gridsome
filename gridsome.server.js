const axios = require("axios");

module.exports = function(api) {
  
    api.loadSource(async store => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

    const contentType = store.addContentType({
      typeName: "Todo"
    });

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        userId:item.userId,
        title: item.title,
        completed:item.completed
      });
    }
  });

};
