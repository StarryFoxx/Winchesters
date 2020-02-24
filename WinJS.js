/*
$("#weaponCatalog").click(function() {
    $("jqwc").toggle();
});

$("#sjpw").click(function() {
    $("p").show();
});
*/




$(document).ready(function() {
    // all custom jQuery goes here



    //hide divs at start of page START
    $("#weaponCatalog").hide();
    $("#monsterCatalog").hide();
    $("#contactForm").hide();
    $("#formSubmit").hide();

    $("#home").show();

    //hide divs at start of page END



    //Home SHOW/HIDE
    $("#homeNav").click(function() {
        $("#home").slideToggle();
        $("#weaponCatalog").hide();
        $("#monsterCatalog").hide();
        $("#contactForm").hide();
        $("#formSubmit").hide();
    });


    // Weapon Catalog SHOW/HIDE
    $("#weaponCatalogNav").click(function() {
        $("#weaponCatalog").slideToggle();
        $("#home").hide();
        $("#monsterCatalog").hide();
        $("#contactForm").hide();
        $("#formSubmit").hide();
    });




    //Monster Catalog SHOW/HIDE
    $("#monsterCatalogNav").click(function() {
        $("#monsterCatalog").slideToggle();
        $("#home").hide();
        $("#weaponCatalog").hide();
        $("#contactForm").hide();
        $("#formSubmit").hide();
    });

    //Contact Form SHOW/HIDE

    $("#contactNav").click(function() {
        $("#contactForm").slideToggle();
        $("#monsterCatalog").hide();
        $("#home").hide();
        $("#weaponCatalog").hide();
        $("#formSubmit").hide();

    });


    //SUBMIT FORM SHOW
    $("form").submit(function() {
        $("#formSubmit").slideToggle();
        $("#home").hide();
        $("#weaponCatalog").hide();
        $("#monsterCatalog").hide();
        $("#contactForm").hide();
    });

});