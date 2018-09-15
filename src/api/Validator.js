const email = function(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email) ? null : 'Email is not correct';
}

const notEmpty = function(field) {
  return !field || field.trim() === '' ? 'Required field' : null;
}

const password = function(pass){
  return (pass.length >= 8 && pass.length <= 32) ? null : 'Password has not corret form. Passwor have to have minimum 8 and maximum 32 characters';
}

const asyncEmail = mail => new Promise((resolve, reject) =>
    setTimeout(() => {
      if (email(mail)) {
        resolve({ error: 'That email is not valid', success: null })
      }
      if (mail === 'reject') {
        reject('Failure while making call to validate username does not exist')
      }
      resolve({
        success: 'Awesome! your username is good to go!'
      })
    }, 2000)
  )

export default {email, password, asyncEmail, notEmpty};
