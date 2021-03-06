'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
     
    if (str.lastIndexOf(" ")!=0)
    {return str.slice(str.lastIndexOf(" ") + 1) //the slice  divid it in space  and rtertn the position of the word after last  SPACE
}
    else{
        return str;
    }
     
    
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    const words = str.split(' ');
    return words[words.length-1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
  let arrSre=str.split(" ");
  let newArr=[];
  let strN="";
  arrSre.forEach(element => {

      switch (element){
          case "I":
            newArr.push("We"); 
            break;  
            case "am":
            newArr.push("are"); 
            break;  
            case "was":
            newArr.push("were");
            break;  
           
            default:
            newArr.push(element);

      }
      
  });
  
  newArr.forEach(element => {
      if(strN==""){
        strN=element;   
      }
      else{
        strN=strN+" "+element;
      }
  
      
  });
  return strN;
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    let strN="";
   let I=0;
    arr.forEach(element => {
        I++;
        if(strN==""){
          strN=element;   
        }
        else if(I==6) {
            strN=strN+", "+element;
        }
        
        else{
          strN=strN+" "+element;
        }
        if(arr.length==5&&I==5){
            strN=strN+",";

        }
    
        
    });

    return strN;
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
   let array= str.split("");
   let prev="";
   let NewARR=[];
   let rt="";
   let count=0;
//   array.forEach(element => {

//    if(element==prev){
// count++;

//    }
//    else  if( element!=prev&& element!=" "){
//     count++;
//     NewARR.push(element+count);
//     count=0;
//    }

//    else{
//     NewARR.push(element+count);
//     count=0;

//    }
//    prev=element;
   
      
//   });





  for (let index = 0; index < array.length; index++) {
    let element=array[index];
   if(element==prev&&array[index+1]==element){
    count++;
    
       }
       else  if( element!=prev&&array[index+1]==element&&element!=" "){
        count++;
        
       
       }
       else  if( element==prev&&array[index+1]!=element&&element!=" "){
        count++;
        console.log("hi");
        NewARR.push(element+count);
        count=0;
       
       }
       else  if( element!=prev&&array[index+1]!=element&&element!=" "){
        count++;
        NewARR.push(element+count);
        count=0;
       }
       else{
        NewARR.push(element);
       }

    
      
       prev=element;
       console.log(prev+count);
      
  }

  NewARR.forEach(element => {
    rt=rt+element;
    
});
  return rt;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };