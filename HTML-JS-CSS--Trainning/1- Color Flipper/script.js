const cor = document.querySelector(".colore");
const btn = document.querySelector(".btn");

var c = ["red", "gold", "green", "blue", "white"];

btn.addEventListener('click', function(){
    var i = getrandom();
    console.log(i);
    document.body.style.backgroundColor = c[i];
    cor.textContent = c[i];
});

var getrandom = function(){
    return Math.floor(Math.random()*c.length);
};
