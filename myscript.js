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

            if (!compCities(arrItems)) {
                textbox.setCustomValidity('Please, enter a valid city');
            } else {
                textbox.setCustomValidity('');
            }
            
        });
    });


}

//$.getJSON('fi.json', function (data) {
//    console.log(data);
//});

//$(function () {
//    var $orders = $('#orders');
//    $.ajax({
//        type: 'GET',
//        url: 'fi.json',
//        dataType: 'json',
//        success: function (response) {
//            var data = response.data;
//            $.each(data, function (i, data) {
//                $orders.append('<li>dataid: ' + data.id + '</li>');
//            });
//        }

//    });
//});

//$.ajax({
//    url: 'fi.json',
//    dataType: 'json',
//    success: function (data) {

//        $(data.cities).each(function (index, value) {
//            console.log('we made it here yeeeeea');
//            arrItems.push(value.city);
//        });


//    }

//});
//console.log(arrItems[1]);