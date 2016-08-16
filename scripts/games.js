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
         'width': '100%'
      });  
   }; 

   function catchGame () {
      changeBackground();
      window.open("mini-games/Pusheen Eats/index.html"); // open in new tab
      // window.location.href = "mini-games/Pusheen Eats/index.html";
      
   }; 

   function someGame () {
      changeBackground();
      // window.open("mini-games/Pusheen in space/index.html);
      window.location.href = "mini-games/Pusheen in space/index.html"; // open in the same tab

   };


	$(".catch-food").on("click", catchGame);
   $(".some-game").on("click", someGame);
});


