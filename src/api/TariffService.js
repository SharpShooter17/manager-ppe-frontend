import RequestBaisicService from './RequestBaisicService.js';

const path = '/tariff';
const axios = RequestBaisicService.create(path);

const create = function (tariff) {
    console.log(tariff);
    return axios.post('/create', {
        code: tariff.code,
        tariffList: tariff.tariffList
    });
};


const getAll = function () {
    return axios.get('/getAllTariffs');
};

const byNameLike = function (_name) {
    if (_name.length < 0){
        return getAll();
    }
    return axios.get('/getTariff/' + _name);
};

const getByCode = function (_code) {
    return axios.get('/' + _code);
};

export default {create, byNameLike, getAll, getByCode}