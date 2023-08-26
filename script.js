const inputBill = document.getElementById('price-input');
const inputNumberPeople = document.getElementById('number-people');
const btn = document.querySelector('.btn')
const valueAmount = document.getElementById('value-amount');
const totalPerson = document.getElementById('value-total');
const porcentTip = document.querySelectorAll('.porcent');
const erro = document.querySelector('.off');
const erroPeople = document.querySelector('.visible')


_.forEach(porcentTip, (value)=>{
    value.addEventListener('click', (e)=>{
        e.preventDefault();
        tipAmount(value.textContent);
    })
})
function ShowDisplayError(){
    erro.classList.remove('off');
    erroPeople.classList.remove('visible');
}

function validatePeopleInput(){
    const people = Number(inputNumberPeople.value);
    if(isNaN(people) || people === 0){
        ShowDisplayError()
    }
}

function validaBillInput(){
    const billValue = Number(inputBill.value);
    if(isNaN(billValue) || billValue === 0){
        ShowDisplayError()
    }
}


function tipAmount(porcent){
    const porcentValue = parseInt(porcent);
    calcAmount(porcentValue );
}

function calcAmount(porcent){
    const totalAmount = (Number(inputBill.value) * (porcent / 100)) / Number(inputNumberPeople.value);
    validaBillInput();
    validatePeopleInput();
    total(totalAmount);
    valueAmount.textContent = `$${totalAmount.toFixed(2)}`;
}

function total(totAmount){
    const calcTotal = Number(inputBill.value) / Number(inputNumberPeople.value) + totAmount;
    totalPerson.textContent = `$${calcTotal.toFixed(2)}`;
}

btn.addEventListener('click', ()=>{
    const existinMessage = document.querySelector('.erro-message');
    inputBill.value= "";
    inputNumberPeople.value = "";
    valueAmount.textContent = '$0.00';
    totalPerson.textContent = '$0.00';
    erro.classList.add('off')
    erroPeople.classList.add('visible');

})