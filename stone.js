let userScore = 0;
 let compScore =0;

 let userScorePara = document.querySelector('#your-score')
 let compScorePara = document.querySelector('#comp-score')

 let msgContainer = document.querySelector(".msg-container")
 let msg = document.querySelector('#msg')
 
 const choices = document.querySelectorAll(".choice");

 choices.forEach(
    (choice)=>{
        choice.addEventListener('click',()=>{
                const userChoice = choice.getAttribute("id")
               
                playGame(userChoice);


        })
    }
 );

 const playGame = (userChoice)=>{

    console.log(`user choice is ${userChoice}`);
// GENERATE THE COMPUTER CHOICE 
  let compChoice = generateComputerChoice();
  console.log(compChoice)
  // check win
    winChecker(userChoice ,compChoice );

 }

 const generateComputerChoice = ()=>{
    let options =['rock' , 'paper' , 'scissors']

    let random = ((Math.random()) * 3);
    random = Math.floor(random);
   return options[random]
    
 }

 let winChecker = (userChoice,compChoice)=>{
    
    if(userChoice===compChoice){
        showTie();
        console.log("match is draw")
        //draw
    }else{
        let userWin = true;
        if(userChoice==='rock'){
            userWin = compChoice==='paper' ? false : true;
        }else if(userChoice==='paper'){
            userWin = compChoice==='scissors' ?  false : true;
        }else {
            userWin = compChoice==='rock' ? false : true;
        }

            showWiner(userWin ,userChoice ,compChoice);
        
    }
    
 }

 let showWiner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
       msg.innerText =`${userChoice} beats the ${compChoice}`
       msgContainer.style.backgroundColor = "green"
       msg.style.backgroundColor = 'green'
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor='red'
        msgContainer.style.backgroundColor='red'
        
    }
 }
  
 let showTie =()=>{
    
    msg.innerText ="The Match is Tie"
    msg.style.backgroundColor="purple"
    msgContainer.style.backgroundColor='purple'
 }