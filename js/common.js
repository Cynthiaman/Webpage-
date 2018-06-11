
/** 
图片轮播
 */

function show(post){
		if(document.getElementById(post).style.display=='none'){
			document.getElementById(post).style.display='block';
			}else{
				document.getElementById(post).style.display='none';
			}
	}
	
	var picsArr=new Array();
		picsArr[0]="images/bigpic1.png";
		picsArr[1]="images/bigpic2.png";
		picsArr[2]="images/bigpic3.png";
		picsArr[3]="images/bigpic4.png";
		picsArr[4]="images/bigpic5.png";	
	var timer,index=0;	
	function showPic(){
		document.getElementById("pic").src=picsArr[index];
		if(index<(picsArr.length-1))
			index++;
		else
			index=(index+1)%picsArr.length;
		timer=setTimeout("showPic()",2000);
	}
	
	function showPrepic()
	{		
		if(index>0)
			index--;
		else
			index=4;
		document.getElementById("pic").src=picsArr[index];
		timer=setTimeout("showPrepic()",2000);
	}
	
	window.onload= function(){
		showPic();
		
	}

	