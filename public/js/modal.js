const loadInModal = async (imgid, title) => {
    $('#imagepreview').attr('src', $('#image-'+imgid).attr('src'));
    $('#modalLongTitle').html(title);
    $('#modalLong').modal('show');
};