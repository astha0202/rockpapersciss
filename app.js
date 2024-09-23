alert("let's play a game !");
let usersco=0;
let compsco=0;

const Choices= document.querySelectorAll(".choice");
const message=document.querySelector("#message");
const compscore=document.querySelector("#compsco");
const userscore=document.querySelector("#usersco");
const msg=document.querySelector("#msg");

//computer choice 
const compchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomindx=Math.floor(Math.random()*3);
    return options[randomindx];;
}

//user choice 
const playgame=(userchoicee)=>{
    console.log("user choice is",userchoicee);
    const compchoicee=compchoice();
    console.log("computer choice is",compchoicee);
    if(compchoicee==userchoicee){
        console.log("draw");
        message.innerText="game was draw";
        message.style.backgroundColor="yellow";
    }
    if(compchoicee=="rock" && userchoicee=="paper"){
        console.log("won");
        message.innerText="wooohhooo! congrats you won";
        msg.style.backgroundColor="green";
        usersco++;
        userscore.innerText=usersco;
    }
    if(compchoicee=="rock" && userchoicee=="scissors"){
        console.log("lost");
        message.innerText="oops! better luck next time";
        message.style.backgroundColor="red";
        compsco++;
        compscore.innerText=compsco;
    }
    if(compchoicee=="paper" && userchoicee=="rock"){
        console.log("lost");
        message.innerText="oops! better luck next time";
        message.style.backgroundColor="red";
        compsco++;
        compscore.innerText=compsco;
    }
    if(compchoicee=="paper" && userchoicee=="scissors"){
        console.log("won");
        message.innerText="wooohhooo! congrats you won";
        message.style.backgroundColor="green";
        usersco++;
        userscore.innerText=usersco;
    }
    if(compchoicee=="scissors" && userchoicee=="rock"){
        console.log("won");
        message.innerText="wooohhooo! congrats you won";
        message.style.backgroundColor="green";
        usersco++;
        userscore.innerText=usersco;
    }
    if(compchoicee=="scissors" && userchoicee=="paper"){        
        console.log("lost");
        message.innerText="oops! better luck next time";
        message.style.backgroundColor="red";
        compsco++;
        compscore.innerText=compsco;
    }
}
Choices.forEach((choice)=>{
    const userchoice=choice.getAttribute("id");
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        playgame(userchoice);
    })
})
