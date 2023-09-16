const cor = document.querySelector(".colore");
const btn = document.querySelector(".btn");

var c = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A"];

btn.addEventListener('click', function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += c[getrandom()];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    cor.textContent = hexColor;
});

var getrandom = function(){
    return Math.floor(Math.random()*c.length);
};
