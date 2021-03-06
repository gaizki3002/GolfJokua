
    var canvas, ctx, container;
      canvas = document.createElement( 'canvas' );
      ctx = canvas.getContext("2d");
    
    var ball;
	var ang = 0;
    var angulo=ang*Math.PI*2/360;
	const keys = [];
    var vx = 0;
    var vy = 0;
    var golpe = 15;
    var gravity = 0.7;  
    var bounce = 0.5; 
    var xFriction = 0.9;
    var clima = Math.random()*(100-1)+1;
    var viento2 = 0;
	var viento = 0;
	var fondoSelectorSec = 1;
	var fondoSelector = 0;
	
	const fondo3 = new Image();
	const fondo1 = new Image(); 
	const imgBall = new Image();
	const imgNube1 = new Image();
	const imgNube2 = new Image();
	const fondoa = new Image();
	const fondo2 = new Image();
	const fondo4 = new Image();
	
	var nube1 = { x: 5, y: canvas.height*1/100,width: 300,height:200, abiadura: 2 };
	var nube2 = { x: 1000, y: canvas.height*80/100,width: 300,height:200, abiadura: 1.5 };
	var ball = { x:20, y:600, radius:10}; 
	imgNube1.src = 'nube 1.png';
	imgNube2.src = 'nube 2.png';
	imgBall.src = 'bola golf.png';
	fondoa.src = 'nivel 1.png';
	fondo1.src = 'Portada Diseño final.png';
	fondo2.src = 'nivel 2.png';
	fondo3.src = 'nivel 3 bueno.png';
	fondo4.src = 'Pantalla del final.png';
	
	window.addEventListener('keydown', function (fletxarenMugimendua) {
	   keys[fletxarenMugimendua.keyCode]=true;});
	 
	window.addEventListener('keyup', function (fletxarenMugimendua) {
	   keys[fletxarenMugimendua.keyCode] = false;});

    function init(){
      setupCanvas();
      climaF();
      
	  
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width, canvas.height); 
		viento2 = viento;
		if ( fondoSelector > 0 ){
			if (fondoSelector == 1){ctx.drawImage(fondoa, 0, 0, canvas.width, canvas.height);}
			else if (fondoSelector == 2){ctx.drawImage(fondo2, 0, 0, canvas.width, canvas.height);}
			else if (fondoSelector == 3){ctx.drawImage(fondo3, 0, 0, canvas.width, canvas.height);}
			else if (fondoSelector == 4){ctx.drawImage(fondo4, 0, 0, canvas.width, canvas.height);}
			if (fondoSelector!=4)ctx.drawImage(imgBall,ball.x-10,ball.y-5,ball.radius*2,ball.radius+2);
			ballMovement();
			if (vx==0&&vy==0&&fondoSelector!=4){
				ctx.beginPath();
				canvas_arrow(ctx,ball.x,ball.y,ball.x+100*Math.cos(angulo),ball.y-100*Math.sin(angulo));
				ctx.stroke();}
			if (fondoSelector == 1){
			ballMovement();}	
			else if (fondoSelector == 2){
			mugimendua2();}
			else if (fondoSelector == 3){
			mugimendua3();}
			
			fletxarenMugimendua();
			if (fondoSelector !=4){
			ctx.drawImage(imgNube1, nube1.x, nube1.y, nube1.width, nube1.height);
			ctx.drawImage(imgNube2, nube2.x, nube2.y, nube2.width, nube2.height);
			logikaHodeia();
			logikaHodeia2(); 
			}
			fondoAldaketa();
		}
		else {
		ctx.drawImage(fondo1, 0, 0, canvas.width, canvas.height);
		fondoAldaketa();
			}
	}
	setInterval(draw, 1000/35); 
  
	function logikaHodeia() {
    if (nube1.x > canvas.width) {
        nube1.x = -300;
    }
    else {
        nube1.x += nube1.abiadura;
    }
}

	function logikaHodeia2() {
    if (nube2.x > canvas.width) {
        nube2.x = -300;
    }
    else {
        nube2.x += nube2.abiadura;
    }
}
   
	function canvas_arrow(context, fromx, fromy, tox, toy) {
	  var headlen = 10;
	  var dx = tox - fromx;
	  var dy = toy - fromy;
	  var angle = Math.atan2(dy, dx);
	  ctx.strokeStyle = 'black';
	  context.moveTo(fromx, fromy);
	  context.lineTo(tox, toy);
	  context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
	  context.moveTo(tox, toy);
	  context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
	}

    function ballMovement(){
	if(fondoSelector ==1){
	if (ball.y>(canvas.height*73/100)){
	ball.x += vx+viento2;}
	else{
		ball.x+= vx;}
		
        ball.y += vy;
        vy += gravity;
        
		 if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0){
            vx *= -1;
        } 
   
			if (ball.x >= canvas.width*89.5/100 && ball.x <= canvas.width*92/100){
				if (ball.y + ball.radius > canvas.height*79/100)
				{
					ball.y = canvas.height*78/100 - ball.radius;
					fondoSelectorSec = 1;
					
				
					if(ball.x > canvas.width*88/100 || ball.x < canvas.width*93/100 )vx*=-1;
						
					if(Math.abs(vx)<1.1){
					 vx=0;
					}
				}
			}
			else if (ball.y + ball.radius >= (canvas.height*73/100)){
				  
				   ball.y = (canvas.height*73/100) - ball.radius;
					fondoSelectorSec = 0;
					  vy *= -bounce;
					  
					  if(vy<0 && vy>-2.1){
						vy=0;
						}	
					 if(Math.abs(vx)<1.1){
						vx=0;
						}
					xF();
			}        
		}
	}	
	
	function mugimendua2(){
		if(fondoSelector ==2){
		if (ball.y>(canvas.height*73/100)){
		ball.x += vx+viento2;}
		else{
			ball.x+= vx;}	
					
			ball.y += vy;
			vy += gravity;
				if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0){
						vx *= -1;
					}
				if (ball.x >= canvas.width*64.5/100 && ball.x <= canvas.width*66.5/100){
					if (ball.y + ball.radius > canvas.height*78/100)
					{
						ball.y = canvas.height*78/100 - ball.radius;
						
							fondoSelectorSec = 1;

						if(ball.x > canvas.width*80/100 || ball.x < canvas.width*92/100 )vx*=-1;
							
						if(Math.abs(vx)<1.1){
						 vx=0;
						}
					}
				}
				else{
				
				if (ball.x >= canvas.width*29/100 && ball.x <= canvas.width*57/100){
					xFriction = 0;
					}
				if (ball.x >= canvas.width*72/100 && ball.x <= canvas.width*89/100){
					xFriction = 0;
					}
				
				if (ball.y + ball.radius >= (canvas.height*73/100)){
				  
						ball.y = (canvas.height*73/100) - ball.radius;
						fondoSelectorSec = 0;
						vy *= -bounce;
						  
						  if(vy<0 && vy>-2.1){
							vy=0;
							}	
						 if(Math.abs(vx)<1.1){
							vx=0;
							}
						xF();
					}	     			
				}
			}
	}
	
	function mugimendua3(){
		
	if(fondoSelector ==3){
			if (ball.y>(canvas.height*73/100)){
			ball.x += vx+viento2;}
			else{
				ball.x+= vx;}	
						
				ball.y += vy;
				vy += gravity;
					if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0){
							vx *= -1;
						}
					if (ball.x >= canvas.width*93.5/100 && ball.x <= canvas.width*96/100){
						if (ball.y + ball.radius > canvas.height*64/100)
						{	if (ball.x + ball.radius >= (canvas.width*68/100)){
								vx*=-1;}
								ball.y = canvas.height*64/100 - ball.radius;
								vy=0;
								vx=0;
								fondoSelectorSec = 1;

							if(ball.x > canvas.width*80/100 || ball.x < canvas.width*92/100 )vx*=-1;
								
							if(Math.abs(vx)<1.1){
							 vx=0;
							}
						}
					}
					else{
					
					
					if (ball.x >= canvas.width*35/100 && ball.x <= canvas.width*43/100){
						xFriction = 0;
						}
						if (ball.x > canvas.width*65/100 && ball.x <= canvas.width*73/100){
							
							if (ball.y + ball.radius >= (canvas.height*68/100)){
								if (ball.x + ball.radius >= (canvas.width*72/100)){
								vx*=-1;}
								
							ball.y = (canvas.height*68/100) - ball.radius;
							fondoSelectorSec = 0;
							vy *= -bounce;
							  
							  if(vy<0 && vy>-2.1){
								vy=0;
								}	
							 if(Math.abs(vx)<1.1){
								vx=0;
								}
							xF();
						}	     			
				}
				
						if (ball.x > canvas.width*73/100 && ball.x <= canvas.width*100/100){
							
							if (ball.y + ball.radius >= (canvas.height*60/100)){
								
							ball.y = (canvas.height*60/100) - ball.radius;
							fondoSelectorSec = 0;
							vy *= -bounce;
							  
							  if(vy<0 && vy>-2.1){
								vy=0;
								}	
							 if(Math.abs(vx)<1.1){
								vx=0;
								}
							xF();
						}	     			
				}
				if (ball.x > canvas.width*0/100 && ball.x <= canvas.width*12/100){
							
							if (ball.y + ball.radius >= (canvas.height*60/100)){
								
							ball.y = (canvas.height*60/100) - ball.radius;
							fondoSelectorSec = 0;
							vy *= -bounce;
							  
							  if(vy<0 && vy>-2.1){
								vy=0;
								}	
							 if(Math.abs(vx)<1.1){
								vx=0;
								}
							xF();
						}	     			
				}
				if (ball.x > canvas.width*12/100 && ball.x <= canvas.width*19/100){
							
							if (ball.y + ball.radius >= (canvas.height*68/100)){
								
							ball.y = (canvas.height*68/100) - ball.radius;
							fondoSelectorSec = 0;
							vy *= -bounce;
							  
							  if(vy<0 && vy>-2.1){
								vy=0;
								}	
							 if(Math.abs(vx)<1.1){
								vx=0;
								}
							xF();
						}	     			
				}
					if (ball.y + ball.radius >= (canvas.height*73/100)){
							
							ball.y = (canvas.height*73/100) - ball.radius;
							fondoSelectorSec = 0;
							vy *= -bounce;
							  
							  if(vy<0 && vy>-2.1){
								vy=0;
								}	
							 if(Math.abs(vx)<1.1){
								vx=0;
								}
							xF();
						}	     			
				}
		}
	}
	
	function golpeo(){
	vx = golpe * Math.cos(angulo);
	vy = -(golpe * Math.sin(angulo));	
	viento2 = viento;
	}
	
    function xF(){
             if(vx>0)
                 vx = vx - xFriction;
             if(vx<0)
                 vx = vx + xFriction;
				xFriction = 0.9;
    }

	function setupCanvas(){
	container = document.createElement( 'div' );
	container.className = "container";
 
	canvas.width = window.innerWidth-20; 
	canvas.height = window.innerHeight-20; 
	document.body.appendChild( container );
	container.appendChild(canvas);	
 
	ctx.strokeStyle = "#ffffff";
	ctx.lineWidth =2;	
}

	function fletxarenMugimendua(){
        if (vx!=0&&vy!=0)return;
		else if (keys[38])
		{
		ang+=8;
		angulo=ang*Math.PI*2/360;
		}
		if (keys[40])
		{
		ang-=8;
		angulo=ang*Math.PI*2/360;
		}
		if (keys [32]&& ball.y != canvas.height - ball.radius-210){
		golpeo();}
  }

	function climaF(){
      if (clima<50 && clima >= 1){
      xFriction = 0.9;
      gravity = 0.7;
      }
      if (clima<80 && clima >= 50){
      xFriction = 0.9;
	  viento= Math.random()*(20)-10;
      gravity = 0.7;
	  nube1.abiadura*=2;
	  nube2.abiadura*=2;
      }
      if (clima >=80){
      xFriction=0.7;
      gravity = 1.5;
      bounce = 0.3;
     }
}

	function fondoAldaketa(){
		if (keys [13]&&fondoSelectorSec ==1&& fondoSelector<4){
		fondoSelectorSec = 0;
		fondoSelector++;
		ball.x = 10;
		ball.y = 550;
		vy = 0;
		vx = 0;
		}
	}