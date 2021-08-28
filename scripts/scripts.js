let billInput = document.getElementById("bill-cost-input")
let numberOfPeopleInput = document.getElementById("people-input")
let tipAmountElement = document.getElementById("tip-amount")
let totalAmountElement = document.getElementById("total-amount")

let tipValue
let billValue
let peopleValue

let totalTipAmount
let totaBillAmount

billInput.addEventListener('input', handleBillValue)
numberOfPeopleInput.addEventListener('input', handlePeopleValue)


function handleBillValue(e) {
	billValue = parseInt(e.target.value)
	console.log(typeof billValue)
	if (billValue && tipValue && peopleValue) {
		totalTipAmount = (tipValue * billValue) / peopleValue
		totaBillAmount = ((tipValue * billValue) + billValue) / peopleValue
		tipAmountElement.textContent = totalTipAmount.toFixed(2)
		totalAmountElement.textContent = totaBillAmount.toFixed(2)
	}
}

function handlePeopleValue(e) {
	peopleValue = parseInt(e.target.value)
	if (billValue && tipValue && peopleValue) {
		totalTipAmount = (tipValue * billValue) / peopleValue
		totaBillAmount = ((tipValue * billValue) + billValue) / peopleValue
		tipAmountElement.textContent = totalTipAmount.toFixed(2)
		totalAmountElement.textContent = totaBillAmount.toFixed(2)
	}
}

function handleTip(val) {
	tipValue = parseFloat(val)
	if (billValue && tipValue && peopleValue) {
		totalTipAmount = (tipValue * billValue) / peopleValue
		totaBillAmount = ((tipValue * billValue) + billValue) / peopleValue
		tipAmountElement.textContent = totalTipAmount.toFixed(2)
		totalAmountElement.textContent = totaBillAmount.toFixed(2)
	}
}

function handleReset() {
	console.log("reset handler")
	tipValue = ""
	billValue = ""
	peopleValue = ""
	totalTipAmount = ""
	totaBillAmount = ""
	billInput.value = ""
	numberOfPeopleInput.value = ""
	tipAmountElement.textContent = ""
	totalAmountElement.textContent = ""
	console.log(billValue)
}


// if (tipValue){
// 	console.log("hello tip")
// }

// add an eventlistener to each element
// if all amounts exist update total
// if tip amount exists update tip