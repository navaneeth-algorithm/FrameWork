let numberType:number = 3;
let stringType:string = 'Hello';
let arrayType:number[] = [2,3,4,2];
let booleanType:boolean = true;

//Diff Between let & var is that 
// var has no type and can be accessible anywhere within function
/*

    function Hello (){
        for(var i =0 ; i<3;i++)
        {
            console.log(i);
        }
        return i; //Here it is valid as anywhere in function i is valid
    };

    But in case of let 
    function Kello (){
        for(let i =0 ; i<3;i++)
        {
            console.log(i);
        }
        return i; //Here it  throws error
    };

*/

/*

    Function act as Object which can be initialized like variable
    Here walk is a function which takes argument as speed
    function can be called similarly as walk(2);
*/
let walk = function (speed:number)
{
    console.log('Walking at speed '+speed);
    
}
walk(2);
/*
    Another way we can write function with arrow
    argument given within paranthesis
    If it has one argument then we can write it as 

    let meditate = level:number=>{
        ....
    }

    If it as only one statement within it, We can write it as

    let meditate = (level:number)=>console.log(''+level);

    can be called as normal function medtate(2);
*/
let meditate = (level:number)=>{
    console.log('meditating at the level of '+level)
};
meditate(2);

let message = (arg:number) =>{
console.log(arg);
};

let TypeInsertion;

TypeInsertion = 'HelloWorld';

let data = (<string>TypeInsertion).endsWith('H');
let anotherData = (TypeInsertion as string).endsWith('data');

/*

Here point is a object with x & y as member.But if it has many Member
then it is difficult to include everything within parameter.So
we will introduce Interface.
*/

let ObjectFunction = (point:{x:number,y:number}) =>{
    console.log(point.x);
};

ObjectFunction({
    x:1,
    y:2
});

/*
    Interface defines the template for circleObj
    Follow Naming Convention
    Also we can reuse it AnyWhere again within program.
*/  
interface Circle{
    radius:number;
    x:number;
    y:number;
    draw: () => void;
};

//Here circleFunction is a Function Object
let circleFunction = (circleObj:Circle) =>{
    
    return circleObj.radius;
};



//import will include the module rectandle from relative path


import {Rectangle} from './rectangle';





/*

Interface win above example causes cohesion which will be coming in 
    OOPS concept
    It says, the related concepts should be grouped together
    Above we see interface point and draw point are related to each other 
    but is written separately.
    So Class come into existence.

*/

/*Rectangle is class
    oneRectangle is object
    oneRectangle is instance of class
    Think class as Human and object as one individual.
    Property of object as color,height and weight of a person.
    Method of class as eating,walking etc actions


Here Rectangle Object is created using Rectangle type
and we have to allocate memory by initialising oneRectangle 'new Rectangle()'

We can assign oneRectangle directly by new Rectangle() without giving type
compiler can infer from assgn that what type it is 
*/

//let oneRectangle:Rectangle = new Rectangle();

let oneRectangle = new Rectangle(2,3);

/*  Here set parameter is extra method, so what if there is method which will
    Initialise the property at the creation of object.
    So there comes Constructor;Constructor is method with reserved keyword constructor.
    Above Rectangle() is a constructor.We have not defined it, but it exists
    by default in all class.
    If we want to have a parameter, along with it then we can define our own
    constructor with constructor()

    If we want to make constructor with no parameter, we have seen in c# &
    java we can define morethan one constructor.But here in typescript we cannot.
    So we can do this by Optional parameter
    constructor(height?:number,width?:number);
*/
//oneRectangle.setParameter(2,3); //Replace with constructor

oneRectangle.draw();

/*
    Both of them are same But later set the height by assgn
    as set keyword is used
*/
oneRectangle.setHeight(3);
oneRectangle.height =4;

console.log(oneRectangle.getDistance(oneRectangle));

//By default distance is Undefined as it is not Initialised
console.log(oneRectangle.distance);
