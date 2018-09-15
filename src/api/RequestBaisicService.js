import axios from 'axios';
import Cookies from 'js-cookie'

// var querystring = require('querystring');

const apiUrl = 'http://localhost:9091/api';

const type =  'Bearer ';

const create = function(path){
  return axios.create({
    baseUrl: apiUrl+path,
    headers: {
      "content-Type":"application/json",
      Accept:"application/json",
      Authorization: type + Cookies.get('tokenType')
    }
  });
}

const post = function(path, action, data) {
  return axios.post(apiUrl + path + action, data);
};

export default {create, post};
