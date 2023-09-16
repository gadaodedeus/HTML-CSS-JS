const btns = document.querySelectorAll(".btn");
const nameUser = document.querySelector(".name");
const career = document.querySelector('.career');
const review = document.querySelector(".review");
const photo = document.querySelector(".profile-pic");
const namesList=["Samuel Herrera", 'Salim Abudab', 'Roberta Silva'];
const careerList=["Web Dev",'Musician',"Dentist"]
const reviewList=['This game is simply a 4/5. The only negative that I can say about this game is that it is only set up so that you can play it in 2 player mode. It is a perfect game for 3 and 4 player games, but you have to buy 2 copies to play 2 player mode. Also if you want to play two-player head-to-head, then you have to buy 4 copies of the game.','Rated 3.96 out of 5 by Mike from Not bad! Im extremely happy with this product. First, it is in the comfort pink shade. Not to mention the fact that it is also washable, natural and is a great price.','I like this stuff. Its a lot cheaper than I thought I would. There are a few minor flaws I made with my reviews...but more than a few small holes. I like what you have though! Best product Ive ever had and will buy again. Good work.']

var i=0;
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const current_btn = e.currentTarget.classList;
        
        if(current_btn.contains('preview'))
        {
            i--
        }
        else if(current_btn.contains('next'))
        {
            i++
        }
        else{
            i=Math.floor(Math.random()*namesList.length)
        }
        career.textContent=careerList[i%careerList.length]
        nameUser.textContent=namesList[i%(namesList.length)]
        review.textContent=reviewList[i%(reviewList.length)]
        photo.src="perfil"+((i%namesList.length)+1)+".jpeg"
    })
})