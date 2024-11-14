
// problem1
function calculateStrikeRate(balls,runs){

    return (runs / balls) * 100;

}

let strikRate = calculateStrikeRate(30,45)
console.log(`the strik Rate: ${strikRate}`)



// problem2

 function CountPairFunction(string){
  let counnt = 0;
  for(let i =0; i<string.length; i+=2){
    if(string[i+1]%2 === 0){
      counnt++
    }
  
   
  }
  return counnt

 }


 let pair = CountPairFunction('a1b2c3d4e5f6')

 console.log(pair)



//  problem

function reverseFunction(string){
  let stringBox = ''
  for(let i=string.length-1;i >= 0;i--){
    stringBox += string[i]
  }
  return stringBox;


}

let reverseString = reverseFunction('Hello')
console.log(reverseString)


// problem4

function isPalindrome(str){

  let reversed = str.split('').reverse().join('');
  if( reversed == str){
    return `${str} is a palindrome`
  }
  else{
    return `${str} is not a palindrome`
  }
   
}

let string = isPalindrome('peep')
console.log(string)


// problem5

function mergeArrays(arr1,arr2){
  let array = arr1.concat(arr2)
  array.sort((a,b)=>a-b)
  return array;

}

let concatenateArrays = mergeArrays([1, 2, 3], [4, 5, 6]
  )

  console.log(concatenateArrays)


// problem6

function findShortestWord(sentence){

  let words = sentence.split(' ')
  let shortestWord = [0]
  
  for (let i = 0; i < words.length; i++){
    if(words[i].length < shortestWord.length){
      shortestWord = words[i]
    }
    return shortestWord
    

    }
}
let shortestWord = findShortestWord(' quick brown fox jumps over the lazy dog')

  console.log(shortestWord)
