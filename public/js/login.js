const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input-login').value.trim();
  const password = document.querySelector('#password-input-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    var res = await response.json();

    console.log("response = "+JSON.stringify(res));

    if (response.ok) {
      // document.location.replace('/');
      alert('Login Successful');
    } else {
      alert(res.message);
    }
  }
};

document.querySelector('.login-form')
  addEventListener('submit', loginFormHandler);
