let userscore=0;
let compscore=0;
const msg=document.getElementById('result');
const reset=document.getElementById('reset');
 
const you=document.getElementById('user');
const comp=document.getElementById('comp');


 function draw(){
    msg.innerHTML= "match draw. Play again"
    msg.style.backgroundColor="#081b31"
}
function handlingwinner(userwin){
    if(userwin){
        userscore=userscore+1;
        msg.innerHTML= "Winner. play again"
         msg.style.backgroundColor="green"
        console.log("user",userscore)
    }else{
        compscore=compscore+1
         msg.innerHTML= "You Lose. play again"
           msg.style.backgroundColor="red"
        console.log("computer",compscore)
    }
  
    you.innerHTML=userscore;
    comp.innerHTML=compscore;
}

reset.addEventListener(('click') ,()=>{
    userscore=0;
    compscore=0;
    you.innerHTML=userscore;
    comp.innerHTML=compscore;
     msg.innerHTML= "play your move. "
})



const comppart = (option)=>{
    const arr=["paper","rock","scissor"];
    const no=Math.floor(Math.random()*3);
   
   
    if(option===arr[no]){
       draw();
    }
    else{
        let userwin=true;
        if(option==="rock"){
            //scis,paper
           userwin= (arr[no]==="paper") ? true : false;
        }
        else if(option === "scissor"){
            userwin= (arr[no]==="rock") ? false : true;
        }
        else{
            userwin= (arr[no]==="scissor") ? false : true;
        }
        handlingwinner(userwin);
    }
    
}


const userchoice= document.querySelectorAll(".im");
userchoice.forEach((choice)=>{
    choice.addEventListener(('click'),()=>{
       const option=choice.getAttribute("id");
       
       comppart(option)
    })
})

