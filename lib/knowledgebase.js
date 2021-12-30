const { CONFLUENCE_URL } = process.env;
const axios = require("axios");

module.exports = {
  getKBPageById: async (id) => {
    try {
      var { data } = await axios.get(
        `${CONFLUENCE_URL}/rest/api/content/${id}`
      );
    } catch (error) {
      console.log(error);
      return null;
    }
    return data;
  },
  getKBPageBodyByURL: async (url) => {
    try {
      var { data } = await axios.get(url);
    } catch (error) {
      console.log(error);
      return null;
    }
    return data;
  },
};
