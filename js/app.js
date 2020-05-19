// // alert('Нажимая Ок, вы даете согласие на кремпай')
// const pow2 = num => num ** 2

// var name = 'Janibek'
// const lastName = '6119'
// const fib = [1, 1, 2, 3, 5, 8, 13, 21]
// let age = 22
// console.log('age: ', age)
// // prompt('貴方の名前は何ですか')==='Heisenberg' ? alert('Youre goddamn right.') : alert('Youre goddamn wrong.')
// const names = ['ちんこ','まんこ','乳首','パンツ'];
// for (let i=0; i<names.length; i++) {
//   console.log(names[i])
// }

// for (let namesi of names) {
//   console.log(namesi)
// }
// names.forEach((item, i) => {
//   console.log(i, ':\t', item)
// });

// const person = {
//   firstName: 'Janibek',
//   lastName: '6119',
//   year: 1997,
//   languages: ['RUS', 'ENG', 'AZE'],
//   greet: function() {
//     console.log('%s says:\teeee cho kak tam', this.firstName)
//   }
// }
// const heroes = [
//   {name: 'Kama', force: 9001},
//   {name: 'Ricardo', force: 6969},
//   {name: 'Sahib', force: 10000}
// ]
// person.languages.push('POL')
// person.languages.unshift('JAP')
// console.log(person)
// person.languages.pop()
// person.languages.shift()
// person.greet()
// console.dir(person.greet)
// // letscount()
// console.log(sumAll(1,3,2,5))

// const pidarazSpray = insultSpray()
// const loxSpray = insultSpray('lubit zhirnie chschleni')
// loxSpray('Nicat')
// pidarazSpray('Farid')
// var voland = 'sator arepo tenet'
// var revoland = voland.split('').reverse().join('')
// console.log(voland.indexOf('arepo'))

// console.log(heroes.findIndex(function(hero, nomer) {
//   console.log('%i:\t', nomer, hero)
//   return hero.force > 9001
// }))
// console.log(heroes.find(function(hero) {              // Анонимная функция
//   return hero.force > 9001
// }))
// const geroi = heroes.find(hero => hero.force > 9001)  // Стрелочная функция
// const geroi0 = heroes.find(() => {                  // Стрелочная функция
//   return true
// })
// const geroiNet = heroes.find(() => false)
// // .findIndex returns the index                                   (return true/false)
// // .find      returns the object itself                           (return true/false)
// // .map       returns new array with changed elements             (return element)
// // .filter    returns new array with elements that fit condition  (return true/false)
// console.log(geroi)
// console.log(geroi0)
// console.log(geroiNet)
// console.log(heroes.includes({name: 'Ricardo', force: 6969}, 0))   // NOT WORKING くそ！！！
// console.log(person.languages.includes('ENG'))                     // true or false, includes or not
// console.log(person.languages.map(lang => lang.toLowerCase()))
// const pow2fib = fib.map(pow2)
// console.log(pow2fib)
// console.log(fib.map(Math.sqrt))
// const filteredpow2fib = pow2fib.filter(num => num>20)

// const heroes2 = heroes;
// const allforce = heroes2
//   .filter(hero => hero.force>9000)
//   .reduce(function(acc, hero) {
//     acc += hero.force
//     return acc
//   }, 0)

// console.log(allforce)

// function sumAll(...all) {
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }
// function letscount(lastcount = 5){
//   let counter = 0
//   const interval = setInterval(function() {
//     if (counter === lastcount){
//       clearInterval(interval)
//     } else{
//       console.log(++counter, '\t', pow2(counter))
//     }
//   }, 1000)
// }
// function insultSpray(insult = 'pidaraz'){
//   return function(name){
//     console.log(name, '\t- ', insult)
//   }
// }

const overlay = document.getElementById('overlay')
const openContactsButtons = document.querySelectorAll('[data-contacts-target]')
const closeContactsButtons = document.querySelectorAll('[data-close-button]')

overlay.addEventListener('click', () => {
  const conts = document.querySelectorAll('.contacts.active')
  conts.forEach(contacts => {
    closeContacts(contacts)
  })
})
openContactsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contacts = document.querySelector(button.dataset.contactsTarget)
    openContacts(contacts)
  })
})
closeContactsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contacts = button.closest('.contacts')
    closeContacts(contacts)
  })
})

function openContacts(contacts) {
  if (contacts==null) return
  contacts.classList.add('active')
  overlay.classList.add('active')
}
function closeContacts(contacts) {
  if (contacts==null) return
  contacts.classList.remove('active')
  overlay.classList.remove('active')
}
