var index = 0;
spin();

function spin() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {index = 1}
    x[index-1].style.display = "block";
    setTimeout(spin, 2000);
}

