
var canvas;
var context;
var down=false;
var mousePosition;
var canvasImg;
var tab;
var canDraw;
var mode;
var image;
var temp;



function getMousePos(e)
{
    var x = e.clientX-canvas.offsetLeft;
    var y = e.clientY-canvas.offsetTop;
    return{
        x:x,
        y:y
    };
}


function getMousePos2(e)
{
    var x2 = e.clientX-canvas.offsetLeft;
    var y2 = e.clientY-canvas.offsetTop;
   
   if(mode==='pen'||mode==='eras')
   {
        if(down===true)
        {
            
            context.lineWidth=document.getElementById("paintSize").value;
            context.lineTo(x2,y2);
            context.stroke();
        }
   }
}

function drawPen()
{   
    canvas.addEventListener('mousemove',getMousePos2);    
    canvas.addEventListener('mousedown',function()
    {        
        down=true;
        context.beginPath(); 
        
        
        context.moveTo(mousePosition.x,mousePosition.y);
        if(mode==='pen')
        {
        context.strokeStyle=document.getElementById("kolor").value;    
        }
        if(mode==='eras')
        {
        context.strokeStyle='white';    
        }
        
    });
    canvas.addEventListener('mouseup',function(){down=false;});
    
}



function  getcanvasImg()
{
    canvasImg=context.getImageData(0,0,canvas.width,canvas.height);
    
}

function  putcanvasImg()
{
   context.putImageData(canvasImg,0,0);
    
}

function clearCanvas()
{
    context.clearRect(0,0,canvas.width, canvas.height);
}

function fillCanvas()
{
    context.fillStyle=document.getElementById("kolor").value;    
    context.fillRect(0,0,canvas.width,canvas.height); 
}

function drawLine(pos)
{
    context.beginPath();
    context.moveTo(mousePosition.x,mousePosition.y);
    context.lineTo(pos.x, pos.y);
    context.strokeStyle=document.getElementById("kolor").value;
    context.lineWidth=document.getElementById("paintSize").value;
    context.stroke();
}

function drawTriangle(pos)
{
    context.beginPath();
    context.strokeStyle=document.getElementById("kolor").value;
    context.lineWidth=document.getElementById("paintSize").value;
    context.moveTo(mousePosition.x,mousePosition.y);
    context.lineTo(pos.x,mousePosition.y);
    context.lineTo(mousePosition.x,pos.y);
    context.lineTo(mousePosition.x,mousePosition.y);
    context.stroke();
}

function drawEllipse(pos)
{
    
    var radius=Math.sqrt(Math.pow((mousePosition.x-pos.x),2)+Math.pow((mousePosition.x-pos.x),2));
    
    context.beginPath();
    
    context.strokeStyle=document.getElementById("kolor").value;
    context.lineWidth=document.getElementById("paintSize").value;
    context.arc(mousePosition.x,mousePosition.y,radius,0,2*Math.PI,false);
    context.stroke();
}

function drawRectangle(pos)
{
    
    context.beginPath();
    context.strokeStyle=document.getElementById("kolor").value;
    context.lineWidth=document.getElementById("paintSize").value;
   
    context.rect(mousePosition.x,mousePosition.y,pos.x-mousePosition.x,pos.y-mousePosition.y);
     
    context.stroke();
}

function openCanvas()
{
    document.getElementById('file').click();    
}






function mouseDown(e)
{
    down=true;
    mousePosition=getMousePos(e);
    
    getcanvasImg();
   
}

function mouseMove(e)
{
    var pos;
    if (down===true)
    {
       if (mode!=='pen'&&mode!=='eras')
        {
            putcanvasImg();



        }
        pos=getMousePos(e);        
        draw(pos);
        
        
    }
    
}

function mouseUp(e)
{
   
    down=false;
    if (mode!=='pen'&&mode!=='eras')
    {
        putcanvasImg();
        
        
        
    }
    var pos=getMousePos(e);
    draw(pos);
   
 
}




function draw(pos)
{
     
         if(mode==='pen'||mode==='eras')
         {             
             drawPen();
         }          
         if(mode==='lin')
         {
             drawLine(pos);
         }
         if(mode==='ell')
         {
             drawEllipse(pos);
         }
         if(mode==='rec')
         {
             drawRectangle(pos);
             
         }
         if(mode==='tri')
         {
             drawTriangle(pos);
         }
         
}

function init()
{
    canvas=document.getElementById("myCanvas");
    context=canvas.getContext('2d');
    
    
    context.lineCap='round';
    
    canvas.addEventListener('mousedown',mouseDown,false);
    canvas.addEventListener('mousemove',mouseMove,false);    
    canvas.addEventListener('mouseup',mouseUp,false);
    
    
    document.getElementById('file'),addEventListener('change',function(e)
         {
             
             temp=URL.createObjectURL(e.target.files[0]);
             image=new Image();
             image.src=temp;
             
             image.addEventListener('load',function()
             {
                 
                imageWidth=image.naturalWidth;
                imageHeight=image.naturalHeight;
                newImageWidth=imageWidth;
                newImageHeight=imageHeight;
                originalImageRatio=imageWidth/imageHeight;
                
                if(newImageWidth > newImageHeight && newImageWidth > 1000)
                {
                    newImageWidth = 1000;
                    newImageHeight = 1000 / originalImageRatio;
                }
                if(newImageWidth > newImageHeight && newImageHeight > 800)
                {
                    newImageHeight = 800;
                    newImageWidth = 800 * originalImageRatio;
                }
                if((newImageWidth>=newImageHeight || newImageHeight>newImageWidth)&&newImageHeight>800)
                {
                    newImageHeight = 800;
                    newImageWidth = 800 * originalImageRatio;
                }
                context.drawImage(image,0,0,newImageWidth,newImageHeight);
                URL.revokeObjectURL(temp);
             });
         });
    
    
    
    
    
    tab=[].slice.call(document.querySelectorAll('.paint-buttons .buttons'));
    
             tab.filter(function(el)                     
             {
                 return el.dataset.mode==='pen'
             })[0].classList.add('active');
             
             canDraw=false;
             mode='pen';
             
    
        tab.forEach(function(el)
         {
             el.addEventListener('click',function(e)
             {
                 e.currentTarget.classList.add('active');
                 mode=e.currentTarget.dataset.mode;
                 
                 tab.forEach(function(e2)
                 {
                     if(e2!==e.currentTarget)
                     {
                         e2.classList.remove('active');
                     }
                 });
             }.bind(this));
         },this);
        var link=document.getElementById('link');
        link.setAttribute('download', 'MintyPaper.png');
        link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        link.click();
         
         
    
}

window.addEventListener('load',init,false);