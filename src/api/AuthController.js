import AbstractController from './AbstractController.js';

const path = '/auth';

const signin = function(_login, _password) {
  console.log('signin: login: ' + _login + ' password: ' + _password);
  return AbstractController.post(path, '/signin', {login: _login, password: _password});
}

export default {signin};
