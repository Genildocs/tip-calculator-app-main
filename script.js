const inputBill = document.getElementById('price-input');
const inputNumberPeople = document.getElementById('number-people');
const valueAmount = document.getElementById('value-amount');
const porcentTip = document.querySelectorAll('.porcent');

_.forEach(porcentTip, (value)=>{
    value.addEventListener('click', (e)=>{
        e.preventDefault();
        tipAmount(value.textContent);
    })
})
function messageError(){
    const messageError = document.createElement('p');
    messageError.classList.add('erro-message');
    messageError.textContent = "Cannot be zero or letter"
    const nPeople = document.querySelector('.people');
    nPeople.appendChild(messageError);
    messageError.style.color = "red";
    messageError.style.fontSize = '1.2rem'
}
function validatePeopleInput(){
    const people = Number(inputNumberPeople.value);
    if(isNaN(people) || people === 0){
        messageError();
    }else {
        return people
    }
}


function tipAmount(porcent){
    const billValue = Number(inputBill.value);
    const porcentValue = parseInt(porcent);
    calcAmount(billValue, porcentValue );
}

function calcAmount(bill, porcent){
    const totalAmount = (bill * (porcent / 100)) / validatePeopleInput();
    valueAmount.textContent = `$ ${totalAmount.toFixed(2)}`;
}


function total(){

}

