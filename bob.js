//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let messageArray = message.split("");
  //check for all uppercase letters
  let checkLetterCase = messageArray.map(element => element.toUpperCase())
  console.log(checkLetterCase)
 if (messageArray.join("") == checkLetterCase.join("")) {
   return "Whoa, chill out!"
 }
  return "Whatever."
};
