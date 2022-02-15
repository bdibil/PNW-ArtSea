async function likeArt(imgId) {
    const toggleColorClass = "text-danger";

    const postBody = JSON.stringify({
        action: document.getElementById("like-"+imgId).classList.contains(toggleColorClass) ? "remove" : "add",
        artid: imgId
    });

    const postResponse  = await (await fetch('/api/addRemoveLikes', {
        method: 'POST',
        body: postBody,
        headers: {'Content-Type': 'application/json'}
    })).json();

    if(postResponse.msg === "Cannot Like while logged out") {
        alert(postResponse.msg);
    }
    else {
        document.getElementById("like-"+imgId).classList.toggle(toggleColorClass);
        document.getElementById("num-likes-"+imgId).innerHTML = postResponse.count + " likes";
    }
}