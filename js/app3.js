const heading = document.getElementById('hello')
const ibutt = document.getElementById('incre')
const midTelo = document.getElementsByTagName('h2')[0]

ibutt.style.outline = "none"
ibutt.style.background = "#333"
ibutt.style.border = "none"
ibutt.style.cursor = "pointer"
ibutt.style.padding = "1rem"
ibutt.style.font = "20px Verdana, sans-serif"
ibutt.style.color = "white"

midTelo.onclick = () => {
    midTelo.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}
Math.random
var eblanizm = 0
ibutt.addEventListener('click', () => {
    eblanizm++
    ibutt.textContent = "JESZCZE RAZ POPROSZE"
    ibutt.style.color = `rgb(255, ${255 - eblanizm*5}, ${255 - eblanizm*8})`
    heading.textContent = `6/I9I Hy TbI u e6/IaH axaxa x${eblanizm}`
})


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
    button.addEventListener('click', (event) => {
        event.preventDefault()
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
    if (contacts == null) return
    contacts.classList.add('active')
    overlay.classList.add('active')
}
function closeContacts(contacts) {
    if (contacts == null) return
    contacts.classList.remove('active')
    overlay.classList.remove('active')
}