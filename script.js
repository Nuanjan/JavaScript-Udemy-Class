/*var firstname = 'John';
//console.log(firstname);
var lastname = 'Smith';
var age = 28;
var fullAge = true;
//console.log(fullAge);
var job;
//console.log(job);
job = 'teacher';
//console.log(job);
var isMarried;
isMarried = false;

//aleert pop up 
alert(firstname+' '+lastname+' '+' is '+age+' years old is he married? '+isMarried);

//get data from user

var lastName = prompt('What is his lastname?');
console.log(firstname+' '+lastName);

ageJoh = 28;
ageTom = 33;
var yearBorn = 2018;
var yearJoh = yearBorn - 28;
var yearTom = yearBorn - 33;
console.log(yearJoh);
console.log(yearTom);

var johOlder = ageJoh > ageTom;
console.log(johOlder);

//type of operarotr
console.log(typeof johOlder);
console.log(typeof ageJoh);


//logical operator


var johnHeight  = 186;
var markHeight = 180;

var johnMass = 67;
var markMass = 70;


var bmiJohn = johnMass / (johnHeight * johnHeight);
var bmiMark = markMass / (markHeight * markHeight);

var isGreater = bmiJohn < bmiMark;
console.log('Is Mark'+''+'s BMI higher than John?'+isGreater);

var firstName = 'John';
var cilvilStatus = 'single';
if (cilvilStatus==='married') {
    console.log(firstName+' is married');
}else{
    console.log(firstName+' is single');
}

var isMarried = true;
if (isMarried){
    console.log(firstName+' is married yeah');
}else{
    console.log(firstName+' is single yeah');
    
}

var johnAve = (0+0+0)/3;
var mikeAve = (150+180+130)/3;
var maryAve = (150+150+130)/3;

if(johnAve>mikeAve&&johnAve>maryAve){
    console.log('john team win'+' with average score = '+johnAve);
}else if(mikeAve>johnAve&&mikeAve>maryAve){
     console.log('Mike team win'+' with average score = '+mikeAve);
}else if(maryAve>johnAve&&maryAve>mikeAve){
     console.log('Mary team win'+' with average score = '+maryAve);
}else if(johnAve==maryAve&&johnAve>mikeAve&&maryAve>mikeAve){
     console.log('john and Mary team both win'+' with the same average score = '+johnAve);
}else if(johnAve==mikeAve&&johnAve>maryAve&&mikeAve>maryAve){
     console.log('john and Mike team both win'+' with the same average score = '+johnAve);
}else if(maryAve==mikeAve&&maryAve>johnAve&&mikeAve>johnAve){
     console.log('Mike and Mary team win'+' with the same average score = '+maryAve);
}else if(johnAve==maryAve&&maryAve==mikeAve&&johnAve==mikeAve){
     console.log('3 teams trie'+' with the same average score = '+johnAve);
}else 
     console.log('error calculate score');
     


function CalculateTip(bill) {
    
    if(bill < 50){
        return bill * 0.2;
    }else if(bill >= 50 && bill <= 200){
        return bill * 0.15
    }else if(bill > 200){
        return bill * 0.1;
    }
    
    
    
}
var bill = [124, 48, 268];
var tips = [CalculateTip(bill[0]),
           CalculateTip(bill[1]),
           CalculateTip(bill[2])];

var total = [bill[0]+tips[0],
             bill[1]+tips[1],
             bill[2]+tips[2]];

console.log('the bill are '+bill+'the tips are '+tips+' total pay is '+total);

var john = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 150,
    height : 2.0,
    calBmiJohn: function () {
   this.bmi = this.mass/(this.height*this.height);
    
}
};

var mark = {
    firstName : 'Mark',
    lastName : 'Lee',
    mass :160,
    height : 2.0,
    calBmiMark: function(){
    this.bmi = this.mass/(this.height*this.height);
}
};

john.calBmiJohn();
mark.calBmiMark();

compareBmi(mark,john);
function compareBmi(mark,john){
    if(john.bmi < mark.bmi) {
        console.log(mark.firstName+' '+mark.lastName+' has greater BMI, BMI: '+mark.bmi);
        
    }else if(john.bmi > mark.bmi) {
        console.log(john.firstName+' '+john.lastName+' has greater BMI, BMI: '+john.bmi);
    }else if(john.calBmiJohn() == mark.calBmiMark()){
        console.log(mark.firstName+' '+mark.lastName+
                    ' and '+john.firstName+' '+john.lastName+' has the same BMI, BMI: '+mark.bmi);
    }else{
        console.log('error compare');
    }
}


var jonh = ['John','Smith',1990,'designer',false,'blue'];
for(var i = jonh.length; i >=0;i--){
    console.log(jonh[i]);
}
*/

// create object with the bill value.
var john = {
    fullName : 'John',
    bills : [124, 48, 268, 180, 42],
    calTip: function () {
    this.tip = [];
    this.billTip = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var bill = this.bills[i];
            var percent;
            if(bill < 50){
                percent = 0.2;
            }else if(bill >= 50 && bill <= 200){
                percent = 0.15;
            }else 
                percent = 0.1; 
        
        // Add the result to the corrresponing arrays.
        this.tip[i] = bill * percent;
        this.billTip[i] = bill + bill * percent;
        }
        
   
    }
}


var mark = {
    fullName: 'Mark',
    bills: [77,375,110,45],
    calTip: function () {
    this.tip = [];
    this.billTip = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var bill = this.bills[i];
            var percent;
            if(bill < 100){
                percent = 0.2;
            }else if(bill >= 100 && this.bills[i] <= 300){
                percent = 0.15;
               
            }else 
                percent = 0.25;     
        
        
        this.tip[i] = bill * percent;
        this.billTip[i] = bill + bill * percent;
        }
    }
}


mark.calTip();
console.log(mark);
john.calTip();
console.log(john);

function CalAvg (tip) {
   var sum = 0;
    for( var i = 0; i < tip.length;i++){
        sum += tip[i];
    }
    return sum / tip.length;
}

john.average = CalAvg(john.tip);
mark.average = CalAvg(mark.tip);
console.log(john,mark);

if(john.average > mark.average){
    console.log(john.fullName + '\'s family pays higher tips, with an average of $ ' + john.average);
} else{
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $ ' + mark.average);
}
    