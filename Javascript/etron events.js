function scrolle() {
    a = window.pageYOffset;
    b = document.getElementById("d1").style.opacity;
    if (a > 950) {
        document.getElementById("d1").style.opacity = "1";
        document.getElementById("d2").style.opacity = "0.5";
        document.getElementById("d2").style.backgroundImage = "url('./Images/1.png')";
    }
    if (a > 1050) {
        document.getElementById("d1").style.opacity = "0.5";
        document.getElementById("d2").style.opacity = "0.4";
        document.getElementById("d2").style.backgroundImage = "url('./Images/2.png')";
    }
    if (a > 1060) {
        document.getElementById("d1").style.opacity = "0.4";
        document.getElementById("d2").style.opacity = "0.6";
        document.getElementById("d2").style.backgroundImage = "url('./Images/3.png')";
    }
    if (a > 1070) {
        document.getElementById("d1").style.opacity = "0.3";
        document.getElementById("d2").style.opacity = "0.8";
        document.getElementById("d2").style.backgroundImage = "url('./Images/4.png')";
    }
    if (a > 1080) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/5.png')";
    }
    if (a > 1090) {
        document.getElementById("d1").style.opacity = "0";
        document.getElementById("d2").style.opacity = "1";
        document.getElementById("d2").style.backgroundImage = "url('./Images/6.png')";
    }
    if (a > 1110) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/5.png')";
    }
    if (a > 1130) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/6.png')";
    }
    if (a > 1150) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/7.png')";
    }
    if (a > 1160) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/8.png')";
    }
    if (a > 1190) {
        document.getElementById("d2").style.backgroundImage = "url('./Images/9.png')";
    }
    if (a < 1000) {
        document.getElementById("d1").style.opacity = "1";
        document.getElementById("d2").style.opacity = "0";
        document.getElementById("d2").style.backgroundImage = "url('./Images/1.png')";
    }
}
