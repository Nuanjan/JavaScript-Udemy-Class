/*var Person = function(name,year,job){
    this.name = name;
    this.year = year;
    this.job = job;
}

Person.prototype.calculateAge = function(year){
    age = 2019-year;
    return age;
}

var john = new Person('John',1990,'Professor');

var agejohn = john.calculateAge('1990');

console.log(agejohn);
*/




//closure

/*
function jobInterview(job){
    
    return function(n) {
        
    if(job === 'designer'){
        console.log(n + ' love the job?');
    } else if (job === 'teacher'){
        console.log(n + ' love to teach?');
    } else {
        console.log(' What you love to do? ' + n);
        
    }
    }
    
}

var jobForTeach = jobInterview('teacher');
var jobForDesign = jobInterview('designer');

jobForTeach('Jane');
jobForDesign('Jack');

*/


//coding challenge 7



(function(){
    function Question (question, choice,answer){
    this.question = question;
    this.choice = choice;
    this.answer = answer;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    for(let i = 0; i < this.choice.length; i++) {
        console.log(i+': '+this.choice[i]);
    }
}

Question.prototype.displayAnswer = function(ans){
    if(ans === this.answer){
        console.log('you got the correct answer!');
        point +=1;
        console.log('your point is '+point);
    }else if(ans!== this.answer){
        console.log('Not correct, Try Again');
        console.log('your point is '+point);
    }else if(ans === 9){
        console.log('Exist game');
    }else
        console.log('the number not in the chioce')
}

var point = 0;
var q1 = new Question('What is Johnny Depp afraid of?',['ducks','clowns','bananas'],1); //clowns
var q2 = new Question('Washington police officers get a half hour class in how to what?',['sitdown','sleep','eat'],0); //sitdown
var q3 = new Question('California you can\'t legally buy a mousetrap without having a what?',['Fishig License','Hunting License',
    'Dog Psychologist license'],1); //Hunting License
var q4 = new Question('In the French vineyards, it\'s illegal to do what?',['Land a Flying Saucer','Pee on the side walk','chewing a gum'],0); // Land a Flying Saucer
var q5 = new Question('In Texas it\'s illegal to swear in front of a what?',['priest','cops','corpse'],3); //corpse
var q6 = new Question('In South Dakota it\'s illegal to fall down and sleep where?',['a Soup Factory','a Cheese Factory','a Meat Factory'],1); //a Cheese Factory
var q7 = new Question('It\'s illegal in Georgia to do what with a fork In 1961?',['Eat fried chicken by utensil','Play guitar at the park','swimming during sunset'],0); //Eat fried chicken
var q8 = new Question('game, what was the first puck used made out of?',['Frozen cow manure','maple leaves','cacoon shell'],0);//Frozen cow manure
var q9 = new Question('In Minnesota it is illegal to tease what type of animal?',['donkey','sloth','Skunk'],2); //Skunk
var q10 = new Question('In Kansas it\'s illegal to eat cherry pie with what?',['French Toast','Pizza','Ice Cream'],2);//Ice Cream

let arrQ = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

function continuePlay(){
while(ans!=9){
let randomNum = Math.floor(Math.random()*arrQ.length);
   
arrQ[randomNum].displayQuestion();

var ans = parseInt(prompt(arrQ[randomNum].question+'\n'+arrQ[randomNum].choice+'\n'+'Please Select the correct answer or type 9 to end the game.'));
arrQ[randomNum].displayAnswer(ans);
}
}
continuePlay();
})();


