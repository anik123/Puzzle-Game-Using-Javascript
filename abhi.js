
       var user;
	   var count;
       var gameArray=new Array();
       gameArray[1]="1.JPG";
       gameArray[2]="2.JPG";
       gameArray[3]="3.JPG";
       gameArray[4]="4.JPG";
       gameArray[5]="5.JPG";
       gameArray[6]="6.JPG";
       gameArray[7]="7.JPG";
       gameArray[8]="8.JPG";
       gameArray[9]="blank.JPG";
       
	   var abhi=new Array();
	   for(var i=1;i<=9;i++)
	   abhi[i]=gameArray[i];
	   function  theme2()
	   {
		   gameArray[1]="1.JPG";
       gameArray[2]="2.JPG";
       gameArray[3]="3.JPG";
       gameArray[4]="4.JPG";
       gameArray[5]="5.JPG";
       gameArray[6]="6.JPG";
       gameArray[7]="7.JPG";
       gameArray[8]="8.JPG";
       gameArray[9]="blank.JPG";
	   for(var i=1;i<=9;i++)
	   abhi[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=abhi[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=abhi[i];
				 }
		   
		   
		   }
		   function  theme3()
	   {
		   gameArray[1]="a_01.jpg";
       gameArray[2]="a_02.jpg";
       gameArray[3]="a_03.jpg";
       gameArray[4]="a_04.jpg";
       gameArray[5]="a_05.jpg";
       gameArray[6]="a_06.jpg";
       gameArray[7]="a_07.jpg";
       gameArray[8]="a_08.jpg";
       gameArray[9]="blank.JPG";
	   for(var i=1;i<=9;i++)
	   abhi[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=abhi[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=abhi[i];
				 }
		   
		   
		   }
		   function  theme4()
	   {
		   gameArray[1]="ab_01.jpg";
       gameArray[2]="ab_02.jpg";
       gameArray[3]="ab_03.jpg";
       gameArray[4]="ab_04.jpg";
       gameArray[5]="ab_05.jpg";
       gameArray[6]="ab_06.jpg";
       gameArray[7]="ab_07.jpg";
       gameArray[8]="ab_08.jpg";
       gameArray[9]="blank.JPG";
	   for(var i=1;i<=9;i++)
	   abhi[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=abhi[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=abhi[i];
				 }
		   
		   
		   }
	   function theme1()
	   {
		    gameArray[1]="mi_01.jpg";
       gameArray[2]="mi_02.jpg";
       gameArray[3]="mi_03.jpg";
       gameArray[4]="mi_04.jpg";
       gameArray[5]="mi_05.jpg";
       gameArray[6]="mi_06.jpg";
       gameArray[7]="mi_07.jpg";
       gameArray[8]="mi_08.jpg";
       gameArray[9]="blank.JPG";
	   for(var i=1;i<=9;i++)
	   abhi[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=abhi[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=abhi[i];
				 }
		   
		   
		   }
	   function on()
	   {       count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=abhi[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=abhi[i];
                
				 }
  user=prompt("Enter Your name ");
	           document.getElementById("welcome").innerText="WELCOME : "+user;
	   }
	   
	   
       function imageClicked(imageId,imageNumber)
        {
            var selectedImageSrc=gameArray[imageNumber];
            
            if(selectedImageSrc=="blank.JPG")
            {
               // document.getElementById("error").innerText="Blank Can't Move";
			   alert("Can't Move");
            }
            
            else
            {            
                
                var index=0; 
                
                for(var i=1;i<=9;i++)
                {
                    if(gameArray[i]=="blank.JPG")
                    {
                        index=i;
                        break;                        
                    }
                }
                
                
				if(gameArray[imageNumber+1]==gameArray[index] || gameArray[imageNumber-1]==gameArray[index] || gameArray[imageNumber+3]==gameArray[index] || gameArray[imageNumber-3]==gameArray[index])
				{
					//document.getElementById("error").innerText="";
					
				var destImageId="im"+index;
                
                document.getElementById(destImageId).src=selectedImageSrc;
                document.getElementById(imageId).src="blank.JPG";
                
                gameArray[imageNumber]="blank.JPG";
                gameArray[index]=selectedImageSrc;
				count++;
				document.getElementById("error").innerText="Total Moves : "+count;
				
               } 
			else
			{
			    //document.getElementById("error").innerText="Wrong Movement";
				alert("Wrong MoveMent");
			}
			   
			  
			   var temp=0;			   
               for(var i=1;i<=9;i++)
			   {
			      if(gameArray[i]!=abhi[i]){
				  temp=1;
				  break;
				  }
			   }
               if(temp==0){
                    window.location="winner.html";	
			       //alert("comgrtss !! you win :). ");
			   }
            
			}
        }       
      