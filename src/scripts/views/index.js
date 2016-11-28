var indexTpl = require("../tpls/index.string");
SPA.defineView("index",{
   html:indexTpl,           
   plugins:["delegated"],
   modules:[{                
       name:"content",        
       views:["home","category","my","shopp"],  
       defaultTag:"home",     
       container:".m-wrapper" 
   }],
   bindActions:{
      "switch.tabs":function(e,data){
          this.modules.content.launch(data.tag);
      }
   }
})


