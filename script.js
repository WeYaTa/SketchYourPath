function onSignIn() {
  // alert('Haloooo');

  var emailInput = document.getElementById('email');
  if (emailInput.value == '') {
    emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // red, opacity 20%
  }

  var passInput = document.getElementById('password');
  if (passInput.value == '') {
    passInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
  }

  if (emailInput.value != '' && passInput.value != '') {
    alert('Email: ' + emailInput.value + '\nPassword: ' + passInput.value);
  }
}

function onTyping() {
  var emailInput = document.getElementById('email');
  if (emailInput.value !== '') {
    emailInput.style.backgroundColor = 'white';
  }

  var passwordInput = document.getElementById('password');
  if (passwordInput.value !== '') {
    passwordInput.style.backgroundColor = 'white';
  }
}
