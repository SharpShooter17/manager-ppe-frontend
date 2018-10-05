import RequestBaisicService from './RequestBaisicService.js';

const path = '/ppe';
const axios = RequestBaisicService.create(path);

const create = function (_phsicalId, _name, _street, _postalCodeId, _clientId) {
    return axios.post('/create', {
        physicalId: _phsicalId,
        name: _name,
        street: _street,
        postalCodeId: _postalCodeId,
        clientId: _clientId
    });
};

const getAll = function () {
    console.log('getAllPpe')
    return axios.get('/all');
};

const getByPhysicalId = function (_physicalId) {
    return axios.get('/' +_physicalId);
};

const byClientCode = function (_clientCode) {
    return axios.get('/byClientCode/' + _clientCode);
};


export default {create, getAll, getByPhysicalId, byClientCode}
