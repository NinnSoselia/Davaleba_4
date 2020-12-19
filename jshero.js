// Variables
let firstname= 'Lata';

// What is x?
'Geeta'

// Several variables Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple

let flower = 'rose';
let tree = 'maple';

// Which value does x have after execution of the following code?
// let x = 'Tic';
// x = 'Tac';
// x = 'Toe';

'Toe'

// Assign variables
// Which value does x have after execution of the following code?
// let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z;

'Hardy'

// Functions
// Exercise
// Define a function hello that returns 'Hello world!'.

function hello() {
    return"Hello world!";
    }

// Multiple functions 
// Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.

function a() {
    return 'Hello a!';
    }
    function b() {
    return 'Hello b!';
    }

//     Function calls
//     1. Define a function greet returning the value 'Haydo!'.
// 2. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.
function greet() {
    return 'Haydo!';}
    
    let salutation = greet();

    // Which value does x have after execution of the following code?
    // function hello() {
    //     return 'Hi!';
    //   }
      
    //   let x = hello();
      'Hi!'

    //   Parameters
    //   Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
    function echo(Greta){
        return Greta;
        }
        let result = echo('CO2');

//  Which value does x have after execution of the following code?
// function reply(phrase) {
//   return phrase;
// }

// let x = reply('How do you do?');

'How do you do?'

// Strings
// Write a function greet having one parameter and returning 'Hello <parameter>!'.

// Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.

function greet(name){
    return 'Hello ' + name + '!';
    }

//     Which value does x have after execution of the following code?
// function whereIs(name) {
//   return 'Where is ' + name + '?';
// }

// let x = whereIs('Jacky');
'Where is Jacky?'

// Which value does x have after execution of the following code?
// function hi(name) {
//   return 'Hi ' + name + '!';
// }

// let h1 = hi('Selva');
// let h2 = hi('Pola');
// let x = h1 + ' ' + h2;
'Hi Selva! Hi Pola!'

// Logging
// Write a function log that logs 'Hello Console!'. If you are working with a desktop browser, open the developer tools to see the output there as well.

function log() {
    console.log('Hello Console!');
    }

    // Logging variables
    // Write a function log, that takes a parameter and logs this parameter.
    // Example: log('Ken Thompson') should log 'Ken Thompson'.

    function log(value){
    console.log(value);
        }

        // Logging and Strings
        // Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.


        function shout(value){
            let result = value+value;
            console.log (result);
            return result;
            }
            // Which value does x have after execution of the following code?
            // function double(name) {
            //   return name + ' and ' + name;
            // }
            
            // let x = double('Roy');

            'Roy and Roy'

            // String: length
            // Write a function length that takes a string and returns the number of characters of the string.
            // Example: length('sun') should return 3.
            function length(sun){
                return sun.length
                }

//                 String: toUpperCase()
//                 Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

// Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.


                function toCase(Mthatha){
                    return Mthatha.toLowerCase() + '-' +Mthatha.toUpperCase();
                    }

                    // String: charAt()
                    // Write a function shortcut that takes two strings and returns the initial letters of theses strings.

                    // Example: shortcut('Amnesty', 'International') should return 'AI'.
                    function shortcut(name1, name2){
                        return name1.charAt(0) + name2.charAt(0);
                        }

//                         String: trim()
//                         Write a function firstChar, which returns the first character that is not a space when a string is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(name) {
    let trimmedName = name.trim();
    return trimmedName.charAt(0);
  }

//   String: indexOf()
// Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

// Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.
function indexOfIgnoreCase(word1, word2){
    let word1Lower = word1.toLowerCase();
    let word2Lower = word2.toLowerCase();
    return word1Lower.indexOf(word2Lower);
    
    }

//     Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.

// Example: firstWord('see and stop') should return 'see'.

function firstWord(seeandstop){
    let seeandstop = "see and stop";
    return 'see and stop'.substr(0,3);
    }

//     Write a function normalize, that replaces '-' with '/' in a date string.

// Example: normalize('20-05-2017') should return '20/05/2017'.

function normalize(data){
    let data1 = '20-05-2017';
    return data1.replace('-', '/');
    }

    // Write a function add that takes two numbers and returns their sum.

    // Example: add(1, 2) should return 3.
    function add(x, y){
        return x+y;
        }

//         Which value does x have after execution of the following code?
// let x = 3;
// x++;
// x = x * 2;
// x--;
x=7

// Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

// Example: toFahrenheit(0) should return 32.
function toFahrenheit(c){
    return 1.8 * c + 32;
    }

//     Write a function onesDigit that takes a natural number and returns the ones digit of that number.

// Example: onesDigit(2674) should return 4.

function onesDigit(n){
    return n % 10;
  }


//   Parentheses
//   Write a function mean that takes 2 numbers and returns their mean value.

// Example: mean(1, 2) should return 1.5.

function mean(x, y){
    return (x+y)/2;
    }
    