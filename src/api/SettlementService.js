import RequestBaisicService from './RequestBaisicService.js';

const path = '/settlement';
const axios = RequestBaisicService.create(path);

const create = function (_settlement){
    return axios.post('/create', _settlement);
};

export default {create}