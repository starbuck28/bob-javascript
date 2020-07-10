const isAQuestion = (message) => {
    return message[message.length - 1] === "?"
}

const matchCharacterArray = (message, regex) => {
    return message.match(regex)
}

const isShouting = (message) => {
    return message === message.toUpperCase()
}

const doesntContainLetters = (message) => {
    let results = matchCharacterArray(message, /[a-zA-Z]/g)
    return results === null
}

const messageIsEmpty = (message) => {
    return /^\s+$/.test(message) || message.length === 0
}

export const hey = (message) => {

    //Checks to see if string only contains letters
    let onlyHasLetters = /^[a-zA-Z]+$/.test(message);
    let onlyHasNumbers = /^[0-9]+$/.test(message);
    // console.log("Has Letters: " + onlyHasLetters)
    // console.log("Only has numbers: " + onlyHasNumbers)

    if (messageIsEmpty(message)) {
        return "Fine. Be that way!"
    }
    if (doesntContainLetters(message) && isAQuestion(message)) {
            return "Sure."
    } else if (doesntContainLetters(message)) {
        return "Whatever."
    } else if (isAQuestion(message) && isShouting(message)) {
            return "Calm down, I know what I'm doing!"
        } else if (isAQuestion(message)) {
            return "Sure."
        } else if (isShouting(message)) {
            return "Whoa, chill out!"
        }
    return "Whatever."
}
