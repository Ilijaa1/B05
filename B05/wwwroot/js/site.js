const zvucnikSlika = document.querySelectorAll("#zvucnik");
const audio = document.querySelector("#myAudio");

zvucnikSlika.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        audio.play();
    });
});