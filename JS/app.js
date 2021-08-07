'use strict';
let score = 0;

let username = prompt('What is your Name?');
alert('welcome, ' + username);
document.write('Nice to see you here ' + username + '!');

function FirstQuestion(){

    let firstAnswer = prompt('First Question: Do you think Im a strange person? ', 'yes/no');

    switch(firstAnswer.toLowerCase()){
    case 'yes':
        alert('You are Correct!');
        score++;
        break;

    case 'no':
        alert('Not close enough');
        break;

    default:
        alert('You shoud answer the question with yes or no!');
        break;
    }
}

FirstQuestion();

function SecondQuestion(){

    let SecAnswer = prompt('Second Question: Do you think I like coding? ', 'yes/no');
    switch(SecAnswer.toLowerCase()){
    case 'yes':
        alert('You are Correct!');
        score++;
        break;

    case 'no':
        alert('Not close enough');
        break;

    default:
        alert('You shoud answer the question with yes or no!');
        break;
    }
}

SecondQuestion();

function ThirdQuestion(){

    let ThiAnswer = prompt('Third Question: Do you think I like debates?', 'yes/no');

    switch(ThiAnswer.toLowerCase()){
    case 'yes':
        alert('No, you are wrong');
        break;

    case 'no':
        alert('You are Correct!');
        score++;
        break;

    default:
        alert('You shoud answer the question with yes or no!');
        break;
    }
}

ThirdQuestion();

function FourthQuestion(){

    let foAnswer = prompt('fourth Question: Do you think I\'m an athletic person? ', 'yes/no');

    switch(foAnswer.toLowerCase()){
    case 'yes':
        alert('You are Correct!');
        score++;
        break;
    case 'no':
        alert('Not close enough');
        break;

    default:
        alert('You shoud answer the question with yes or no!');
        break;
    }
}

FourthQuestion();

function FifthQuestion(){

    let fivAnswer = prompt('fifth Question: Do you think Im a good reader? ', 'yes/no');



    switch(fivAnswer.toLowerCase()){
    case 'yes':
        alert('You are Correct!');
        score++;
        break;

    case 'no':
        alert('Not close enough');
        break;

    default:
        alert('You shoud answer the question with yes or no!');
        break;
    }
}

FifthQuestion();

function SixthQuestion(){

    let sixthAnswer = Number(prompt('Sixth Question: How old am I? ','numbers only'));
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
            else if (sixthAnswer === 19) {
                alert('you are to close!');
                break;
            }
            else if (sixthAnswer === 20) {
                alert('you are Correct!');
                score++;
                break;
            }
            else {
                alert('You are Wrong!');
                break;
            }
        }

        attempts -= 1;
        if (sixthAnswer === 20) {
            break;
        }

        sixthAnswer = prompt('Please try again you have: ' + attempts + ' Only');
    }
    if (sixthAnswer !== 20) {
        alert('You didnt guessed');
        alert('The correct answer was 20 ');
    }

}

SixthQuestion();


function QuestionSeven(){


    let activity = ['gym', 'eating', 'watching movie'];



    for (let i = 1; i <= 6; i++){
        let sevenAnswer = prompt('Question seven: Guess my favorite activity in my day, You have only 6 attempts');
        sevenAnswer = sevenAnswer.toLowerCase();

        for (let j = 0; j < activity.length; j++){

            if(sevenAnswer === activity[j]){

                alert('You have guessed');
                score++;
                i =7;
                break;
            }
        }
        if (i !== 7) {
            alert('Incorrect answer');
        }

        if(i === 6){
            alert('You have take all the attempts');
        }
    }
    alert('my favorite activity was those: '+ activity);

alert(' Thank you for playing this game ' + username + '  your score is '+ score + ' from 7');

}

QuestionSeven();


// alert('my favorite activity was those: '+ activity);

// alert(' Thank you for playing this game ' + username + '  your score is '+ score + ' from 7');


