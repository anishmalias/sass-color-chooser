

$(function(){



	// collapse on responsive

	function checkWindow(){
		var winnWidth = $(window).width();
		
		if(winnWidth <=  767){
			$(".nav-holder-control").removeClass("active");
			$(".base-section").removeClass("open");
		}else{
			
		}
	}

	checkWindow();

	$(window).resize(function(){
		checkWindow();
	});

	
	// collapsedDropdown();

	function dropdownShow(){
		var allAccordions = $('.nav-list > li > .submenu');
		var allAccordionItems = $('.nav-list > li > a');
		$(allAccordionItems).click(function() {
			console.log("D");
			if(!$(".base-section").hasClass("open")){
				var topPos = $(this).parent().offset().top;
				var leftPos = $(".nav-scroll").width();
				//$(this).parent().find("ul.submenu").css({'left':leftPos,'top':topPos});	
			}

			if($(this).parent().hasClass('dropdown-open')){
				$(this).parent().removeClass('dropdown-open');
				$(this).parent().find("ul.submenu").slideUp(200);
			}
			else{
				allAccordions.slideUp(200);
				allAccordionItems.parent().removeClass('dropdown-open');
				$(this).parent().addClass('dropdown-open');
				$(this).parent().find("ul.submenu").slideDown(200);
				return false;	
			}
			
		});
	}
	dropdownShow();

	// get current dropdown on toggle

	

	// menu holder
	$(".nav-holder-control").click(function(){
		$(".base-section").toggleClass("open");
		$(this).toggleClass("active");
			//toggleDropdwn();
		
	});

	function toggleDropdwn(){
		if(!$(".base-section").hasClass("open")){
			var topPos = $(".dropdown-open").parent().offset().top;
			var leftPos = $(".nav-scroll").width(); 
			//$(".dropdown-open").find("ul.submenu").css({'left':leftPos,'top':topPos});	
		}
	}


	// Switch control

	$(".switcher-button").click(function(){
		$(".theme-switcher").toggleClass("open");
	});

	// theme swiching.

	$(".patter-list li a").click(function(){
		$(".patter-list li a").removeClass("active");
		$(this).addClass("active");
		var cssUrl = $(this).attr('data-href');
		var currentUrl = $("#css-handler").attr('href');
		if(cssUrl != currentUrl){
			$("#css-handler").attr('href',cssUrl);
		}
	});

	// load theme on page load

	var cssUrl = $(".patter-list li a.active").attr('data-href');
	$("#css-handler").attr('href',cssUrl);
	
	


		
});
