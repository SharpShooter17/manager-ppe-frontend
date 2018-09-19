import RequestBaisicService from './RequestBaisicService.js';

const path = '/address';
const axios = RequestBaisicService.create(path);

const createZipCodeChecker = function (_pattern, _code, _name) {
    return axios.post('/creteZipCodeChecker', {pattern: _pattern, code: _code, name: _name});
}

export default {createZipCodeChecker}