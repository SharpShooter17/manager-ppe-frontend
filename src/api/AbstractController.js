import axios from 'axios';
var querystring = require('querystring');

export default class AbstractController {
  constructor(_path){
    this.apiUrl = 'http://localhost:8080/api';
    this.path = _path;
  }

  create(){
    return axios.create({
      baseUrl: this.apiUrl + this.path,
      headers: {
        "content-Type":"application/json",
        Accept:"application/json"
      }
    });
  }

  post(action, data){
    return axios.post(this.apiUrl + this.endpath + action, querystring.stringify(data));
  }
};
