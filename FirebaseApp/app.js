(function () {
  "use strict"

  var output = document.getElementById('output')
  var list = document.getElementById('list')
  var inputSubmit = document.getElementById('input')
  var inputId = document.getElementById('character-id')
  var inputName = document.getElementById('name')
  var inputEmail = document.getElementById('email')
  var inputImkageUrl = document.getElementById('imageUrl')

  var characters = null

  var dbUsersRef = firebase.database().ref('users/')
  dbUsersRef.on('value', function (snapshot) {
    characters = snapshot.val()
    var DOMString = '<li class="collection-header"><h4>Characters</h4></li>'
    for (var key in characters) {
      if (characters.hasOwnProperty(key)) {
        var character = characters[key];
        DOMString += '<li id="' + key + '" class="collection-item avatar" style="cursor:pointer;">'
          + '<img src="' + character.profile_picture + '" alt="Avatar" class="circle">'
          + '<span class="title"><strong>' + character.username + '</strong></span>'
          + '<p style="pointer-events:none;">'
          + 'Email: <a href="mailto:' + character.email + '">' + character.email + '</a>'
          + '</p>'
          + '</li>'
      }
    }
    list.innerHTML = DOMString
    Object.keys(characters).forEach(function (key) {
      document.getElementById([key]).addEventListener('click', selectUser)
    })
  })

  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('characters/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }

  function selectUser(e) {
    inputId.value = e.target.id
    inputName.value = characters[e.target.id].username
    inputEmail.value = characters[e.target.id].email
    inputImkageUrl.value = characters[e.target.id].profile_picture
    inputImkageUrl.focus()
    inputEmail.focus()
    inputName.focus()
  }

  function createUser() {
    var userId = (inputId.value && inputId.value !== '') ? inputId.value : inputName.value.replace(' ', '').toLowerCase() + "__" + Date.now()
    var name = inputName.value
    var email = inputEmail.value
    var imageUrl = inputImkageUrl.value
    writeUserData(userId, name, email, imageUrl)
    resetInputs()
  }

  function resetInputs() {
    inputName.value = null
    inputEmail.value = null
    inputImkageUrl.value = null
  }

  inputSubmit.addEventListener('click', function (evt) {
    createUser()
  })

})()
