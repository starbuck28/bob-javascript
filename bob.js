//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const isShouting = (messageArray) => {
    let checkLetterCase = messageArray.map(element => element.toUpperCase())
    return messageArray.join("") === checkLetterCase.join("")
}

const isQuestion = (messageArray) => {
    return messageArray.find(element => element === "?")
}

export const hey = (message) => {
    let messageArray = message.split("");
    if (isShouting(messageArray) && isQuestion(messageArray)) {
        return "Calm down, I know what I'm doing!"
    } else if (isShouting(messageArray)) {
        return "Whoa, chill out!"
    } else if (isQuestion(messageArray)) {
        return "Sure."
    }
    return "Whatever."
};
