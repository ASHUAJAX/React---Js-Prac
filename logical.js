// 1. vowels count in string

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const splitedStr = str.split("");

  const vowelsCountsInString = splitedStr.reduce((acc, elm) => {
    if (vowels.includes(elm)) {
      acc++;
    }
    return acc;
  }, 0);
  console.log(vowelsCountsInString);
}

countVowels("aeiou");

// 2. reverseString
function reverseString(str) {
  let value = str.split("").reverse().join("");
  //   .reduce((acc, elm) => {
  //     acc += elm;
  //     return acc;
  //   }, "");
  console.log(value);
}

reverseString("snake");

// 3. palidrome check
function isPalindrome(str) {
  const strArrReversed = str.split("").reverse().join('');
  let value = "it's palindrome";

  if(strArrReversed !== str){
    value = "it's not palindrome";
  }

//   for (let i = 0; i < strArrReversed.length; i++) {
//     let reversedElm = strArrReversed[i];
//     let strArrElm = strArr[i];
//     if (strArrElm === reversedElm) {
//       value = "it's a palindrome";
//     } else {
//       value = "it's not a palindrome";
//       break;
//     }
//   }

  console.log(value);
}

isPalindrome(`kayak`);

//4. remove Duplicates from arr and return new arr ;
function removeDuplicates(arr) {
  let value =   arr.reduce((acc,elm)=>{
    if(!acc.includes(elm)){
        acc.push(elm);
    }
    return acc;
    },[]);

    console.log(value);
}

removeDuplicates([1,2,3,4,1,5,7]);


