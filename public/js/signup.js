const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const firstNameEl = document.querySelector('#first_name-input-signup');
    const lastNameEl = document.querySelector('#last_name-input-signup');
    const usernameEl = document.querySelector('#username-input-signup');
    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    const isArtistEl = document.querySelector('#is_artist');
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstNameEl.value,
        last_name: lastNameEl.value,
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        is_artist: isArtistEl.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    var res = await response.json();

    console.log("response = "+JSON.stringify(res));

    if (response.ok) {
      document.location.replace('/login');
      alert('Signup Successful');
    } else {
      alert(res.message);
    }
    // if (response.ok) {
    //   document.location.replace('/login');
    //   alert('Sign Up Successful');
    // } else {
    //   alert('Failed to sign up');
    // }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  