import axios from 'axios';
var querystring = require('querystring');

const apiUrl = 'http://localhost:9091/api';

const create = function(path){
  return axios.create({
    baseUrl: '${apiUrl}${this.path}',
    headers: {
      "content-Type":"application/json",
      Accept:"application/json"
    }
  });
}

const post = function(path, action, data) {
  return axios.post(apiUrl + path + action, data);
};

export default {create, post};
