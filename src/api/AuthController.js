import AbstractController from './AbstractController.js';

class AuthController extends AbstractController {
    constructor(){
      super('/auth')
    }

    signin(_login, _password){
      return super.post('/signin', {login:_login, password:_password});
    }

};

const authController = new AuthController();

export default {authController};
