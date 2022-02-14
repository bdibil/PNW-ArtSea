async function addToRegistry(btn) {
    const artPieceId = btn.value;

    const userInfoResponse = await (await fetch('/api/users/getUserInfo', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })).json();

    const userId = userInfoResponse.userId

    const postBody = JSON.stringify({
        userid: userId,
        artid: artPieceId
    });

    const postResponse  = await (await fetch('/api/addToRegistry', {
        method: 'POST',
        body: postBody,
        headers: {'Content-Type': 'application/json'}
    })).json();

    window.alert(postResponse);
}
//if not logged in must give an alert saying "Login first"