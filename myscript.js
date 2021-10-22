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

    var regex = /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g;
    var regexGmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail/g;
    var regexGmailCom = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;

    if (textbox.value.match(regexGmail)) { //check if gmail
        console.log('matched gmail');

        if (!textbox.value.match(regexGmailCom)) { //check if gmail.com
            textbox.setCustomValidity('.com is missing');
        } else {
            textbox.setCustomValidity('');
        }
    } else { //if not gmail
        if (textbox.value === '') {
            textbox.setCustomValidity('Please fill in your email');
        } else if (textbox.value.match(regex)) {
            textbox.setCustomValidity('');
        } else {
            textbox.setCustomValidity('Check your email');
        }
    }



}


function gmailCheck(email) {
    console.log('issa match');
}