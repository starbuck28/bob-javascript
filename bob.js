const isAQuestion = (message) => { return message[message.length - 1] === "?" }

const matchCharacterArray = (message, regex) => { return message.match(regex) }

const isShouting = (message) => {
    return everythingIsUppercase(message) && !doesNotContainLetters(message)
}

const everythingIsUppercase = (message) => { return message === message.toUpperCase() }

const doesNotContainLetters = (message) => {
    return matchCharacterArray(message, /[a-zA-Z]/g) === null
}

const messageIsEmpty = (message) => {
    return /^\s+$/.test(message) || message.length === 0
}

const messageEndsInSpace = (message) => {
    return message[message.length -1] === " "
}

export const hey = (message) => {
    if (messageIsEmpty(message)) {return "Fine. Be that way!"}

    while (messageEndsInSpace(message)) {
        message = message.slice(0, -1)
    }

    if (isAQuestion(message) && isShouting(message)) {
        return "Calm down, I know what I'm doing!"
    } else if (isShouting(message)) {
        return "Whoa, chill out!"
    } else if (isAQuestion(message)) {
        return "Sure."
    }
    return "Whatever."
}
