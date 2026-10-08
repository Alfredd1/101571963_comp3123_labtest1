function lowerCaseWords(collection) {
    const promise1 = new Promise((resolve, reject) => {
        if(!Array.isArray(collection)) {
            reject('Give an array!')
        }

        collection = collection.filter((word) => typeof word === 'string')
            .map(word => word.toLowerCase())
        ;
        resolve(collection)

    })

    return promise1.then((values) => {
        console.log(values);
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
let result = lowerCaseWords(mixedArray)