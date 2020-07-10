const isAQuestion = message => { return message.endsWith("?") }

const isShouting = message => {
    return everythingIsUppercase(message) && !doesNotContainLetters(message)
}

const everythingIsUppercase = message => { return message === message.toUpperCase() }

const doesNotContainLetters = message => { return message.match(/[a-zA-Z]/g) === null }

const messageIsEmpty = message => { return /^\s+$/.test(message) || message.length === 0 }

export const hey = message => {
    if (messageIsEmpty(message)) { return "Fine. Be that way!" }

    message = message.trim()

    if (isAQuestion(message) && isShouting(message)) {
        return "Calm down, I know what I'm doing!"
    } else if (isShouting(message)) {
        return "Whoa, chill out!"
    } else if (isAQuestion(message)) {
        return "Sure."
    }
    return "Whatever."
}
