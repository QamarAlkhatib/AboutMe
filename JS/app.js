'use strict'
let score=0;

let username = prompt("What is your Name?")
alert("welcome, " + username);
document.write("Nice to see you here " + username + "!");

    let firstAnswer = prompt('First Question: Do you think Im a strange person? ', 'yes/no');

    switch(firstAnswer.toLowerCase()){
    case 'yes':
    alert("You are Correct!");
    score++;
    break;

    case 'no':
    alert("Not close enough");
    break;

    default:
        alert("You shoud answer the question with yes or no!");
        break;
    }

   
        let SecAnswer = prompt('Second Question: Do you think I like coding? ', 'yes/no');
        switch(SecAnswer.toLowerCase()){
        case 'yes':
        alert("You are Correct!");
        score++;
        break;
    
        case 'no':
        alert("Not close enough");
        break;
    
        default:
            alert("You shoud answer the question with yes or no!");
            break;
        }
   
            let ThiAnswer = prompt('Third Question: Do you think I like debates?', 'yes/no');
        
            switch(ThiAnswer.toLowerCase()){
            case 'yes':
            alert("No, you are wrong");
            break;
        
            case 'no':
            alert("You are Correct!");
            score++;
            break;
        
            default:
                alert("You shoud answer the question with yes or no!");
                break;
    
               }
   
          
                let foAnswer = prompt('fourth Question: Do you think I\m an athletic person? ', 'yes/no');
            
                switch(foAnswer.toLowerCase()){
                case 'yes':
                alert("You are Correct!");
                score++;
                break;
            
                case 'no':
                alert("Not close enough");
                break;
            
                default:
                    alert("You shoud answer the question with yes or no!");
                    break;
                }
          
          
                    let fivAnswer = prompt('fifth Question: Do you think Im a good reader? ', 'yes/no');
                
                    switch(fivAnswer.toLowerCase()){
                    case 'yes':
                    alert("You are Correct!");
                    score++;
                    break;
                
                    case 'no':
                    alert("Not close enough");
                    break;
                
                    default:
                        alert("You shoud answer the question with yes or no!");
                        break;
                   }

                   let sixthAnswer = Number(prompt("Sixth Question: How old am I? ",'numbers only'))
                   let attempts = 4;
                   while (attempts) {
                    for (let i = 0; i <= attempts; i++) {
                        if (sixthAnswer > 25) {
                            alert('You are too high!');
                            break;
                        } else if (sixthAnswer < 15) {
                            alert('You are too low!');
                            break;
                        } 
                        else if (sixthAnswer == 19) {
                            alert('you are to close!');
                            break;
                        }
                        else if (sixthAnswer == 20) {
                            alert('you are Correct!');
                            break;
                        } 
                        else {
                            alert('You are Wrong!');
                            break;
                        }
                    }
                    
                   attempts -= 1;
                      if (sixthAnswer == 20) {
                      break;
                      }

                 sixthAnswer = prompt('Please try again you have: ' + attempts + ' Only');
            }
                 if (sixthAnswer != 20) {
              alert('You didnt guessed');
              alert('The correct answer was 20 ');
             }


                    let guessAct = ['gym', 'eating', 'watching my classes', 'music'];
                    let sevAnswer = Number(prompt("Seventh Question: Guess my favorite activity in my day, You have only 6 attempts"))
                    
                    for (let j = 1; j<= 6; j++){
                         for(let y = 0; y < guessAct.length; y++){
                               if(sevAnswer.toLowerCase() === guessAct[y].toLowerCase){
                                alert('Great!, You guessed')
                                break;
                               } 
                               else{
                                   alert("Try again")
                               }
                            }
                            if(sevAnswer.toLowerCase() !== guessAct[y].toLowerCase){

                                alert('The correct answer was one of those Gym, music, eating');
                            }
                                       
                        
                    }

                    alert(' Thank you for playing this game ' + username + '  your score from 7 is  '+ score);
                