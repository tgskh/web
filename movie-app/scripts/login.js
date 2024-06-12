const loginButton = document.querySelector('.login-button');
const loginInput = document.querySelector('.login-input');
const loginForm = document.querySelector('.login-form');
const loginConfirm = document.getElementById('login-confirm');

loginButton.addEventListener('click', showLogin);
loginInput.addEventListener('click', showLogin);
loginConfirm.addEventListener('click', openApp);


function showLogin () {
  loginInput.style.transform = 'translateY(0px)';
  loginForm.style.transform = 'translateY(-1000px)';
}

function openApp () {
  const loginEmail = document.getElementById('login-email')
  const loginPassword = document.getElementById('login-password');

  if (!loginEmail.value || !loginPassword.value) {
    alert('Please input login cred');
    return;
  }

  if (loginEmail.value === 'demo' && loginPassword.value === 'demo') {
    window.location.href = "./watch-app.html";
  } else {
    alert('Invalid cred')
  }
}
