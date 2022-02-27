const { default: axios } = require("axios");

const appNetworkService = axios.create({
    baseURL: "http://localhost:3000/",
  });

  export default appNetworkService;