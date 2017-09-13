"use strict"

const output = document.getElementById('output')
const signinButton = document.getElementById('signin-button')
signinButton.addEventListener('click', signIn)

function onSignIn(googleUser) {
  renderUser(googleUser)
}
function renderUser(googleUser) {
  if (googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID token sent to the server:', id_token)
    output.innerHTML =
      `
    <h2>Obtained Google user's basic info</h2>
    <div>
        <img src="${profile.getImageUrl()}" alt="Avatar ${profile.getName()}">
        <p><strong>Name:</strong> ${profile.getName()}</p>
        <p><strong>Email:</strong> ${profile.getEmail()}</p>
        <p>
        <strong>ID:</strong> ${profile.getId()}
        <small>
          <i> (Do not send to your backend! Use an ID token instead)</i>
        </small>
        </p>
    </div>
    `
  }
  else {
    output.innerHTML = ''
  }
}
function signIn() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then(function (googleUser) {
    if (googleUser) {
      sendToken(
        googleUser.getAuthResponse().id_token,
        renderUser.bind(null, googleUser)
      )
    }
  });
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    renderUser()
  });
}
function sendToken(tokenId, callback) {
  const headers = new Headers()
  headers.append('Accept', 'application/json, text/plain, */*')
  headers.append('Content-Type', 'application/json')
  fetch('/api/googlelogin', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ tokenId })
  })
    .then(res => res.json())
    .then(json => {
      if (!json.err)
        callback()
    })
}

window.sendToken = sendToken