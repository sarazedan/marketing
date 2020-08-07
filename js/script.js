$(function(){
	
	var winH=$(window).height(),
	    upperH=$('.upp').innerHeight(),
		navH=$('.navbar').innerHeight();
		  
     $('.slider,.carousel-item').height(winH-(upperH+navH));
	 
	 
	 
	 
	 //featured work shuflle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
	 
	    //console.log($(this).data('class'));
		if($(this).data('class')==='all'){
			$('.shuffle-imgs .col-sm').css('opacity',1);
		}
		else{
		
			$('.shuffle-imgs .col-sm').css('opacity','.09');
			$($(this).data('class')).parent().css('opacity',1);
			
		}
			
		});
		
		
		//show color option onclick gear icon
		$(".gear-check").click(function(){
			$(".color-option").fadeToggle();
			
		});
		//change theme color on click from gear icon
		
		var colorLi=$(".color-option ul li");
		
		colorLi
			.eq(0).css("backgroundColor","#faaf3a").end()
			.eq(1).css("backgroundColor","#E426D5").end()
			.eq(2).css("backgroundColor","gray").end()
			.eq(3).css("backgroundColor","yellow").end()
			.eq(4).css("backgroundColor","green");

        colorLi.click(function()
        {
	 
	    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
		
		});
	});