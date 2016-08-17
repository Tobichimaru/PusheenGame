$(function () {

    function changeBackground() {
        var docHeight = $(document).height();
        $("body").append("<div id='overlay'></div>");
        $("#overlay")
           .height(docHeight)
           .css({
               'opacity' : 0.7,
               'position': 'absolute',
               'top': 0,
               'left': 0,
               'background-color': 'black',
               'width': '100%',
               'text-align': 'center',
               'font-size': '35px',
               'color' : 'pink'
           }).append("<p>Press esc to escape</p>");  
    }; 

    function hideCat () {
        var $catImg = $(".cat-img").css("background-image");
        var $progress = +$(".now-progress").text();
        $(".cat-img").hide();
        $(".level-progress").hide();
        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
                $("#overlay").remove();
                $(".cat-img").css("background-image", $catImg);
                $(".now-progress").text($progress);
                $(".cat-img").show();
                $(".level-progress").show();
            }
        });
    };

    function catchGame () {
        changeBackground();
        window.open("mini-games/Pusheen Eats/index.html"); 
        hideCat();
    };

    function someGame () {
        changeBackground();
        window.open("mini-games/Pusheen in space/index.html");
        hideCat();
        //window.location.href = "mini-games/Pusheen in space/index.html"; // open in the same tab
    };


    $(".catch-food").on("click", catchGame);
    $(".some-game").on("click", someGame);
});
