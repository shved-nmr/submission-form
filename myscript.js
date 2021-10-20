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
function loadCities() {


}

function InvalidMsgCity(textbox) {
    
    $.ajax({
        url: 'fi.json',
        dataType: 'json',
        success: function (data) {
            $(data.cities).each(function (index, value) {
                
            });
        }

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