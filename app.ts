interface User {
    id: number
    subscription: string | number[]
}

// Exemple 1

const resolutionAsStr = {
    id: 1,
    subscription: "netflex",
}

const castedStatisifies = resolutionAsStr satisfies User
const castedStatic: User = resolutionAsStr

// Could call String method, even if could be number[]. 
castedStatisifies.subscription.toUpperCase()
castedStatic.subscription.toUpperCase()


// Exemple 2

const resolutionAsStrArray = {
    id: 1,
    subscription: [1, 2],
}

const castedEx2Statisifies = resolutionAsStrArray satisfies User
const castedEx2Static: User = resolutionAsStrArray

// Impossible to call String methood because subscription is typeof number[]
castedEx2Statisifies.subscription.toUpperCase()
castedEx2Static.subscription.toUpperCase()
