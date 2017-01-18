
$('.main-copy').css({marginTop: '-=100px'});

$(window).scroll(function(){	
	  		parallax($(".diagonal-shape-1"),64,.1),
	  		parallax($(".diagonal-shape-2"),634,.6)
	});

function parallax(a,b,c){
	var d=$(window).scrollTop();
	a.css("top",-(d*c)+b+"px")
	}

$(window).scroll(function() {
    $window = $(window);
    let height = $('#section-1').height();
    if ( $window.scrollTop() >height) {  
        $('.navbar').fadeIn(200, function () {     
          $('.navbar').css({"position": "fixed","z-index": "1","top": "0","left": "0"});
        })
    }    
});


console.time("timer"),$(document).ready(
	function(){
		$(".full-screen").css("min-height",$(window).height()),
		$(".down-arrow").on("click",
		function(a){a.preventDefault();
				var b=$(this).parents("section").next("section");
				
			}),

		$(".navbar").affix({offset:{top:0}}),
		setTimeout(function(){
			$(".intro-section").css("color","white"),
			$(".section-overlay").fadeOut(2e3),
			$(".intro-section").addClass("first-bg")},500)
	});



