import RequestBaisicService from './RequestBaisicService.js';
import Cookies from 'js-cookie'

const path = '/auth';

const signin = function(_login, _password) {
  console.log('signin: login: ' + _login + ' password: ' + _password);

    var result = RequestBaisicService.post(path, '/signin', {login: _login, password: _password})
            .then(response => {
              if (response.status === 200){
                Cookies.set('token', response.data.accessToken, {expiries:1});
                Cookies.set('tokenType', response.data.tokenType, {expiries:1});
                return true;
              } else {
                Cookies.set('token', null, {expiries:1});
                Cookies.set('tokenType', null, {expiries:1});
                return false;
              }
            });

  return result;
}

const isLogged = function(){
  return Cookies.get('token') != null  || Cookies.get('token') === "undefined";
}

export default {signin, isLogged};
