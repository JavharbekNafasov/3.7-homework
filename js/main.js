var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elSelect = document.querySelector(".hero__select");
var elBtn = document.querySelector(".hero__btn");
var elResult = document.querySelector(".hero__result");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log(elInput.value);
    console.log(elSelect.value);

    var natija

    if (elSelect.value === "EUR")
    {
        natija = elInput.value * 11600;
        console.log(natija);
    }

    else if (elSelect.value === "USD")
    {
        natija = elInput.value * 10850;
        console.log(natija);
    }
    
    else if (elSelect.value === "RUB")
    {
        natija = elInput.value * 130;
        console.log(natija);
    }
})