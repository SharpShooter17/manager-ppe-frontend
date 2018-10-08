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

const byNumber = function (_number) {
    return axios.get('/' + _number);
};

const downloadEstimateReport = function (tariffCode, emNumber) {
    axios.get('/estimateReport/' + emNumber + '/' + tariffCode, {
        responseType: 'blob',
        headers: {
            Accept: "application/pdf",
        }
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
};

export default {create, byPpePhysicalId, byNumber, downloadEstimateReport}
