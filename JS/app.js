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
                    alert(' Thank you for playing this game ' + username + '  your score from 5 is  '+ score);
          
                    
                
        