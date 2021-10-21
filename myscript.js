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
    $(document).ready(function () {
        $.getJSON('fi.json', function (data) {
                var arrItems = [];              // The array to store JSON data.

                $.each(data, function (index, value) {
                    arrItems.push(value.city);       // Push the value inside the array.
                });

                // Use the data in the array in whatever way you want it.
                // I am using the array to populate a <select> dropdown list.

            console.log(arrItems[0]);
            console.log(arrItems[1]);
            
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