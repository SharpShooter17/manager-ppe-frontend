import RequestBaisicService from './RequestBaisicService.js';

const path = '/em';
const axios = RequestBaisicService.create(path);

const create = function (_number, _assembly, _deassembly, _ppeId) {
    return axios.post('/create', {
        number: _number,
        assembly: _assembly,
        deassembly: _deassembly,
        ppeId: _ppeId,
    });
};

const byPpePhysicalId = function (_ppeId) {
    return axios.get('/byPpePhysicalId/' + _ppeId);
};

const byNumber = function (_number){
    return axios.get('/' + _number);
};

export default {create, byPpePhysicalId, byNumber}
