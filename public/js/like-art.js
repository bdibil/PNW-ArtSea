async function likeArt(imgId) {
    const toggleColorClass = "text-danger";
    document.getElementById("like-"+imgId).classList.toggle(toggleColorClass);

    const postBody = JSON.stringify({
        action: document.getElementById("like-"+imgId).classList.contains(toggleColorClass) ? "add" : "remove",
        artid: imgId
    });

    const postResponse  = await (await fetch('/api/addRemoveLikes', {
        method: 'POST',
        body: postBody,
        headers: {'Content-Type': 'application/json'}
    })).json();

    document.getElementById("num-likes-"+imgId).innerHTML = postResponse.count + " likes";

}