var x = "Hello World";

function d(sideDish){
    sideDish = sideDish || "Paneeer";
    console.log("You ordered: "+ sideDish);
}

var company = new Object();


company.Name = "Facebook";
company.CEO = new Object();

company.CEO.Name = "Mark Zuckerberg";
company.CEO.Age = 32
company["$Stock Price"] = 1234;


var Team = {
    Name: "India",
    Captain: "Virat Kohli",
    Batsman: {
        Name: "Rohit Sharma",
        Age: 33
    },
    Coach: "Ravi Shashtri",
    "Physio Name": "Patel"
};


// Function Factory
function makeMultiplier(multiplier){
    var myFunc = function (x){
        return multiplier * x;
    };

    return myFunc;
}


var multiplyBy3 = makeMultiplier(3);


// Pasing function as an arguement

function doOperation(x, operation){
    return operation(x);
}

var result = doOperation(12,multiplyBy3);

console.log(result);


// pass by reference

value = {x:7};

console.log(value);

value2 = value;

console.log(value2);

value2.x = 22;

console.log(value);

// function Constructors (Start function name with Capital letter to make it func constructor)
function Circle(radius){

    this.radius = radius;
}

Circle.prototype.getArea = function(){
    return Math.PI * Math.pow(this.radius,2);
};

var mycircle = new Circle(10);

console.log("Radius : ", mycircle.radius);

console.log("Area of the circle : ", mycircle.getArea());



// Object literals

var literalCircle = {
    radius: 25,

    getArea : function(){
        console.log("------>>>>>", this);
    }
}


literalCircle.getArea();


// Arrays in Javascript

var arr = new Array();

arr[0] = "Vishnu";
arr[1] = 22;
arr[2] = function(name){
    return console.log("Hello" + name);
}
arr[3] = {x: 7};

console.log(arr[2]("Bhatt"));


// Short Hand Array Creation

var a = ["Vishnu Bhatt", 22, 7 ,1995];

console.log(a);



// Namespacesss

var myObject = {};
myObject.myName = "Vishnu"

myObject.printName = function (){
    console.log("My Name is "+ myObject.myName);
};


// Immediately Invoked functions

// Immediately Invoked Functions

(function (){
    console.log("Fuck Corona!!");
})();