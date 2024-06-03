
const button = document.getElementsByClassName('btn')[0];
button.addEventListener('click', function () {
    const random = "#" + parseInt(Math.random() * 16452236).toString(16);
    document.body.style.backgroundColor = random;
    const head = document.getElementsByClassName('head')[0];
    head.innerText = "Background Color: " + random;
})
