function copyToClipboard() {
    let copyText = document.getElementById("share-link");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Registry share link copied to clipboard");
}