$(document).ready(function () {
    $("div#design").click(function(event) {
        event.preventDefault();
        $("div#design").toggle();
        $("p#designText").toggle();
        $("div#designLabel").show();

    });

    $("p#designText").click(function(event) {
        event.preventDefault();
       
        $("p#designText").toggle();
        $("div#design").toggle();
        $("div#designLabel").hide();


    });
});

$(document).ready(function () {
    $("div#development").click(function(event) {
        event.preventDefault();

        $("div#development").toggle();
        $("p#developmentText").toggle();
        $("div#developmentLabel").show();

    });

    $("p#developmentText").click(function(event) {
        event.preventDefault();

        $("div#development").toggle();
        $("p#developmentText").toggle();
        $("div#developmentLabel").hide();


    });
});

$(document).ready(function () {
    $("div#productManagement").click(function(event) {
        event.preventDefault();

        $("div#productManagement").toggle();
        $("p#productManagementText").toggle();
        $("div#productManagementLabel").show();
        
    });

    $("p#productManagementText").click(function(event) {
        event.preventDefault();

        $("div#productManagement").toggle();
        $("p#productManagementText").toggle();
        $("div#productManagementLabel").hide();
        
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
