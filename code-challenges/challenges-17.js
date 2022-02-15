'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    let arr=[];
    for (let index = int1; index >=0; index-=int2) {
      
        arr.push(index)
    }
    arr.push(arr[arr.length-1]-int2);

    for (let index = arr[arr.length-1]; index< int1; index+=int2) {
      if(index==arr[arr.length-1]){
          continue;
      }
        arr.push(index)
    }
    arr.push(int1);
    return arr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    let output="";
    let end;
    let start= str.indexOf("www" );
     if(str.indexOf(".com")!=-1){
  end=str.indexOf(".com");
     }
     else if(str.indexOf(".org")!=-1){
          end=str.indexOf(".org");  
     }
     else if(str.indexOf(".net")!=-1){
          end=str.indexOf(".net");  
     }
 
     for (let index = start; index <end+4; index++) {
         output=output+str[index]
     }
     return output;
   
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
   if(str==null||str==" "){
    return true;
   }
    const regex = /[A-z]/gi;
    let result = str.match(regex);
    result.join('');
    let newString=result.join('').toLowerCase();
    for (let index = 0; index < newString.length/2; index++) {
        if (newString[index]!=newString[newString.length-1-index]) {
       return false;
        }
      
        
    }
    return true;
    
}
// ------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };