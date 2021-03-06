const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert("Logged out");
        document.location.replace('/');
    } else {
        alert("Failed to log out");
    }
};

const getNavBarElements = async () => {
    const response = await fetch('/api/users/getUserInfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    let res = await response.json();
    let returnHtml = `<a href="/">ArtSea</a><a href="/about-us">About Us</a>`;

    if (response.ok) {
        if(res.user == "User") {
            returnHtml += `<a href="/my-registry" id="my-registry">My Registry</a>`
            returnHtml += `<a href="#" id="logout-link">Logout</a>`
        } else if(res.user == "Artist") {
            returnHtml += `<a href="/my-registry" id="my-registry">My Registry</a>`
            returnHtml += `<a href="/my-art">My Art</a>`
            returnHtml += `<a href="/upload-art">Upload Art</a>`
            returnHtml += `<a href="#" id="logout-link">Logout</a>`
        } else if(res.user == "LoggedOut") {
            returnHtml += `<a href="/login">Login</a>`
        } else {
            alert(res.user);
        }
    } else {
        alert("Unable to get user type");
    }

    const navBar = document.getElementsByTagName('nav')[0];
    navBar.innerHTML = returnHtml;
    document
    .querySelector('#logout-link')
    .addEventListener('click', logout);
};

getNavBarElements();

