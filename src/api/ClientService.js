import RequestBaisicService from './RequestBaisicService.js';

const path = '/client';
const axios = RequestBaisicService.create(path);

const createClient = function (_name) {
    return axios.post('/create', {name: _name});
};

const getAll = function () {
    return axios.get('/all');
};

const getClientByNameLike = function (_name) {
    return axios.get('/byNameLike/' + _name);
};

const getByCode = function (_code) {
    return axios.get('/' +_code);
};

export default {createClient, getAll, getByCode, getClientByNameLike}