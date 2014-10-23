/**
 * 
 */

function myQuery(selector, factory) { 
 this.element = null; 
 this.selector = selector;
 this.classlist = null;
 this.elementlist=null;
 
// alert("Hello! I am an alert box!!"); infinite
 if (typeof factory == "undefined") {
	 // See if selector starts with a #. 
	 // If so we're looking for an ID 
	 if (selector[0] == '#') { 
		 // Strip off the # sign 
		 var selector = selector.substring(1, selector.length); 
		 var element = document.getElementById(selector); 
 
		 myQobj = new myQuery(selector, true); 
		 myQobj.element = element; 
		 return myQobj; 
	 } 
 
	 else if(selector[0] == '.'){
		 var selector = selector.substring(1, selector.length); 
		 var classlist = document.getElementsByClassName(selector); 
	 
		 myQobj = new myQuery(selector, true); 
		 myQobj.classlist = classlist; 
		 return myQobj; 
 }
 
	 else if(this.selector=="div"){
		 var elementlist = document.getElementsByTagName(this.selector); 
	 
		 myQobj = new myQuery(this.selector, true); 
		 myQobj.elementlist = elementlist; 
		 return myQobj; 
 }
}
 else
	 return this;
 
}

 var $ = myQuery;
 
 myQuery.prototype = {
		   ready:           function(myFunciton) {
		                      if (window.attachEvent) {
		                          window.attachEvent('onload', myFunciton);
		                          console.log("IE");
		                      } else if (window.addEventListener) {
		                          window.addEventListener('load', myFunciton);
		                          console.log("Modern");
		                      } else {
		                          console.log("Legacy");
		                          if(window.onload) {
		                              var curronload = window.onload;
		                              var newonload = function() {
		                                  curronload();
		                                  myFunciton();
		                              };
		                              window.onload = newonload;
		                          } else {
		                              window.onload = myFunciton;
		                          }
		                      }
		                    },
		                    
		  getElement:      function() {
		                      return this.element;
		                    },
		                    
		                    
		  getElementList:     function() {
		                      return this.elementlist;
		                    },
		                    
		  
		                    
		  getSelector:      function() {
		                      return this.selector;
		                    },
		                    
		                    
		  addClass:			function(newClass){
			  					
			  						if(this.element!=null){
			  							if(this.element.className==null)
			  								this.element.className=newClass;
			  							else
			  								this.element.className+=(' ' + newClass);
			  						}
			  					
			  						else if(this.classlist!=null){
				  						var i=0;
				  						for (i = 0; i < this.classlist.length; i++) { 
				  							if(this.classlist[i].className==null)
				  								this.classlist[i].className=newClass;
				  							else
				  								this.classlist[i].className+=(' ' + newClass);
				  						}
			  						}
			  					
			  					
			  					
			  						else if(this.elementlist!=null){
				  						var i=0;
				  						for (i = 0; i < this.elementlist.length; i++) { 
				  							if(this.elementlist[i].className==null)
				  								this.elementlist[i].className=newClass;
				  							else
				  								this.elementlist[i].className+=(' ' + newClass);
				  						}
			  						}
			  						else
			  							return;
	
		                    },
		                    
		                    
		  removeClass:			function(newClass){
			  if(this.element!=null)
				  this.element.className=this.element.className.replace(newClass, '');
			
				else if(this.classlist!=null){
					var i=0;
					for (i = 0; i < this.classlist.length; i++) { 
						this.classlist[i].className=this.classlist[i].className.replace(newClass, '');
					}
				}
			
			
			
				else if(this.elementlist!=null){
					var i=0;
					for (i = 0; i < this.elementlist.length; i++) { 
						this.elementlist[i].className=this.elementlist[i].className.replace(newClass, '');
					}
				}
				else
					return;

      },


 };