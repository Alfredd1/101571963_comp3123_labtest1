function resolvedPromise(message){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your message is " + message)
        }, 500)
    })
}

function rejectedPromise(message){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                reject("Delayed Rejection: " + message)
            } catch(e) {
                console.error(e)
            }
        }, 500)
    })
}

resolvedPromise("Resolve test").then(resolved => {
    console.log(resolved)
})
rejectedPromise("Rejected test")
    .then(resolved => {
    console.log(resolved)
})
    .catch(rejected => {
        console.log(rejected)
    })
