//
//b();
//console.log(a);
//
//var a = 'Hello world'
//
//function b(){
//    console.log('called b!');
//}

//var a="helwlerew";
//console.log(a);
//
//if(a === undefined){
//    console.log('a is undefined');
//}
//else {
//    console.log('a is defined');
//}

//function b(){
//    console.log('called b!');
//}
//
//b();
//
//console.log(a);
//var a = 'heelo world';
//
//console.log(a);

//function a(){
//    b();
//}
//
//function b(){
//    c();
//}
//
//function c(){
//    console.log(d);
//}
//
//a();
//var d;
//when a() is called it is added to the execution stack

//function waitThreeSeconds(){
//    var ms = 3000 + new Date().getTime();
//    while(new Date() < ms){}
//    console.log('finished function');
//}
//
//function clickHandler(){
//    console.log('click event!');
//}
//
//document.addEventListener('click', clickHandler);
//waitThreeSeconds();
//console.log('finished execution');

//
//var a = undefined + undefined;
//console.log(a);

//var person = new Object();
//person["firstname"] = 'Tony';
//console.log(person["firstname"]);
//console.log(person.firstname);
//person.address = new Object();
//person.address.zip = "73003";
//console.log(person.address);
//console.log(person.address.zip);
//
//
//var person = {
//    firstname: "tony",
//    lastname: "Jeff",
//    address: {
//        street: "1506 taurus dr",
//        zip: "73003"
//    }
//};
//
//console.log(person);
//
//console.log({
//    firstname:"Jeff",
//    lastname:"gruenbaum"
//});
//
//var greet = "hello";
//var greet = "hola";
//
//console.log(greet);

//
//function greet(){
//    console.log("hi");
//}
//
//greet.language = "english";
//console.log(greet); //outputs the code
//console.log(greet.language); //outputs english



//By Value
//var a = 3;
//var b = 3;
//b = a; //These variables pass by value
//a = 2;
//console.log(b);
//console.log(a);

//By Reference (all objects, including functions)
//var c = {greeting: 'hi'};
//var d;
//d = c;
//c.greeting = "Hello";
//console.log(c);
//console.log(d); //both variables pointing at c object
//function changeGreeting(obj){
//    obj.greeting = 'Hola'; //mutate
//}
//changeGreeting(d);
//console.log(c);
//console.log(d);//both variables output hola
//
////equals operator sets up new memory space (memory address) 
//c = {greeting:'howdy'};
//console.log(c);
//console.log(d);


//function a (){
//    console.log(this);
//    this.newvariable = "testing";
//}
//
//var b = function(){
//    console.log(this);
//}
//
//console.log(this);
//a();
//b();
//console.log(newvariable); //'this' refers to window object because it is the most outer object

//This points at a different object in this example
//var c = {
//    name: 'the c object',
//    log: function () {
//        this.name = "change name for this c object";
//        console.log(this);
//    }
//};
//
//c.log();


//in this example, this object points to outer window. Many people consider it a flaw in javascript
//
//var c = {
//    name: 'The c object',
//    log: function(){
//        this.name = 'update c object';
//        console.log(this);
//        var setname = function(newname){
//            this.name = newname;
//        };
//        setname("updated again. the c object");
//        console.log(this);
//    }
//}
//
//c.log();
//console.log(window); //this will display the name variable created in the setname function
//this can be solved by setting a 'var self = this'
//change var setname = function(){ var self = this; ...}


//var arr = [
//    1,false,
//    {
//        name:'Tony',
//        address: '111 Main st',
//    },
//    function(name){
//        var greeting = "hello";
//        console.log(greeting);
//    },
//    "hello"
//];
//console.log(arr);
//arr[3](arr[2].name);


//function greet(firstname, lastname, language){
//    language = language || 'en'; //sets the default value
//    
//    if(arguments.length === 0){
//        console.log("Missing parameters!");
//        console.log("------------");
//        return;
//    }
//    
//    console.log(firstname);
//    console.log(lastname);
//    console.log(language);
//    console.log(arguments);
//    console.log("--------");
//} 
//greet();
//greet('John');
//greet('John', 'Tim', "spanish");

//function greet(firstname, lastname, language){
// language = language || 'en';
//    if (language === 'en'){
//        console.log('hello' + firstname + ' ' + lastname);
//    }
//    if (language === 'es'){
//        console.log('hola' + firstname + ' ' + lastname);
//    }
//}
//
//function greetEnglish(firstname, lastname){
//    greet(firstname, lastname, 'en');
//}
//
//function greetSpanish(firstname, lastname){
//    greet(firstname,lastname,'es');
//}
//
//greetEnglish('John', 'Doe');
//greetSpanish('John', 'Doe');
//




//functional programming
//*************************** super userful
//never create a for loop to loop through a array again
function MapForEach(arr, fn){
    var my_array = [];
    for(var i=0; i < arr.length; i++){
        my_array.push(fn(arr[i]))
    }
    return my_array;
}

var arr1 = [1,2,3];

var arr2 = MapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2)

var arr_bool = MapForEach(arr1, function(item){
    if (item === 2)
        return true;
    else
        return false;
});

console.log(arr_bool);