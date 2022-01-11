// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday\, I want to ${activity}!`
}

const mondayWork = function(action = 'go to the office') {
    return `This Monday\, I will ${action}.`
}

function wrapAdjective(symbol = '*') {
    // return `${specialChar} You are ${specialChar} `
    function innerFunction(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`
    }
    return innerFunction;
}