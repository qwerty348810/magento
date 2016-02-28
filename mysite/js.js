function changeImage2(form) {
    	form.man_img.src = form.man.value;

		
}
function changeImage3(form) {
    	form.woman_img.src = form.woman.value;

		
}											

function move_back(){
    	
    if(n>=2){ 
	n=n-1;
	document.getElementById('dream_date').value = n ;
	
	
	day_ned2=day_ned2-1;	
	c = text[day_ned2];
	if(day_ned2==-1){
	c = text[6];
	day_ned2=6;	
	}	
	document.getElementById('dream_center').innerHTML = c;
		
	p = procent [n];
	document.getElementById('dream_rigth_%').innerHTML = p;
	}else{
	document.getElementById('dream_date').value = '1' ;
	}
        
}
function move_go(){
    
	if(n<31){ 
	n=n+1;
	document.getElementById('dream_date').value = n ;

	
	day_ned2=day_ned2+1;
	c = text[day_ned2];
	if(day_ned2==7){
	c = text[0];
	day_ned2=0;	
	}	
	document.getElementById('dream_center').innerHTML = c;
	
		
	p = procent [n];
	document.getElementById('dream_rigth_%').innerHTML = p;
	}else{
	document.getElementById('dream_date').value = '31' ;
	}
        
        
}
function dream_hover1(){
	n=day.getDate();
	n=n-1;
	document.getElementById('dream_date').value = n;
	var day_ned=new Date().getDay();
	day_ned=day_ned-1;
	c = text[day_ned];
	document.getElementById('dream_center').innerHTML = c;
	
	p = procent [n];
	document.getElementById('dream_rigth_%').innerHTML = p;	
}
function dream_hover2(){
	n=day.getDate();
	document.getElementById('dream_date').value = n;
	c = text[day_ned];
	document.getElementById('dream_center').innerHTML = c;		
	p = procent [n];
	document.getElementById('dream_rigth_%').innerHTML = p;	
}

function dream_hover3(){
	n=day.getDate();
	n=n+1;
	document.getElementById('dream_date').value  = n;
	day_ned2=new Date().getDay();
	day_ned2=day_ned2+1;
	var c = text[day_ned2];
	if(day_ned2==7){
	c = text[0];
	day_ned2=0;	
	}
	document.getElementById('dream_center').innerHTML = c;
	
	var p = procent [n];
	document.getElementById('dream_rigth_%').innerHTML = p;
	
}