const scorePlayer1=document.querySelector('.ply1')
const scorePlayer2=document.querySelector('.ply2')
const btnPlayer1=document.querySelector('.btn1')
const btnPlayer2=document.querySelector('.btn2')
const reset=document.querySelector('.reset')

//console.log(scorePlayer1,scorePlayer2,btnPlayer1,btnPlayer2)
const targetvalue=60
let curScorePlayer1=0
let curScorePlayer2=0
let flag=1
reset.addEventListener('click',function(){
    curScorePlayer1=0;
    curScorePlayer2=0;
    scorePlayer1.textContent=0;
    scorePlayer2.textContent=0;
    flag=1;
})
btnPlayer1.addEventListener('click',function(){
    if(!flag){
        alert('wrong Player');
        return;
    }
    flag=0;
    
    
    curScorePlayer1+=Math.trunc(Math.random()*10)-1
    scorePlayer1.textContent=curScorePlayer1

    if(curScorePlayer1>=targetvalue){
        alert(`Playeer 1 is winner ${curScorePlayer1}`)

    }
})
btnPlayer2.addEventListener('click',function(){
    if(flag){
        alert('wrong Player');
        return;
    }
    flag=1;
    curScorePlayer2+=Math.trunc(Math.random()*10)-1
    scorePlayer2.textContent=curScorePlayer2

    if(curScorePlayer2>=targetvalue){
        alert(`Playeer 2 is winner ${curScorePlayer2}`)

    }
})