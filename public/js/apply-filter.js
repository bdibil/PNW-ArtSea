const applyFilterHandler = async (event) => {
    var categoryFilterEl = document.querySelector('#category');
    var artistNameFilterEl = document.querySelector('#artists');

    const category = parseInt(categoryFilterEl.options[categoryFilterEl.selectedIndex].value)+1;
    const artistName = artistNameFilterEl.options[artistNameFilterEl.selectedIndex].value;

    var url = '/?';

    console.log("applyFilterHandler("+category+"+, "+artistName+")");
    if(category !== 0) {
        url += '&category='+category;
    }
    if(artistName !== 0) {
        url += '&artist='+artistName;
    }

    document.location.replace(url)
};

document.querySelector('#applyFilter').addEventListener('click', applyFilterHandler);


