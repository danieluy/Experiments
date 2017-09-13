const GoogleAuth = require('google-auth-library');
const auth = new GoogleAuth;
const CLIENT_ID = require('../config/google-auth.json').CLIENT_ID
const client = new auth.OAuth2(CLIENT_ID, '', '');

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    client.verifyIdToken(
      token,
      CLIENT_ID,
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
      (err, login) => {
        if (err)
          reject(err)
        else {
          const payload = login.getPayload();
          // const userid = payload['sub'];
          // If request specified a G Suite domain:
          //const domain = payload['hd'];
          console.log(payload)
          console.log(Date(payload.exp))
          resolve(payload.sub)
        }
      }
    );
  })
}

module.exports = { verifyToken }