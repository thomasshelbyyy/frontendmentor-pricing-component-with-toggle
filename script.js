const toggleSwitch = document.querySelector("#toggleSwitch")
const basicPrice = document.querySelector("#basic-price")
const professionalPrice = document.querySelector("#professional-price")
const masterPrice = document.querySelector("#master-price")

const priceList = {
    monthly: ["19.99", "24.99", "39.99"],
    anually: ["199.99", "249.99", "399"]
}

const updatePrice = () => {
    if (toggleSwitch.checked) {
        basicPrice.innerText = priceList.monthly[0]
        professionalPrice.innerText = priceList.monthly[1]
        masterPrice.innerText = priceList.monthly[2]
    } else {
        basicPrice.innerText = priceList.anually[0]
        professionalPrice.innerText = priceList.anually[1]
        masterPrice.innerText = priceList.anually[2]
    }
}

toggleSwitch.addEventListener("change", updatePrice)

