const { default: axios } = require("axios");

const appNetworkService = axios.create({
  baseURL: "http://localhost:5000/",
});

export default appNetworkService;
