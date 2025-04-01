const choices=["rock","paper","scissors"];
const playerdis=document.getElementById("playerdis");
const compdis=document.getElementById("compdis");
const resdis=document.getElementById("resdis");
const player_score=document.getElementById("player_score");
const comp_score=document.getElementById("comp_score");
let playerscore="";
let compscore="";

function play(playerchoice)
{
    const compchoice=choices[Math.trunc(Math.random()*3)]
    // console.log(compchoice);
    result="";
    if (playerchoice===compchoice)
    {
       result="IT'S A TIE"; 
    }
    else 
    {
        switch(playerchoice)
        {
            case "rock":
                result=compchoice==="scissors"?"YOU WON":"YOU LOSE";
                break;
            case "paper":
                result=compchoice==="rock"?"YOU WON":"YOU LOSE";
                break;
            case "scissors":
                result=compchoice==="paper"?"YOU WON":"YOU LOSE";
                break;
        }
    }
    playerdis.textContent=`Player : ${playerchoice}`;
    compdis.textContent=`Computer : ${compchoice}`;
    resdis.textContent=`${result}`;
    resdis.classList.remove("green","red");

    switch(result)
    {
        case "YOU WON":
            resdis.classList.add("green");
            playerscore++;
            player_score.textContent=`Player Score : ${playerscore}`;
            break;
        case "YOU LOSE":
            resdis.classList.add("red");
            compscore++;
            comp_score.textContent=`Computer Score : ${compscore}`;
            break;
    }
}
