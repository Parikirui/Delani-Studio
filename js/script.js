$(document).ready(function () {
    $("div#des").click(function(event) {
        event.preventDefault();
        $("div#des").toggle();
        $("p#desText").toggle();
        $("div#desLabel").show();

    });

    $("p#desText").click(function(event) {
        event.preventDefault();
       
        $("p#desText").toggle();
        $("div#des").toggle();
        $("div#desLabel").hide();


    });
});

$(document).ready(function () {
    $("div#dev").click(function(event) {
        event.preventDefault();

        $("div#dev").toggle();
        $("p#devText").toggle();
        $("div#devLabel").show();

    });

    $("p#devText").click(function(event) {
        event.preventDefault();

        $("div#dev").toggle();
        $("p#devText").toggle();
        $("div#devLabel").hide();


    });
});

$(document).ready(function () {
    $("div#product").click(function(event) {
        event.preventDefault();

        $("div#product").toggle();
        $("p#productText").toggle();
        $("div#productLabel").show();
        
    });

    $("p#productText").click(function(event) {
        event.preventDefault();

        $("div#product").toggle();
        $("p#productText").toggle();
        $("div#productLabel").hide();
        
    });
});

$(document).ready(function() {
   $(".portfolioImages").mouseenter(function(){
    let portfolioImages = $(this).closest('.portfolioImages');
    portfolioImages.next("h3").show();
   })
   .mouseleave(function(){
    $("h3").hide();
   });
});
