const uploadArtFormHandler = async (event) => {
    console.log("Here1 "+uploadurl);  //uploadurl defined in upload-art.handlebars
    var title = document.querySelector('#art-title').value;
    var artTypeSelect = document.getElementById("artType");
    const newArtPiece = {
        title: title,
        artType: artTypeSelect.options[artTypeSelect.selectedIndex].value,
        url: uploadurl,
        uploadTimestamp: new Date().getTime()
    }

    const response = await fetch('/api/art/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArtPiece)
    });

    let res = await response.json();

    if (response.ok) {
        alert(res.message);
    } else {
        alert("Unable to create Art");
    }
};

document.querySelector('#submitButton').addEventListener('click', uploadArtFormHandler);


