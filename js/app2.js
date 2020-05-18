const negodyai = {
    name: 'Chikatilo',
    age: 69,
    isMurderer: true,
    gangstaLevel: 0,
    'a naxuy?': 'prost))0',
    ['key_' + (1+3)]: 'computed key',
    greet() {
        console.log('Zdarova detiwki)))') 
    },
    info()  {
        console.info('Info about:\t', this.name)
    }
}
const fib = [1, 1, 2, 3, 5, 8, 13, 21]
console.log(negodyai.name)
console.log(negodyai['age'])
console.log(negodyai['a naxuy?'])
negodyai.greet
console.log(negodyai['key_4'])
negodyai['key_4'] = undefined
console.log(negodyai['key_4'])
delete negodyai['key_4']

const {name, age: hisAge, gangstaLevel = 1} = negodyai
console.log(name, hisAge, gangstaLevel)

for (let key in negodyai){
    console.log(key, ':\t\t\t', negodyai[key])        
}
// SHIT ETO DERMO ЕЩЕ МОЖЕТ ВДРУГ ЗАГЛЯНУТЬ В ПРОТОТИП
// ТАК ЧТО НУЖНО ПРОВЕРЯТЬ:
for (let key in negodyai) {
    if (negodyai.hasOwnProperty(key)) {
        console.log(key, ':\t\t\t', negodyai[key])
    }
}
// А ЛУЧШЕ ВООБЩЕ ЧЕСАТЬ КЛЮЧИ ПРИ ПОМОЩИ ЭТОГО:
// const keys = Object.keys(negodyai)
// keys.forEach(key => {
//     console.log(key, ':\t\t\t', negodyai[key]) 
// })

const logger = {
    keys() {
        console.log(`Object keys:\t${Object.keys(this)}`)
    },

    keysAndVals(int) {
        Object.keys(this).forEach(function() {
            console.log(`${int} ${key}:\t\t\t${this[key]}`)
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-------START-------')
        }
        Object.keys(this).forEach( (key, i, array) => {
            console.log(`${key}:\t\t\t${this[key]}`)
            if (between && (i!==array.length-1)) {
                console.log('-------------------')
            }
        })
        if (bottom) {
            console.log('--------END--------')
        }
    }
}
// bind() задает контекст для this
// const bound = logger.keys.bind(negodyai)
// bound()
// call() может сразу юзать ее так вот
// logger.withParams.call(negodyai, true, true, true)
// apply() может так же, но:
logger.withParams.apply(negodyai, [true, true, true])

// const timeout = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)
// // clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log('After interval')
// }, 500)
// // clearInterval(interval)

// const delayed = (callback, wait = 2000) => {
//     setTimeout(callback, wait)
// }

// delayed( () => {
//     console.log('Posle 2 sekund')
// }, 2000)

const delayed = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve()
            // reject('rejected?? FFUCK!')
        }, wait)
    })
    return promise
}

delayed(2500)
    .then( () => {
        console.log('Posle 2 sekund')
    })
    .catch( err => console.error('ERROR: ',err))
    .finally(() => console.log('.finally()'))

    delayed(500)

const getData = () => new Promise( resolve => resolve(fib))
getData().then(data => console.log(data))

async function asinka() {
    try {
        await delayed(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e){
        console.log(e)
    } finally {
        console.log('Finally')
    }
}
asinka()