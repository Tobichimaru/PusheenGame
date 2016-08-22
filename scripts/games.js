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
                //change money balance
                var $money = $(".totalMoney");
                $money.text(+$money.text() + (+localStorage.getItem('score')));
            }
        });
    };

    function catchGame () {
        changeBackground();
        window.open("index_eat.html"); 
        hideCat();
    };

    function someGame () {
        changeBackground();
        window.open("index_space.html");
        hideCat();
    };

    function foodGame () {
        changeBackground();
        window.open("index_food.html");
        hideCat();
    };

    $(".food-game").on("click", foodGame);
    $(".catch-food").on("click", catchGame);
    $(".some-game").on("click", someGame);
});
