//challenge 1 (if/else):
    //let password = "hello"

function passwordCheck(password) {
    if (password.length < 8) {
        console.log("Password too short!")
    } else {
        console.log("Password confirmed!")
    }
}
passwordCheck("helloworld")

//challenge 2(if/else and switch):

function divisibleBy(num) {
    if (num % 3 == 0 || num % 5 == 0) {
        console.log(`The number ${num} is divisible by 3 or 5`)
    } else {
        console.log(`The number ${num} is not divisible by 3 or 5`)
    } 
}
divisibleBy(9)
divisibleBy(10)
divisibleBy(11)

//challenge 3 (FizzBuzz):

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizz buzz!")
    } else if (num % 3 == 0) {
        console.log("fizz")
    } else if (num % 5 == 0) {
        console.log("buzz")
    } else {
        console.log(num)
    }
}
//fizzBuzz(9)
//fizzBuzz(10)
//fizzBuzz(15)

//challenge 4 (palindrome):

function palindrome(num) {
    reverseNum = num.toString().split("").reverse().join("")
    if (num == reverseNum) {
        console.log("This is a palindrome")
    } else {
        console.log("Not a palindrome")
    }
}
//palindrome(13531)
//palindrome(12345)

//challenge 5:
let time = 12;
let placeOfWork = "Code Nation";
let townOfHome = "Manchester";

if (time == 7) {
    console.log("I am at home")
} else if (time == 8) {
    console.log(`I am communiting to ${townOfHome}`)
} else if (time == 9) {
    console.log(`I have arrived at ${placeOfWork}`)
} else {
    console.log("I am procrastinating...")
}

//challenge 6:
let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let lastVowelIndex = Math.max(myString.lastIndexOf("a"), myString.lastIndexOf("e"), myString.lastIndexOf("i"), myString.lastIndexOf("o"), myString.lastIndexOf("u"))
console.log(lastVowelIndex)
console.log(myString.charAt(lastVowelIndex))


//challenge 7:
function firstAndLast(word) {
    let firstIndex = word.charAt(0)
    let lastIndex = word.charAt(word.length-1)
    if (firstIndex == lastIndex) {
        return true
    } else {
        return false
    }
}
firstAndLast("welcome")
firstAndLast("abba")



//challenge 8:

function twoNumbers(num1, num2) {
    if ((num1 + num2) % 2 == 0) {
        console.log(num1 + num2)
    } else {
        console.log(num1 * num2)
    }
}    
twoNumbers(3, 5)
twoNumbers(5, 7)


//Activity 7: prime numbers
numList = [...Array(21).keys()];
//console.log(numList)

const checkPrime = () => {
    for (let num=0; num < 21; num++) {
        if(num < 2) {
            //console.log("Not a prime number.")
            return false
        }
        for (let i=1; i < 20; i++) {
            if (num % i === 0) {
                //console.log("Not a prime number.")
                return false
            }
        }
        //console.log(`${num} is a prime.`)
        return true
        }   
    }
 
//reverse the string:
const reverseString = (myString) => {
    return myString.split("").reverse().join("");
}

console.log(reverseString("codenation"))