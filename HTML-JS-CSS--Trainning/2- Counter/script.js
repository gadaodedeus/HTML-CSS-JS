const Btn = document.querySelectorAll(".btn");
const num = document.querySelector(".num");
var n=0;

Btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const current_btn = e.currentTarget.classList;
        if(current_btn.contains('increase'))
        {
            n++;
            num.textContent=n;
        }
        else if(current_btn.contains('decrease'))
        {
            n--;
            num.textContent=n;
        }
        else
        {
            n=0;
            num.textContent=n;
        }
        color_num(n)
    })
});

const color_num = function(n){
    if(n>0)
    {
        num.style.color = 'green'
    }
    else if(n<0)
    {
        num.style.color = 'red'
    }
    else
    {
        num.style.color = 'black'
    }
}