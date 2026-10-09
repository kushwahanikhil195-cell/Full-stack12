var name = "Rahul";
name="Rahul1"
console.log(typeof name)
console.log(name);
let number = 1234;
number=12345678
console.log(typeof number)
console.log(number);
const city = "Delhi"
console.log(city);
console.log(typeof city)
let e = null;
console.log(typeof e);
let d;
console.log(typeof d);
let f= true;
console.log(typeof f);




console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(4/2);
console.log(5%2);


console.log("normal message");
console.warn("This is a warning");
console.error("This is error");
console.table([{ name: "A" ,score: 90},{name: "B",score:75}]);

console.log(5=="5");//check value
console.log(5==="5");//data type check
console.log(5>5);
console.log(5>=5);

console.log(5<5);
console.log(5<=5);

console.log(5!="5");
console.log(5!=="5");


let age = 25;
console.log(age>18&& age<60);

let age1 = 30;
console.log(age1>19|| age>30);

let a=10;
a++;
console.log(a)
a--
console.log(a)

console.log(2+"hkksm");
// 2+jo string likh hai wah aa jaiga add ho ke 


console.log("5"+"skksjj");
// ya kuchh nahi aata hai 


console.log(true+1);
// ish me true ka binary num 1 hai + 1 = 2 aata hai 

// if (condition){

// }else{
//     defalt
// }


let age2=15;
if (age2>=18){
    console.log("adult");
}else{
    console.log("minor");
}



let marks =75;
if(marks>=90){
    console.log("Grade A+")
}else if (marks>=70){
    console.log("Grade B+")   
}else if (marks>=60){
    console.log("Grade c+")
}
else{
    console.log(" try again")
}


var number1 =10;
if(number1%2===0){
    console.log("even")
}
else{
    console.log("odd")
}


// for (inttialization,condition,incre/decre){
//     //loop body
// }


for(let i=1;i<5;i++){
    console.log(i);
}



let bag="";
for(let i =1; i<=5; i++){
    bag = bag+"i"+" ";
}
console.log(bag);




let bag1="";
for(let i =1;i<=5;i++){
    bag1= bag1+"*"+" ";
}
console.log(bag1);




for(let i=1; i<=5; i++){
    let bag="";
    for(let j=1; j<=5; j++){
        bag = bag+"* ";
    }
    console.log(bag)
}





for(let i=1; i<=5; i++){
    let bag="";
    for(let j=1; j<=i; j++){
        bag = bag+"* ";
    }
    console.log(bag)
}




for(let i=1; i<=5; i++){
    let bag="";
    for(let j=1; j<=i; j++){
        bag = bag+"* ";
    }
    console.log(i)
}




for(let i=1; i<=5; i++){
    let bag="";
    for(let j=1; j<i; j++){
        bag = "* ";
    }
    console.log(bag)
}





for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}





for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 1) {
            pattern += "*";
        } else {
            pattern += "#";
        }
    }

    console.log(pattern);
}




// Q1. Number Staircase
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}


// Q2. Reverse Number Staircase
for (let i = 5; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += i;
    }

    console.log(pattern);
}


// Q3. Alternating Stars and Hash
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        if (i % 2 == 1) {
            pattern += "* ";
        } else {
            pattern += "# ";
        }
    }

    console.log(pattern);
}


// Q4. Same Row Number
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 5; j >= i; j--) {
        pattern += i + " ";
    }

    console.log(pattern);
}


// Q5. Odd Number Pattern
let num = 1;

for (let i = 1; i <= 4; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += num + " ";
        num += 2;
    }

    console.log(pattern);
}



// Q6. Even Number Pattern
let nu = 2;

for (let i = 1; i <= 4; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += nu+ " ";
        nu+= 2;
    }

    console.log(pattern);
}



// Q7. Alternating 0 and 1
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += (i + j) % 2;
    }

    console.log(pattern);
}



// Q8. Alphabet Staircase
let ch = 65;

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += String.fromCharCode(ch) + " ";
        ch++;
    }

    console.log(pattern);
}




// Q9. Reverse Alphabet
let chi = 69; // ASCII value of E

for (let i = 1; i <= 4; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += String.fromCharCode(chi) + " ";
        chi--;

        if (chi < 65) {
            chi = 90; // Z par wapas
        }
    }

    console.log(pattern);
}



// Q10. Border Square
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 5) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }

    console.log(pattern);
}



// Q11. Cross Pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= 5; j++) {
        if (j == i || j == 6 - i) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }

    console.log(pattern);
}




// Q11. plus Pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= 5; j++) {
        if (i == 3 || j == 3) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }

    console.log(pattern);
}



