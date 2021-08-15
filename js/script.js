//remove child
document.getElementById('order').addEventListener('click', function () {
    const parent = document.getElementById('promotion');
    parent.removeChild(order);
});

//email

document.getElementById('input_touch').addEventListener('keyup', function (event) {
    const touchButton = document.getElementById('touch_btn');

    if (event.target.value === '@gmail') {
        touchButton.removeAttribute('disabled');
    } else {
        touchButton.setAttribute('disabled', true);
    }
});

//get in touch background color
document.getElementById('get-bg').style.backgroundColor = '#E3EBE7';

//card border radius
const border = document.getElementsByClassName('card_box');

for (i = 0; i <= border.length; i++) {
    border[i].style.borderRadius = '15px';
};

//heading
const allHeading = document.getElementsByTagName('h2');

for (i = 0; i <= allHeading.length; i++) {
    allHeading[i].style.color = 'gray';
};

//function
function tr() {
    console.log('why you click me');
};

//change
document.getElementById('input_touch').addEventListener('change', function () {
    const inputField = document.getElementById('input_touch');
    console.log(inputField.value)
});

//mouse over img change
function changepic() {
    document.getElementById('changes').src = 'img/kavar.png';
};

function changepic2() {
    document.getElementById('changes').src = 'img/cup.png';
};