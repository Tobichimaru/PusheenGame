$(function(){


	var value = $('.progress.percent');
	var maxValue = $('.progress').width();
	var difference = 1;
	var img = $('.cat-img');
	 
	setInterval(function() {
		
		if (maxValue >= 0) {
			maxValue -= difference;
			value.width(maxValue);
			document.getElementById('progress').innerHTML = maxValue +"/"+ $('.progress.background').width();
			
			if (maxValue <= $('.progress.percent').width()*0.6 && maxValue >= $('.progress.percent').width()*0.3){
				$('.cat-img').attr("src", "design/img/sadness.png");
			}
			
			if (maxValue < $('.progress.background').width()*0.3){
				$('.cat-img').attr("src", "design/img/Anger.gif");
			}
			
			if( maxValue == 0){
			  // // alert("Your cat dead =(");
			    swal({
			    title: "Hei!",
			    text: "What are you doing????",
			    imageUrl: "design/img/thumb.gif"
				  },
		function(){
		  location.reload();});

				 }
				}
			}
		, 2000);
	
	

});