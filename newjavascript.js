/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var canvas;
var ctx;
var mouse=false;
var positionX, positionY;
var canvasImg;
var mousePosition;

var pen=document.getElementById("pen");
var eraser=document.getElementById("eraser");
var line=document.getElementById("line");
var color=document.getElementById("color");
var rec=document.getElementById("rectangle");
var ell=document.getElementById("ellipse");
var range=document.getElementById("range");
var clear=document.getElementById("clear");
var saveFile=document.getElementById("saveFile");
var fill=document.getElementById("fill");
var trin=document.getElementById("triangle");
var pol=document.getElementById("polygon");
var shapes=document.getElementById("shapes");
pen.style.border="2px solid red";


function  getcanvasImg()
{
    canvasImg=ctx.getImageData(0,0,canvas.width,canvas.height);    
}

function  putcanvasImg()
{
   ctx.putImageData(canvasImg,0,0);    
}

function clearCanvas()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function fillCanvas()
{
    ctx.fillStyle=document.getElementById("color").value;    
    ctx.fillRect(0,0,canvas.width,canvas.height); 
}

function drawLine(pos)
{
    ctx.beginPath();
    ctx.moveTo(mousePosition.x,mousePosition.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("range").value;
    ctx.stroke();
}

function drawPen()
{   
    canvas.addEventListener('mousemove',getMousePos2);    
    canvas.addEventListener('mousedown',function()
    {        
        mouse=true;
        ctx.beginPath();   
        if(pen.style.border==="2px solid red")
        {
            ctx.strokeStyle=document.getElementById("color").value;
        }
        if(eraser.style.border==="2px solid red")
        {
            ctx.strokeStyle="white";
        }
        ctx.moveTo(mousePosition.x,mousePosition.y);        
                           
    });
    canvas.addEventListener('mouseup',function(){mouse=false;});
    
}
function drawTriangle(pos)
{
    ctx.beginPath();
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("range").value;
    ctx.moveTo(mousePosition.x,mousePosition.y);
    ctx.lineTo(pos.x,mousePosition.y);
    ctx.lineTo(mousePosition.x,pos.y);
    ctx.lineTo(mousePosition.x,mousePosition.y);
    ctx.stroke();
}

function drawEllipse(pos)
{
    
    var radius=Math.sqrt(Math.pow((mousePosition.x-pos.x),2)+Math.pow((mousePosition.x-pos.x),2));
    
    ctx.beginPath();
    
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("range").value;
    ctx.arc(mousePosition.x,mousePosition.y,radius,0,2*Math.PI,false);
    ctx.stroke();
}
function drawPolygon(pos,sides,angle)
{
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("range").value;  
    var coordinates=[];
    radius=Math.sqrt(Math.pow((mousePosition.x-pos.x),2)+Math.pow((mousePosition.x-pos.x),2));
    index=0;
    for(index=0; index<sides; index++){
        coordinates.push({x:mousePosition.x+radius*Math.cos(angle),y:mousePosition.y-radius*Math.sin(angle)});
        angle+=(2*Math.PI)/sides;
    }
    ctx.beginPath();
    ctx.moveTo(coordinates[0].x,coordinates[0].y);
    for(index=1; index<sides; index++){
        ctx.lineTo(coordinates[index].x,coordinates[index].y);
    }
    ctx.closePath();
    ctx.stroke();
}






function drawRectangle(pos)
{
    
    
    ctx.beginPath();
    
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.lineWidth=document.getElementById("range").value;   
    ctx.rect(mousePosition.x,mousePosition.y,pos.x-mousePosition.x,pos.y-mousePosition.y);     
    ctx.stroke();
}
function openFile()
{
    document.getElementById('file').click();
}













function getMousePos(e)
{
    var rect=canvas.getBoundingClientRect();
    return{
        x: e.clientX-rect.left,
        y: e.clientY-rect.top
    };
}

function getMousePos2(e)
{   
    var x2 = e.clientX-canvas.offsetLeft;
    var y2 = e.clientY-canvas.offsetTop;
   
   if(pen.style.border==="2px solid red"||eraser.style.border==="2px solid red")
   {
        if(mouse===true)
        {            
            ctx.lineWidth=document.getElementById("range").value;
            ctx.lineTo(x2,y2);
            ctx.stroke();
        }
   }
}








function changeButt()
{
    ctx.lineCap='butt';
}
function changeRound()
{
    ctx.lineCap='round';
}

function changeSquare()
{
    ctx.lineCap='square';
}










function mouseDown(e)
{
    mouse=true;
    mousePosition=getMousePos(e);    
    getcanvasImg();   
}

function mouseMove(e)
{
    var pos;
    if (mouse===true)
    {
        
       if (pen.style.border!=="2px solid red"&&eraser.style.border!=="2px solid red")
        {
            putcanvasImg();
        }
        pos=getMousePos(e);        
        draw(pos);      
        
    }    
}

function mouseUp(e)
{
   
    mouse=false;
    if (pen.style.border!=="2px solid red"&&eraser.style.border!=="2px solid red")
    {
        putcanvasImg();                        
    }
    var pos=getMousePos(e);
    draw(pos);    
}







function draw(pos)
{             
    var shape=document.getElementById("shapes").value;
    var angle=document.getElementById("angles").value;
    if(pen.style.border==="2px solid red"||eraser.style.border==="2px solid red")
    {
        drawPen();
    }
    if(line.style.border==="2px solid red")
    {
        drawLine(pos);
    }      
    if(rec.style.border==="2px solid red")
    {
        drawRectangle(pos);
    }
    if(ell.style.border==="2px solid red")
    {
        drawEllipse(pos);
    }
    if(trin.style.border==="2px solid red")
    {
        drawTriangle(pos);
    }          
    if(pol.style.border==="2px solid red")
    {
        drawPolygon(pos,shape,angle*(Math.PI/180));
    }
}
function fillCanvas()
{
    ctx.fillStyle=document.getElementById("color").value;    
    ctx.fillRect(0,0,canvas.width,canvas.height); 
}



function penClick()
{   
    eraser.style.border="none";
    pen.style.border="2px solid red";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="none";
    fill.style.border="none";
    clear.style.border="none";
    pol.style.border="none";
    
}
function eraserClick()
{        
    eraser.style.border="2px solid red";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="none";    
    fill.style.border="none";
    clear.style.border="none";
    pol.style.border="none";
}
function lineClick()
{               
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="2px solid red";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="none";
    fill.style.border="none";
    clear.style.border="none";
    pol.style.border="none";
}
function recClick()
{
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="2px solid red";
    ell.style.border="none";
    fill.style.border="none";
    clear.style.border="none";
    pol.style.border="none";
}
function ellClick()
{
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="2px solid red";
    fill.style.border="none";
    clear.style.border="none";
    pol.style.border="none";
}

function triangleClick()
{ 
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="2px solid red";
    rec.style.border="none";
    ell.style.border="none";
    fill.style.border="none";
    clear.style.border="none";
    pol.style.border="none";


}
function fillClick()
{
    fill.style.border="2px solid red";
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="none";    
    clear.style.border="none";
    pol.style.border="none";
    fillCanvas();
}


function clearClick()
{
    window.location.reload();
    fill.style.border="none";
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="none"; 
    clear.style.border="2px solid red";
    pol.style.border="none";
}
function polClick()
{
    pol.style.border="2px solid red";
    eraser.style.border="none";
    pen.style.border="none";
    line.style.border="none";
    trin.style.border="none";
    rec.style.border="none";
    ell.style.border="none";    
    fill.style.border="none";
    clear.style.border="none";
}

function saveClick()
{
    var data=canvas.toDataURL();
    console.log(data);
    saveFile.href=data;
    saveFile.download="myImage.png";
}

function init()
{
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    
    canvas.addEventListener("mousedown",mouseDown,false);
    canvas.addEventListener("mousemove",mouseMove,false);
    canvas.addEventListener("mouseup",mouseUp,false);
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.lineCap='round';
    
    pen.addEventListener("click",penClick);
    eraser.addEventListener("click",eraserClick);    
    clear.addEventListener("click",clearClick);
    saveFile.addEventListener("click",saveClick);
    rec.addEventListener("click",recClick);
    ell.addEventListener("click",ellClick);
    line.addEventListener("click",lineClick);
    trin.addEventListener("click",triangleClick);
    fill.addEventListener("click",fillClick);
    pol.addEventListener("click",polClick);
    
    document.getElementById('file'),addEventListener('change',function(e)
         {
             
             var temp=URL.createObjectURL(e.target.files[0]);
             var image=new Image();
             image.src=temp;
             
             image.addEventListener('load',function()
             {
                 
                imageWidth=image.naturalWidth;
                imageHeight=image.naturalHeight;
                newImageWidth=imageWidth;
                newImageHeight=imageHeight;
                originalImageRatio=imageWidth/imageHeight;
                
                if(newImageWidth > newImageHeight && newImageWidth > canvas.width)
                {
                    newImageWidth = canvas.width;
                    newImageHeight = canvas.width / originalImageRatio;
                }
                if(newImageWidth > newImageHeight && newImageHeight > canvas.height)
                {
                    newImageHeight = canvas.height;
                    newImageWidth = canvas.height * originalImageRatio;
                }
                if((newImageWidth>=newImageHeight || newImageHeight>newImageWidth)&&newImageHeight>800)
                {
                    newImageHeight = canvas.height;
                    newImageWidth = canvas.height * originalImageRatio;
                }
                ctx.drawImage(image,0,0,newImageWidth,newImageHeight);
                URL.revokeObjectURL(temp);
             });
         });
    
    
    
}

window.addEventListener('load',init,false);