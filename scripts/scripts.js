let billInput = document.getElementById("bill-cost-input")
let numberOfPeopleInput = document.getElementById("people-input")
let tipAmountElement = document.getElementById("tip-amount")
let totalAmountElement = document.getElementById("total-amount")
let customTipInput = document.getElementById("customTipInput")

let billInvalidLabel = document.getElementById("bill-invalid-label")
let peopleInvalidLabel = document.getElementById("people-invalid-label")

let btn5 = document.getElementById("btn5")
let btn10 = document.getElementById("btn10")
let btn15 = document.getElementById("btn15")
let btn25 = document.getElementById("btn25")
let btn50 = document.getElementById("btn50")

let tipValue
let billValue
let peopleValue

let totalTipAmount
let totaBillAmount

billInput.addEventListener('input', handleBillValue)
numberOfPeopleInput.addEventListener('input', handlePeopleValue)
customTipInput.addEventListener('input', handleCustomTipInput)

function handleBillValue(e) {
	if (!billInput.validity.valid) {
		billInvalidLabel.classList.add("invalid-label-true")
	} else {
		billInvalidLabel.classList.remove("invalid-label-true")
		billValue = parseInt(e.target.value)
		console.log(typeof billValue)
		if (billValue && tipValue && peopleValue) {
			totalTipAmount = (tipValue * billValue) / peopleValue
			totaBillAmount = ((tipValue * billValue) + billValue) / peopleValue
			tipAmountElement.textContent = "$" + totalTipAmount.toFixed(2)
			totalAmountElement.textContent = "$" + totaBillAmount.toFixed(2)
		}
	}
}

function handleCustomTipInput(e) {
	let percentage = e.target.value / 100
	handleTip(percentage)
}

function handleTip(val) {
	tipValue = parseFloat(val)
	if (tipValue === 0.05) {
		btn5.classList.add("tip-button-selected")
		btn10.classList.remove("tip-button-selected")
		btn15.classList.remove("tip-button-selected")
		btn25.classList.remove("tip-button-selected")
		btn50.classList.remove("tip-button-selected")
	} else if (tipValue === 0.10) {
		btn5.classList.remove("tip-button-selected")
		btn10.classList.add("tip-button-selected")
		btn15.classList.remove("tip-button-selected")
		btn25.classList.remove("tip-button-selected")
		btn50.classList.remove("tip-button-selected")
	} else if (tipValue === 0.15) {
		btn5.classList.remove("tip-button-selected")
		btn10.classList.remove("tip-button-selected")
		btn15.classList.add("tip-button-selected")
		btn25.classList.remove("tip-button-selected")
		btn50.classList.remove("tip-button-selected")
	} else if (tipValue === 0.25) {
		btn5.classList.remove("tip-button-selected")
		btn10.classList.remove("tip-button-selected")
		btn15.classList.remove("tip-button-selected")
		btn25.classList.add("tip-button-selected")
		btn50.classList.remove("tip-button-selected")
	} else if (tipValue === 0.50) {
		btn5.classList.remove("tip-button-selected")
		btn10.classList.remove("tip-button-selected")
		btn15.classList.remove("tip-button-selected")
		btn25.classList.remove("tip-button-selected")
		btn50.classList.add("tip-button-selected")
	} else {
		btn5.classList.remove("tip-button-selected")
		btn10.classList.remove("tip-button-selected")
		btn15.classList.remove("tip-button-selected")
		btn25.classList.remove("tip-button-selected")
		btn50.classList.remove("tip-button-selected")	
	}
	if (billValue && tipValue && peopleValue) {
		totalTipAmount = (tipValue * billValue) / peopleValue
		totaBillAmount = ((tipValue * billValue) + billValue) / peopleValue
		tipAmountElement.textContent = "$" + totalTipAmount.toFixed(2)
		totalAmountElement.textContent = "$" + totaBillAmount.toFixed(2)
	}
}

function handlePeopleValue(e) {
	if (!numberOfPeopleInput.validity.valid) {
		peopleInvalidLabel.classList.add("invalid-label-true")
	} else {
		peopleValue = parseInt(e.target.value)
		if (billValue && tipValue && peopleValue) {
			totalTipAmount = (tipValue * billValue) / peopleValue
			totaBillAmount = ((tipValue * billValue) + billValue) / peopleValue
			tipAmountElement.textContent = "$" + totalTipAmount.toFixed(2)
			totalAmountElement.textContent = "$" + totaBillAmount.toFixed(2)
		}
	}

}

function handleReset() {
	btn5.classList.remove("tip-button-selected")
	btn10.classList.remove("tip-button-selected")
	btn15.classList.remove("tip-button-selected")
	btn25.classList.remove("tip-button-selected")
	btn50.classList.remove("tip-button-selected")	
	tipValue = ""
	billValue = ""
	peopleValue = ""
	totalTipAmount = ""
	totaBillAmount = ""
	billInput.value = ""
	numberOfPeopleInput.value = ""
	tipAmountElement.textContent = "$0.00"
	totalAmountElement.textContent = "$0.00"
}



