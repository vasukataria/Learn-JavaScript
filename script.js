/*var firstName ='vasu';
var lastName ='kataria';
console.log(firstName);
var age=23;
var ageInbool=true;
console.log(ageInbool);
var firstName$lastName =('vasu kataria');
console.log(firstName$lastName); 
var status=('single');

console.log(firstName+' is my first name and '+lastName +' is my last name and I am '+age+' year old and my relationship status is ' +status );
alert(firstName+' is my first name and '+lastName +' is my last name and I am '+age+' year old and my relationship status is ' +status );
var office=prompt('In which office vasu works');
console.log('he worked in '+office);

//maths
var now, vasuYear, sakshiYear;
now=2020;
vasuAge=23;
sakshiAge=28;
console.log(now-sakshiAge);
console.log(sakshiAge-vasuAge+'years difference b/w vasu and sakshi age ');

vasuYear= now-vasuAge;
console.log('vasu born in '+vasuYear);
sakshiYear = now-sakshiAge;
console.log(sakshiYear);

//boolean expression
var bigAge;
bigAge=sakshiAge>vasuAge;
console.log(bigAge);

//typeof

console.log(typeof bigAge);
console.log(typeof vasuAge);
console.log(typeof 'my name is khan');
var marks;
console.log(typeof marks);

var now=2020;
var vasu= 1997;
var sakshi=1992;
var votingAge =18;

var valid= now - vasu >= votingAge;
console.log(valid);

var diff= sakshi-vasu;

var johnBmi,markBmi;
var johnMass = 80;
var johnheight = 1.69;

var markMass =75;
var markHeight = 1.50;

johnBmi=johnMass/(johnheight*johnheight);
markBmi=markMass/(markHeight*markHeight);

console.log(johnBmi+' '+markBmi);

var diff = johnBmi>markBmi;
console.log(diff);

// if/else condition 
var now, vasuYear, sakshiYear;
now=2020;
vasuAge=23;
sakshiAge=28;
console.log(now-sakshiAge);
console.log(sakshiAge-vasuAge+'years difference b/w vasu and sakshi age ');

if (sakshiAge>= vasuAge){
    console.log('sakshi\'s is greater then vasu');}
    else{
        console.log('vasu\'s is greater then sakshi');
    }


var johnBmi,markBmi;
var johnMass = 80;
var johnheight = 1.69;

var markMass =75;
var markHeight = 1.90;

johnBmi=johnMass/(johnheight*johnheight);
markBmi=markMass/(markHeight*markHeight);

console.log(johnBmi+' '+markBmi);

if (johnBmi>markBmi)
{
    console.log('john\'s BMI is greater then mark\'s BMI');
}else{console.log('mark\'s BMI is greater then john\'s BMI');
    
}



// ternery operator

var name= 'vasu';
var age = 13;

age>=18? console.log(name+' drink\'s beer') : console.log(name+' drink\'s juice')

//switch statment


var marks=98;
var name='ram';
switch(true){
    case (marks >=90):
        console.log(name+' got A+ grade');
        break;
    case (marks>=80 && marks<=90):
        console.log(name+' got A grade');
        break;
    case (marks>=70 && marks<=80):
         console.log(name+' got B+ grade');
         break;
    case marks>=60 && marks<=70:
         console.log(name+' got B grade');
         break;
    default:
        console.log(name+' failed');
}
    
var smart='men';
switch(smart){
    case 'boy':
        console.log('boys is smart');
        break;
    case ('men'):
        console.log('men is smart');
        break;
    case 'kid':
         console.log('kids is smart');
         break;
    case 'olderMen':
         console.log('older men is smart');
         break;
    default:
        console.log('all human being is smart');
}
//second problem

var johnsAvg, mikeAvg, marryAvg;
var johnsTotal=89+123+103;
var mikeTotal=116+94+123;
var marryTotal=97+134+105

console.log(johnsTotal);
console.log(mikeTotal);
console.log(marryTotal);

johnsAvg= johnsTotal*3/100;
mikeAvg= mikeTotal*3/100;
marryAvg= marryTotal*3/100;

if(johnsAvg>mikeAvg && johnsAvg > marryAvg){
    console.log(johnsAvg+' is john\'s score and he win the match');
} else if(mikeAvg>johnsAvg && mikeAvg > marryAvg){
    console.log(mikeAvg+ ' is mike\'s score and he win the match');
}else if(marryAvg>johnsAvg && marryAvg>mikeAvg){
    console.log(marryAvg+ ' is marry\'s score and he win the match');
}
else{
    console.log('match draw');
}



// functions

function calculateage(birthyear)
{
    return 2020-birthyear;
}

function retirementAge(year,name)
{
    var age = calculateage(year);
    var retirement = 60 - age;
    if (retirement > 0){
    console.log(retirement+' pending year' +' of '+name);
    }else{
        console.log(name+ ' is already retired');
}
}
retirementAge(1997,'vasu');
retirementAge(1995,'rahul');
retirementAge(1994,'rohan');
retirementAge(1948,'rohit');
function total(bills){
//var twenty=bills*0.2;
//var fifteen=bills*0.15;
//var ten= bills*0.1;
var percentage;
if (bills<50){
    percentage=.2;
}else if (bills>50 && bills<200){
    percentage=.15;
}else{
    percentage=.10;
}
    return percentage*bills;
}


var bills=[124,48,268];
/
var tips=[total(bills[0]),total(bills[1]),total(bills[2])];
var bill=      [bills[0] +  tips[0],
                bills[1] +  tips[1],
                bills[2] +  tips[2]];
console.log(tips,bill)

var me = {
    firstName: "vasu",
    lastName: "kataria",
    eductation: "Master in computer application",
    age:23,
    family:['mummy','papa','sisters','brother'],
    job: "Inter at helpfull insight solution"
};
  console.log(me);
 console.log(me['firstName']);
console.log(me.firstName);
me.firstName ="Vasu";
console.log(me);
console.log(me.family[2]);




var Iron_man={
    Name: "Iron man",
    height: 1.557528,
    mass: 75,
    calcBmi: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}

 var hulk={
    Name: "hulk",
    height: 1.8288,
    mass: 75,
    calcBmi: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}   

 Iron_man.calcBmi();
 hulk.calcBmi();
 console.log(Iron_man,hulk);

if (Iron_man.bmi<hulk.bmi){
    console.log(hulk.Name+" have more bmi and his bmi is " +hulk.bmi);
}else if (Iron_man.bmi===hulk.bmi){
    console.log("they both has same bmi");}
else{
    console.log(Iron_man.Name+" have more bmi and his bmi is " +Iron_man.bmi);
} 

var john={
    fullName:"vasu kataria",
    bills:[124,48,268,180,42],
    calcTips: function(){
    this.tips=[];
    this.finalvalues=[];
    for(var i =0; i< this.bills.length; i++)
    {
    var percentage;
    var bill= this.bills[i];
    if(bill<50)
    {
    percentage=.2;
    }
    else if (bill>50 && bill<200){
    percentage=.15;
    }   
    else{
    percentage=.10;
    }
    this.bills[1]= percentage*bill;
    this.finalvalues[i]=bill+percentage*bill;
    }
    
    }
}


john.calcTips();
console.log(john);
**/
var name ='yes';

function first(){
    var A = 'k';
    second();
        var C = A+ " "+name
}
 function second(){
    var l = 'n';
    third();
    var k = l+" "+name;
}
function third(){
    var h = 'p';
        var e = h+" " +name;
}
first();
      
            





















