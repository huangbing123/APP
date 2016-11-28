var categoryTpl = require("../tpls/category.string");

SPA.defineView("category",{
	html:categoryTpl,
	plugins:["delegated"],    
	bindEvents:{ 
		show:function(){
			var mySwiper = new Swiper(".swiper-container",{
				onSlideChangeStart:function(){
					$(".fl_tab a").addClass("b_color").siblings().removeClass("b_color")		
				}
			});
		}
	}
})