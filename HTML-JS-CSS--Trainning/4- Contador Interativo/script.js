const table = document.querySelector(".table");
const num = document.querySelector(".counter");
i = 0;

table.addEventListener('click', function handleClick(event){
    i++;
    num.innerHTML = i;
    var divinsert = document.createElement('img');
    divinsert.setAttribute('src', 'img2.png')
    //divinsert.setAttribute('class', 'dot');
    divinsert.style.left = -16 + event.clientX + "px";
    divinsert.style.top =  +window.scrollY -26 + event.clientY + "px";
    table.appendChild(divinsert);


    console.log(window.pageYOffset);
});
