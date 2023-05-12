let billEle = document.getElementById('billTotal');

let tipEle = document.getElementById('tip');

let reduce = document.getElementById('removePerson');

let peopleEle = document.getElementById('people');

let add = document.getElementById('addPerson');

let total = document.getElementById('total');


let addPerson = () => {
    people.innerText = Number(people.innerText) + 1;
};

let reducePerson = () => {
    if (people.innerText >= 1) {
        people.innerText = Number(people.innerText) - 1;
    }
};

let calcBill = () => {
    ;
    let tip = tipEle.value / 100;
    let bill = +billEle.value;
    let tipAmount = bill * tip;
    let totalBill = bill + tipAmount;
    let people = +peopleEle.innerText;
    let indBill = totalBill / people;
    if (Number.isNaN(indBill) || indBill == Infinity) {
        total.innerText = '$' + 0;
    } else {
        total.innerText = '$' + (indBill).toFixed(2);
    }
};

billEle.addEventListener('input', calcBill);

tipEle.addEventListener('input', calcBill);

add.addEventListener('click', addPerson);

reduce.addEventListener('click', reducePerson);

add.addEventListener('click', calcBill);

reduce.addEventListener('click', calcBill);