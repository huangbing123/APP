var homeTpl = require("../tpls/home.string");

SPA.defineView("home",{
	html:homeTpl,
	plugins:["delegated"],    
	bindEvents:{ 
		show:function(){
			var mySwiper = new Swiper(".swiper-container");
		}
	}
})