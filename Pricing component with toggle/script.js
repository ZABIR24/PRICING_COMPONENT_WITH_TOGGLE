const priceEls = document.querySelectorAll('.card__price');
const checkboxE1 = document.querySelector('.toggle__checkbox');

const toggle = (e) =>
{
    if(e.target.checked)
    {
        priceEls[0].textContent = '$29.99';
        priceEls[1].textContent = '$71.99';
        priceEls[2].textContent = '$107.99';
    }
    else
    {
        priceEls[0].textContent = '$3.99';
        priceEls[1].textContent = '$6.99';
        priceEls[2].textContent = '$9.99';  
    }
};

checkboxE1.onchange = toggle;