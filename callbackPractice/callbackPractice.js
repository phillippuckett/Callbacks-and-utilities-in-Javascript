/*//In this repo your job is to write functions to make each 
//function call work properly.
//Below is a sample problem 
//----------------------------------------------------------------------------------EXAMPLE
//code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

//and what you should write is the sayHi function 
//that makes the code above work, 
     
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });*/

//----------------------------------------------------------------------------------NOTES
/*function executioner(cb) {
    return cb();
};

var silly = function(){
    console.log('Hello');
};
executioner(silly);

function phraseGenerator(str, cb) {
    return "the name's " + cb(str);
}

function stringReturner(a) {
    return a;
}

phraseGenerator('gabe', stringReturner);*/

//----------------------------------------------------------------------------------P I   
//Code Here for first 

/*var first = function(arr, cb) {
    return cb(arr[0]);
};
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var prob1 = first(names, function(firstName){
  console.log('The first name in names is ' + firstName); 
});

console.log(prob1);*/

//----------------------------------------------------------------------------------P II
//Code Here for last

/*
var last = function(arr, cb) {
    return cb(arr[6]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var prob2 = last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

console.log(prob2);
*/

//----------------------------------------------------------------------------------P III
//Code Here for multiply
/*
var multiply = function(four, three, callbck) {
    callbck(four * three);
}

function cb(answer){
  console.log('The answer is ' + answer);
}

var prob3 = multiply(4, 3, cb);
*/

//----------------------------------------------------------------------------------P IV
//Code Here for contains
var contains = function() {
    for (var i = 0; i < names.length; i++) {
        var arr: [];
        return 
    }
}

//create a callback that takes the array, takes theindex of the parameter, and returns it "indexOF"

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

//----------------------------------------------------------------------------------P V
//Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//----------------------------------------------------------------------------------P VI
//Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

//----------------------------------------------------------------------------------P VII
//code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
