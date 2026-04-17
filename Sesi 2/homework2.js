const arrayOfWords = ['cucumber', 'tomatoes', 'avocado']
const complicatedArray = ['cucumber', 44, true]

function makeAllCaps(arrayOfWords){
    return new Promise((resolve, reject) =>{
        if(arrayOfWords.every((word) => {return typeof word === 'string'})){
            const uppercaseArray = arrayOfWords.map((word)=>{
                return word.toUpperCase()
            })
            resolve(uppercaseArray)
        } else {
            reject("An Error Has Occured")
        }
    })
}

function sortWords(array){
    return new Promise((resolve, reject) => {
        const sorted = array.sort()
        resolve(sorted)
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then(result => {console.log(result)})
.catch(error => {console.log(error)})

makeAllCaps(complicatedArray)
.then(sortWords)
.then(result => {console.log(result)})
.catch(error => {console.log(error)})
