$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };
  
  scaleFix();
  var regM = /ipod|ipad|mobile|iphone/gi,
   result = ua.match(regM)
  // Menu Android
  if(window.orientation!=undefined){
	if(!result) {
		$('.sf-menu li').each(function(){
			if($(">ul", this)[0]){
				$(">a", this).toggle(
					function(){
						return false;
					},
					function(){
						window.location.href = $(this).attr("href");
					}
				);
			} 
		})
	}
 }


	var productCount = 1,
		nowColor = $(".small-group img:first-child").attr("cart-color"),
		nowPrice = $(".small-group img:first-child").attr("now-price"),
		oldPrice = $(".small-group img:first-child").attr("old-price")
		oCount = 0, oTPrice = 0;
		
	chgDispValue();
	
	function chgDispValue(){
		$(".block-1_count").html(nowPrice + "kr<br> <span><s>" + oldPrice + "kr</s></span>");
		$(".select-control").val(nowColor);
	}
	
	$(".small-image").on("click", function(e){
		var $this = $(this), src = e.target.src, big = $(".big-image");
		
		nowPrice = $this.attr("now-price");
		oldPrice = $this.attr("old-price");
		nowColor = $this.attr("cart-color");
		
		if(src){
			big.fadeOut(300, function(){
				big.attr("src", src);
				chgDispValue();
			})
			big.fadeIn(300);
		}
		
	});
	
	$(".extra_wrapper p").each(function(i){
		(i == 0)? $(this).show(): $(this).hide();
	})
	
	$(".more").on("click", function(e){
		var $this = $(this);
		if($this.text() == "more"){
			$(".extra_wrapper p").each(function(i){
				$(this).show(200);
				$this.text("less");
			})
		}else{
			$(".extra_wrapper p").each(function(i){
				(i == 0)? $(this).show(): $(this).hide(200);
				$this.text("more");
			})
		}
	})

	$(".select-control").on("change",function(e){
		nowColor = $(this).val()
		var $this = $(".small-group [cart-color='" + nowColor +"']"), src = $this.attr("src"), big = $(".big-image");
		
		nowPrice = $this.attr("now-price");
		oldPrice = $this.attr("old-price");
		nowColor = $this.attr("cart-color");
			
		if(src){
			big.fadeOut(300, function(){
				big.attr("src", src);
				chgDispValue();
			})
			big.fadeIn(300);
		}
		
	})
 
	$('#spinner').spinner();
	
	$("#spinner button").on("click", function(e){
		productCount = parseInt($(".spinner-input").val());
	})

	$(".buy-btn").on("click", function(e){
		oCount = oCount + productCount, oTPrice = oTPrice + productCount * parseInt(nowPrice);
		$(".cart-number").html('<i class="fa fa-shopping-cart"></i> '+ oCount + ' item(s) - ' + oTPrice + "kr");
		$(".nav-cart-number").text(oCount);
	});
	
	function fixBoxHeight(){
		var w = $(window).innerWidth();
		
		if(w > 767){
			var bqHArr = [];
			$(".bq1").each(function(i){
				bqHArr.push($(this).innerHeight());
			})
			bqHArr.sort(function(a, b){return b-a});
			$(".bq1").each(function(i){
				$(this).innerHeight(bqHArr[0]);
			});
		}else{
			$(".bq1").each(function(i){
				$(this).css("height", "auto");
			});
		}
	}
	
	fixBoxHeight();
	
	$(window).resize(function(e){
		fixBoxHeight();
	});
		
	$(".navbar-toggle").on("click", function(e){
		var $this = $(this), dataToggle = $this.attr("data-toggle");
		if(dataToggle == "collapse"){
			$(".nav-menu").css("height", "200px");
			$this.attr("data-toggle", "expanded");
		}else{
			$(".nav-menu").css("height", "0px");
			$this.attr("data-toggle", "collapse");
		}
	})
	
	
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|mobile|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

var currentYear = (new Date).getFullYear();
  $(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
  });

  $(function(){
  $('.sf-menu').superfish({autoArrows: true})
})



// DEVICE.JS AND SMOOTH SCROLLIG

function include(url){document.write('<script type="text/javascript" src="'+url+'"></script>')}
include('js/device.js');
include('js/jquery.mousewheel.js');
include('js/jquery.simplr.smoothscroll.js');

  $(function () { 
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll();
    }
  });
