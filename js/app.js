// Clear - Button
$('#clear').click(function() {
    $("#primary").val('');
    $("#secondary").val('');
});


// var display_input = document.getElementById("display_input"),
//     display_output = document.getElementById("display_output"),
//     display_animation = document.getElementById("display_animation"),
//     display_clear = document.getElementById("display_clear");
//
//
// function calculate() {
//     "use strict";
//
//     var value = display_input.innerHTML;
//     value = value.split("Ã·").join("/");
//     value = value.split("Ã—").join("*");
//     value = value.split("â€“").join("-");
//
//     try {
//         value = eval(value);
//         display_output.innerHTML = value;
//     } catch (e) {
//         display_output.innerHTML = "Â¯\\_(ãƒ„)_/Â¯";
//     }
//
//     display_input.scrollLeft = display_input.scrollWidth - display_input.clientWidth;
//     display_output.scrollLeft = display_output.scrollWidth - display_output.clientWidth;
// }



$(".input").click(function() {
    try {
        var txt = $(this).val();
        $("#primary").val($("#primary").val() + txt);
        var primary = $("#primary").val();
        console.log(primary);
        primary = primary.split("\xF7").join("/").split("\xD7").join("*").split("u2212").join("-").split("π").join("22/7");
        // replace("\xF7", "/1").replace("\xD7", "*1").replace("+", "+0").replace("\u2212", "-0").replace("π", "22/7");
        console.log(primary);
        ans = eval(primary.toString());
        $("#secondary").val(ans);
        console.log(ans);

    } catch (e) {
        $("#secondary").val('IDK');
    }

});

$("#primary").keyup(function() {
    // var primary = $("#primary").val();
    // var secondary = $("#secondary").val();
    // var txt = $(this).val();
    // $("#primary").val(primary);
    // var primary = $("#primary").val();
    // console.log(primary);
    // var fix = primary.replace("/", "b");
    // console.log(fix);
    // $("#primary").val(primary);
    // var ans = eval(primary);
    $("#secondary").val(ans);
});


$('#result').click(function() {
    var secondary = $("#secondary").val();
    $("#primary").val(secondary);
    $("#secondary").val('');

});

if ($('#inputs').scrollTop() >= 50) {

}

function scrolld() {
    document.getElementById("inputs").scrollBy(0, document.documentElement.clientHeight);
    console.log("wurk");
}


// var fix = primary.replace(/, "b");
// console.log(fix);


// $('#clear').click(function() {
//     var primary = $("#primary").val();
//     var primaryl = $("#primary").length;
//     console.log(primaryl);
//     $("#primary").val(primary.substring(0, primaryl - 1));
// });



// (localStorage.getItem('theme') === 'dark') {
//
//     $(".theme").prop("disabled", false);
//     $('meta[name=theme-color]').remove();
//     $('head').append('<meta name="theme-color" content="#212121">');
//
// }
//
// var isDisabled = $(".theme").prop('disabled');
// if (isDisabled) {
//     localStorage.setItem('theme', 'light');
// } else {
//     localStorage.setItem('theme', 'dark');
// }
