function compCities(cities) {
    userCity = document.getElementById('1').value;


    for (let i = 0; i < cities.length; i++) {
        if (userCity === cities[i]) {
            return true;
        }
    }
    return false;
}


function InvalidMsgCity(textbox) {
    $(document).ready(function () {
        $.getJSON('fi.json', function (data) {
                var arrItems = [];

                $.each(data, function (index, value) {
                    arrItems.push(value.city);
                });

            if (document.getElementById('1').value === '') {
                textbox.setCustomValidity('Please fill in the city');
            } else if (!compCities(arrItems)) {
                textbox.setCustomValidity('Please, enter a valid city');
            } else {
                textbox.setCustomValidity('');
            }
            
        });
    });


}


function InvalidMsgArea(textbox) {
    if (textbox.value === "") {
        textbox.setCustomValidity('Please fill in the surface area.');
    } else {
        textbox.setCustomValidity('');
    }

}

function InvalidMsgEmail(textbox) {

    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (textbox.value === '') {
        textbox.setCustomValidity('Please fill in your email');
    } else if (textbox.value.match(regex)) {
        textbox.setCustomValidity('');
    } else {
        textbox.setCustomValidity('Check your email');
    }

    return true;
}