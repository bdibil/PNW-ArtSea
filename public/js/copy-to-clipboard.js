function copyToClipboard() {
    let copyText = document.getElementById("share-link");
    navigator.clipboard.writeText(copyText.innerHTML).then(r => alert("Registry share link copied to clipboard"));
}