import axios from 'axios';
import Cookies from 'js-cookie'

// var querystring = require('querystring');

const apiUrl = 'http://localhost:9091/api';

const create = function (path) {
    const url = apiUrl + path;
    return axios.create({
        baseURL: url,
        timeout: 3000,
        headers: {
            "content-Type": "application/json",
            Accept: "application/json",
            Authorization: Cookies.get('tokenType') + ' ' + Cookies.get('token')
        }
    });
};

export default {create};
