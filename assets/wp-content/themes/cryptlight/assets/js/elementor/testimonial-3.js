(function($){
	"use strict";
	
	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_testimonial_3.default', function(){
	       
	        /* Add your code here */
	    	$(".ova-testimonial-3 .slide-testimonials").each(function(){
		        var owlsl 		= $(this) ;
		        var owlsl_ops 	= owlsl.data('options') ? owlsl.data('options') : {};

		        var responsive_value = {
		            0:{
		              items:1
		            },
		            576:{
		              items:1

		            },
		            992:{
		              items:1
		            },
		            1170:{
		              items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          	autoWidth: owlsl_ops.autoWidth,
		          	margin: owlsl_ops.margin,
		          	items: owlsl_ops.items,
		          	loop: owlsl_ops.loop,
		          	autoplay: owlsl_ops.autoplay,
					autoplayTimeout: owlsl_ops.autoplayTimeout,
					center: owlsl_ops.center,
					nav: owlsl_ops.nav,
					dots: owlsl_ops.dots,
					thumbs: owlsl_ops.thumbs,
					autoplayHoverPause: owlsl_ops.autoplayHoverPause,
					slideBy: owlsl_ops.slideBy,
					smartSpeed: owlsl_ops.smartSpeed,
					rtl: owlsl_ops.rtl,
					navText:[
					'<i class="fas fa-arrow-left" aria-hidden="true"></i>',
					'<i class="fas fa-arrow-right" aria-hidden="true"></i>'
					],
					navContainer: '.ova-owl-nav',
					responsive: responsive_value,
		        });

		      	/* Fixed WCAG */
				owlsl.find(".owl-dots button").attr("title", "Dots");
		    });

		    var owlslNavPrev = $(".ova-owl-nav button.owl-prev");
		    var owlslNavNext = $(".ova-owl-nav button.owl-next");
		    if (owlslNavPrev.length) {
		    	owlslNavPrev.attr("title", "Previous");
		    }
		    if (owlslNavNext.length) {
		    	owlslNavNext.attr("title", "Next");
		    }
		    
        });
        
   });

})(jQuery);
