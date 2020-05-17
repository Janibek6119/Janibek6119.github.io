alert('Нажимая Ок, вы даете согласие на кремпай')

var name = 'Janibek'
const lastName = '6119'
let age = 22
console.log('age: ', age)
prompt('貴方の名前は何ですか', 'Heisenberg')==='Heisenberg' ? alert('Youre goddamn right.') : alert('Youre goddamn wrong.')

const openContactsButtons = document.querySelectorAll('[data-contacts-target]')
const closeContactsButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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
