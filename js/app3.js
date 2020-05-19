// fuck css - I can even cure depression using solo javascript
const ibutt = document.getElementById("incre")
ibutt.style.outline = "none"
ibutt.style.background = "#333"
ibutt.style.border = "none"
ibutt.style.cursor = "pointer"
ibutt.style.padding = "1rem"
ibutt.style.font = "20px Verdana, sans-serif"
ibutt.style.color = "white"
ibutt.style.marginBottom = "1rem"
// welcoming sign now changes its color
const heading = document.getElementById("hello")
heading.style.cursor = "pointer"
ranCol = () => Math.random() * 255
heading.onclick = () => {
	let clr = `rgb(${rancol()}, ${rancol()}, ${rancol()})`
	heading.style.color = clr
}
heading.onmousedown = () => heading.classList.add("pressedhello")
heading.onmouseup   = () => heading.classList.remove("pressedhello")
heading.onmouseout  = () => heading.classList.remove("pressedhello")
/********************** UNKNOWN BRICK GAME ****************************/
// get the div of the "game" and fill it with cells
const brickgame = document.getElementById("brickgame")
var newkon = []
for (let i = 0; i < 100; i++) {
	newkon[i] = document.createElement("div")
	brickgame.appendChild(newkon[i])
}
// add ONCLICK color swap | on each cell
newkon.forEach((cellka, ind, array) => {
	cellka.onclick = () => {
		swColor(cellka)
		if (ind % 10 !== 0) {
			swColor(array[ind - 1])
		}
		if (ind % 10 !== 9) {
			swColor(array[ind + 1])
		}
		if (ind > 9) {
			swColor(array[ind - 10])
		}
		if (ind < 90) {
			swColor(array[ind + 10])
		}
	}
})
function swColor(cellka) {
	if (cellka.style.background.includes("white")) {
		cellka.style.background = "grey"
	} else {
		cellka.style.background = "white"
	}
}
function randGrid() {
	newkon.forEach((cellka) => {
		if (Math.random() < 0.5) {
			cellka.style.background = "grey"
		} else {
			cellka.style.background = "white"
		}
	})
}
// add eblanistic events on the button click
var eblanizm = 0
ibutt.addEventListener("click", () => {
	eblanizm++
	ibutt.textContent = "JESZCZE RAZ POPROSZE"
	ibutt.style.color = `rgb(255, ${255 - eblanizm * 5}, ${255 - eblanizm * 8})`
	heading.textContent = `6/I9I Hy TbI u e6/IaH axaxa x${eblanizm}`
	randGrid()
})
/**************** OPEN AND CLOSE CONTACTS WINDOW **********************/
// get overlay, opening and closing buttons for CONTACTS window
const overlay = document.getElementById("overlay")
const openContactsButtons = document.querySelectorAll("[data-contacts-target]")
const closeContactsButtons = document.querySelectorAll("[data-close-button]")
// add 'click' listener to all those
overlay.addEventListener("click", () => {
	const conts = document.querySelectorAll(".contacts.active")
	conts.forEach((contacts) => {
		closeContacts(contacts)
	})
})
openContactsButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		event.preventDefault()
		const contacts = document.querySelector(button.dataset.contactsTarget)
		openContacts(contacts)
	})
})
closeContactsButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const contacts = button.closest(".contacts")
		closeContacts(contacts)
	})
})
function openContacts(contacts) {
	if (contacts == null) return
	contacts.classList.add("active")
	overlay.classList.add("active")
}
function closeContacts(contacts) {
	if (contacts == null) return
	contacts.classList.remove("active")
	overlay.classList.remove("active")
}
/******************** SORTABLE DRAG N DROP ****************************/
// get draggables and (their) containers
const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".dragcontainer")
// start/end dragging ::> adds/removes "dragging" class to draggables
draggables.forEach((draggable) => {
	draggable.addEventListener("dragstart", () => {
		draggable.classList.add("dragging")
	})

	draggable.addEventListener("dragend", () => {
		draggable.classList.remove("dragging")
	})
})
// add "drag over" event listener to containers.
containers.forEach((container) => {
	container.addEventListener("dragover", (e) => {
		e.preventDefault() // get rid of stupid "no smoking!" cursor
		// get draggable that's below the cursor and insert the dragged one before it
		const afterElement = getDragAfterElement(container, e.clientY)
		const draggable = document.querySelector(".dragging")
		if (afterElement == null) {
			container.appendChild(draggable)
		} else {
			container.insertBefore(draggable, afterElement)
		}
	})
})

function getDragAfterElement(container, y) {
	const draggableElements = [
		...container.querySelectorAll(".draggable:not(.dragging)"),
	] // casted into Array to use .reduce()
	return draggableElements.reduce(
		(closest, child) => {
			const box = child.getBoundingClientRect()
			const offset = box.height / 2 + box.top - y
			console.log(offset)
			// element is below the cursos && that's the closest among all siblings
			if (offset > 0 && offset < closest.offset) {
				return { offset: offset, element: child }
			} else {
				return closest
			}
		},
		{ offset: Number.POSITIVE_INFINITY }
	).element
}
