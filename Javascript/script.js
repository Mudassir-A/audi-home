var hoverblack = document.getElementsByClassName("hoverblack");
var hoverwhite = document.getElementsByClassName("hoverwhite");

for (let i = 0; i < hoverblack.length; i++) {
    hoverblack[i].addEventListener("mouseover", function () {
        hoverblack[i].style.backgroundColor = "#555";
        hoverblack[i].style.transition = "0.3s ease";
    });

    hoverblack[i].addEventListener("mouseout", function () {
        hoverblack[i].style.backgroundColor = "black";
        hoverblack[i].style.color = "white";
        hoverblack[i].style.transition = "0.3s ease";
        hoverblack[i].style.boxShadow = "0px 0px 0px";
        hoverblack[i].style.cursor = "pointer";
    });
}

for (let i = 0; i < hoverwhite.length; i++) {
    hoverwhite[i].addEventListener("mouseover", function () {
        hoverwhite[i].style.color = "#777";
        hoverwhite[i].style.transition = "0.3s ease";
    });

    hoverwhite[i].addEventListener("mouseout", function () {
        hoverwhite[i].style.color = "black";
    });
}
