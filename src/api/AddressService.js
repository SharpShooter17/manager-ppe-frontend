import RequestBaisicService from './RequestBaisicService.js';

const path = '/address';
const axios = RequestBaisicService.create(path);

const getByPostalCodeLike = function (_postalCode){
    return axios.get('/' + _postalCode);
};

export default {getByPostalCodeLike}