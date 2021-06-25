class TipCalculator {
    constructor(bill, service) {
        this.bill = bill;
        this.service = service;
    }

    calculate() {
        const bill = this.bill.value;
        const service = this.service.value;

        return bill > 0
        ? (Math.round(bill * service) / 100).toFixed(2)
        : 'Invalid bill value.'
    }
}

const input_bill = document.querySelector('#form-bill');
const select_service = document.querySelector('#form-service');
const button_calculate = document.querySelector('.calculate');
const div_output = document.querySelector('.output');

const billCalculator = new TipCalculator(input_bill, select_service);

button_calculate.addEventListener('click', () => div_output.innerHTML = billCalculator.calculate());
