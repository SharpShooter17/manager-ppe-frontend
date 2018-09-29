import RequestBaisicService from './RequestBaisicService.js';

const path = '/client';
const axios = RequestBaisicService.create(path);

const createClient = function (_code, _name) {
    return axios.post('/create', {code: _code, name: _name});
};

export default {createClient}