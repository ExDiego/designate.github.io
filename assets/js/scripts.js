

function goBack() {
    window.history.back();
}


function zoomImage() {
    const img = document.getElementById('zoomable-image');
    if (img.classList.contains('zoomed')) {
        img.classList.remove('zoomed');
    } else {
        img.classList.add('zoomed');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggle-text").addEventListener("click", function() {
        var mobileText = document.getElementById("mobile-text");
        if (mobileText.classList.contains("show")) {
            mobileText.classList.remove("show");
        } else {
            mobileText.classList.add("show");
        }
    });
});
