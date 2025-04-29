interface User {
    id: number
    subscription: string | number[]
}

// Exemple 1

const subscriptionAsStr = {
    id: 1,
    subscription: "netflex",
}

const castedStatisifies = subscriptionAsStr satisfies User
const castedStatic: User = subscriptionAsStr

// Could call String method, even if could be number[]. 
castedStatisifies.subscription.toUpperCase()
castedStatic.subscription.toUpperCase()


// Exemple 2

const subscriptionAsStrArray = {
    id: 1,
    subscription: [1, 2],
}

const castedEx2Statisifies = subscriptionAsStrArray satisfies User
const castedEx2Static: User = subscriptionAsStrArray

// Impossible to call String methood because subscription is typeof number[]
castedEx2Statisifies.subscription.toUpperCase()
castedEx2Static.subscription.toUpperCase()
