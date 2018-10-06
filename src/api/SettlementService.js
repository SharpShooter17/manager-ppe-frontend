import RequestBaisicService from './RequestBaisicService.js';

const path = '/settlement';
const axios = RequestBaisicService.create(path);

const create = function (_settlement){
    return axios.post('/create', _settlement);
};

const byElectricityMeterNumber = function(_number){
    return axios.get('/byElectricityMeterNumber/' + _number);
}

export default {create, byElectricityMeterNumber}