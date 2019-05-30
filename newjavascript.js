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
var cPushArray;
var cStep;

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
var angles=document.getElementById("angles");
var brush=document.getElementById("brush");
var fur=document.getElementById("fur");
var pen_wid=document.getElementById("pen_wid");
var penmul=document.getElementById("penmul");
var thick=document.getElementById("thick");
var pennor=document.getElementById("pen_norm");
var rysone=document.getElementById("rysone");
var rystwo=document.getElementById("rystwo");
var rysthree=document.getElementById("rysthree");
var rysfour=document.getElementById("rysfour");
var rysfife=document.getElementById("rysfife");

var grd=document.getElementById("gradient");
var ngrd=document.getElementById("normalcolor");

ngrd.style.border="2px solid red";

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
        
        if(pen_wid.style.border==="2px solid red")
        {
            document.getElementById("range").value="1";            
        }
       
        ctx.moveTo(mousePosition.x,mousePosition.y);        
                           
    });
    canvas.addEventListener('mouseup',function(){
       
        mouse=false;});
}
function pendraw()
{    
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="2px solid red";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    
    
    var el = document.getElementById('canvas');
    ctx = el.getContext('2d');
    
    el.onmousedown = function() {
        
      return;
    };

    el.onmousemove = function() {
      return;
    };

    el.onmouseup = function() {
      return;
    };
}
function drawCostam()
{    
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="2px solid red";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    
    var img = new Image();
    img.src = 'obrazy/brush2.png';

    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }

    var el = document.getElementById('canvas');
    
    

    var isDrawing, lastPoint;

    el.onmousedown = function(e) {
        
      isDrawing = true;
      lastPoint = { x: e.clientX, y: e.clientY };
    };

    el.onmousemove = function(e) {
      if (!isDrawing) return;

      var currentPoint = { x: e.clientX, y: e.clientY };
      var dist = distanceBetween(lastPoint, currentPoint);
      var angle = angleBetween(lastPoint, currentPoint);

      for (var i = 0; i < dist; i++) {
        x = lastPoint.x + (Math.sin(angle) * i) - 25;
        y = lastPoint.y + (Math.cos(angle) * i) - 25;
        ctx.drawImage(img, x, y);
      }

      lastPoint = currentPoint;
    };

    el.onmouseup = function() {
      isDrawing = false;
    };
}
function drawCostam2()
{
    thick.style.border="none";
    fur.style.border="2px solid red";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    
    var img = new Image();
    img.src = 'obrazy/brush2.png';
    img.crossOrigin = "Anonymous";
    img.width = 10;

    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var el = document.getElementById('canvas');
    var ctx = el.getContext('2d');
    

    var isDrawing, lastPoint;

    el.onmousedown = function(e) {
      isDrawing = true;
      lastPoint = { x: e.clientX, y: e.clientY };
    };

    el.onmousemove = function(e) {
      if (!isDrawing) return;

      var currentPoint = { x: e.clientX, y: e.clientY };
      var dist = distanceBetween(lastPoint, currentPoint);
      var angle = angleBetween(lastPoint, currentPoint);

      for (var i = 0; i < dist; i++) {
        x = lastPoint.x + (Math.sin(angle) * i);
        y = lastPoint.y + (Math.cos(angle) * i);
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(0.5, 0.5);
        ctx.rotate(Math.PI * 180 / getRandomInt(0, 180));
        ctx.drawImage(img, 0, 0);
        ctx.restore();
      }

      lastPoint = currentPoint;
    };

    el.onmouseup = function() {
      isDrawing = false;
    };
}
function drawCostam3()
{
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="2px solid red";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    
   document.getElementById("range").value="1";
    
    
    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }

    var el = document.getElementById('canvas');
    
    ctx.fillStyle = "black";
    

    var isDrawing, lastPoint;

    el.onmousedown = function(e) {
          
      isDrawing = true;
      lastPoint = { x: e.clientX, y: e.clientY };
    };

    el.onmousemove = function(e) {
      if (!isDrawing) return;
      var currentPoint = { x: e.clientX, y: e.clientY };
      var dist = distanceBetween(lastPoint, currentPoint);
      var angle = angleBetween(lastPoint, currentPoint);

      for (var i = 0; i < dist; i+=5) {
        x = lastPoint.x + (Math.sin(angle) * i) - 25;
        y = lastPoint.y + (Math.cos(angle) * i) - 25;
        ctx.beginPath();
        ctx.arc(x+10, y+10, 20, false, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      lastPoint = currentPoint;
    };

    el.onmouseup = function() {
      isDrawing = false;
    };
}
function drawCostam4()
{
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="2px solid red";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    
       function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var el = document.getElementById('canvas');
      

      
      var isDrawing, points = [ ];

var rect=canvas.getBoundingClientRect();
      el.onmousedown = function(e) {
          getcanvasImg(); 
        isDrawing = true;
        points.push({ 
          x: e.clientX-rect.left, 
          y: e.clientY-rect.top,
          width: getRandomInt(3, 7)
        });
      };

      el.onmousemove = function(e) {
        if (!isDrawing) return;
        putcanvasImg();
        

        points.push({ 
          x: e.clientX-rect.left, 
          y: e.clientY-rect.top,
          width: getRandomInt(3, 7)
        });

        for (var i = 1; i < points.length; i++) {
          ctx.beginPath();
          ctx.moveTo(points[i-1].x, points[i-1].y);
          ctx.lineWidth = points[i].width;
          ctx.lineTo(points[i].x, points[i].y);
          ctx.stroke();
        }
      };

      el.onmouseup = function() {
        
        isDrawing = false;
        points.length = 0;
      };
}
function drawCostam5()
{
    thick.style.border="2px solid red";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    
            function drawPixels(x, y) {
    for (var i = -10; i < 10; i+= 4) {
      for (var j = -10; j < 10; j+= 4) {
        if (Math.random() > 0.5) {
          ctx.fillStyle = ['red', 'orange', 'yellow', 'green', 
                           'light-blue', 'blue', 'purple'][getRandomInt(0,6)];
          ctx.fillRect(x+i, y+j, 4, 4);
        }
      }
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var el = document.getElementById('canvas');
  var ctx = el.getContext('2d');

  
  var isDrawing, lastPoint;

  el.onmousedown = function(e) {
    isDrawing = true;
    lastPoint = { x: e.clientX, y: e.clientY };
  };
  el.onmousemove = function(e) {
    if (!isDrawing) return;

    drawPixels(e.clientX, e.clientY);

    lastPoint = { x: e.clientX, y: e.clientY };
  };
  el.onmouseup = function() {
    isDrawing = false;
  };
}

function drawCostam6()
{
    
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="2px solid red";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    var el = document.getElementById('canvas');
    
    
    
    var rect=canvas.getBoundingClientRect();
    var clientX, clientY, timeout;
    var density = 60;

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    el.onmousedown = function(e) {
      
      clientX = e.clientX-rect.left;
      clientY = e.clientY-rect.top;

      timeout = setTimeout(function draw() {
        for (var i = density; i--; ) {
          var radius = 40;
          var offsetX = getRandomInt(-radius, radius);
          var offsetY = getRandomInt(-radius, radius);
          ctx.fillStyle=document.getElementById("color").value;
          ctx.fillRect(clientX + offsetX, clientY + offsetY,1, 1);
        }
        if (!timeout) return;
        timeout = setTimeout(draw, 60);
      }, 50);
    };
    el.onmousemove = function(e) {
      clientX = e.clientX-rect.left;
      clientY = e.clientY-rect.top;
    };
    el.onmouseup = function() {
      clearTimeout(timeout);
    };
}
function drawCostam7()
{
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="2px solid red";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    
    function midPointBtw(p1, p2) {
    return {
      x: p1.x + (p2.x - p1.x) / 2,
      y: p1.y + (p2.y - p1.y) / 2
    };
  }

  var el = document.getElementById('canvas');
 

  
  document.getElementById("range").value="1";
  
  var rect=canvas.getBoundingClientRect();
 
  var isDrawing, points = [ ];

  el.onmousedown = function(e) {
      getcanvasImg();  
    isDrawing = true;
    points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });
  };

  el.onmousemove = function(e) {
    if (!isDrawing) return;
    putcanvasImg();
    points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });
    

    stroke(offsetPoints(-10));
    stroke(offsetPoints(-5));
    stroke(points);
    stroke(offsetPoints(5));
    stroke(offsetPoints(10));
  };

  function offsetPoints(val) {
    var offsetPoints = [ ];
    for (var i = 0; i < points.length; i++) {
      offsetPoints.push({ 
        x: points[i].x + val,
        y: points[i].y + val
      });
    }
    return offsetPoints;
  }

  function stroke(points) {
    var p1 = points[0];
    var p2 = points[1];

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);

    for (var i = 1, len = points.length; i < len; i++) {
      // we pick the point between pi+1 & pi+2 as the
      // end point and p1 as our control point
      var midPoint = midPointBtw(p1, p2);
      ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
      p1 = points[i];
      p2 = points[i+1];
    }
   
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();
  }

  el.onmouseup = function() {
    isDrawing = false;
    points.length = 0;
  };

}

function drawCostam8()
{
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="2px solid red";
    rysfour.style.border="none";
    rysfife.style.border="none";
    penClick();
    var el = document.getElementById('canvas');
    

    document.getElementById("range").value="1";
    
    var rect=canvas.getBoundingClientRect();

    var isDrawing, points = [ ];

    el.onmousedown = function(e) {
        getcanvasImg(); 
      isDrawing = true;
      points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });
    };

    el.onmousemove = function(e) {
      if (!isDrawing) return;
      putcanvasImg();
      
      points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
        var nearPoint = points[i-5];
        if (nearPoint) {
          ctx.moveTo(nearPoint.x, nearPoint.y);
          ctx.lineTo(points[i].x, points[i].y);
        }
      }
      ctx.stroke();
    };

    el.onmouseup = function() {
      isDrawing = false;
      points.length = 0;
    };
}
function drawCostam9()
{
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="2px solid red";
    rysfife.style.border="none";
    penClick();
    
    var el = document.getElementById('canvas');
    

    document.getElementById("range").value="1";
   
    var rect=canvas.getBoundingClientRect();
    
   
   

    var isDrawing, points = [ ];

    el.onmousedown = function(e) {
         
      points = [ ];
      isDrawing = true;
      points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });
    };

    el.onmousemove = function(e) {
      if (!isDrawing) return;
      
      
      points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });

      ctx.beginPath();
      ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.stroke();

      for (var i = 0, len = points.length; i < len; i++) {
        dx = points[i].x - points[points.length-1].x;
        dy = points[i].y - points[points.length-1].y;
        d = dx * dx + dy * dy;

        if (d < 1000) {
          
          ctx.strokeStyle = document.getElementById("color");
          ctx.moveTo( points[points.length-1].x + (dx * 0.2), points[points.length-1].y + (dy * 0.2));
          ctx.lineTo( points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
          ctx.stroke();
        }
      }
    };

    el.onmouseup = function() {
        
      
      isDrawing = false;
      points.length = 0;
    };
}

function drawCostam10()
{
    
    thick.style.border="none";
    fur.style.border="none";
    pen_wid.style.border="none";
    penmul.style.border="none";
    brush.style.border="none";
    pennor.style.border="none";
    rysone.style.border="none";
    rystwo.style.border="none";
    rysthree.style.border="none";
    rysfour.style.border="none";
    rysfife.style.border="2px solid red";
    penClick();
    
    
    
    var rect=canvas.getBoundingClientRect();
    var el = document.getElementById('canvas');
    ctx = el.getContext('2d');
    var isDrawing;

    var isDrawing, points = [ ];

    el.onmousedown = function(e) {
        getcanvasImg(); 
      isDrawing = true;
      points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });
    };

    el.onmousemove = function(e) {
      if (!isDrawing) return;
putcanvasImg();
      
      points.push({ x: e.clientX-rect.left, y: e.clientY-rect.top });

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    };

    el.onmouseup = function() {
      isDrawing = false;
      points.length = 0;
    };
}

































function drawTriangle(pos)
{
    ctx.beginPath();
   
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
    
    
    ctx.lineWidth=document.getElementById("range").value;
    ctx.arc(mousePosition.x,mousePosition.y,radius,0,2*Math.PI,false);
    ctx.stroke();
}
function drawPolygon(pos,sides,angle)
{
    
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
    
    
    ctx.lineWidth=document.getElementById("range").value;   
    ctx.rect(mousePosition.x,mousePosition.y,pos.x-mousePosition.x,pos.y-mousePosition.y);     
    ctx.stroke();
}
function openFile()
{
    document.getElementById('file').click();
}



function minuscanvas()
{           
    canvas.width-=100; 
    canvas.height-=100;
}
function pluscanvas()
{   
    canvas.width+=100; 
    canvas.height+=100;
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
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.shadowBlur=0;
}
function changeRound()
{
    ctx.lineCap='round';
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.shadowBlur=0;
}

function changeSquare()
{
    ctx.lineCap='square'; 
    ctx.strokeStyle=document.getElementById("color").value;
    ctx.shadowBlur=0;
}
function changeShadow()
{
    ctx.shadowBlur=10;
    ctx.shadowColor=document.getElementById("color").value;
}
function nochangeShadow()
{
    ctx.shadowBlur=0;
    ctx.shadowColor=document.getElementById("color").value;
}
function grad()
{
   
    grd.style.border="2px solid red";
    ngrd.style.border="none";
    var g=ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    g.addColorStop(0,document.getElementById("color").value);
    g.addColorStop(1,"black");
    ctx.strokeStyle=g; 
    if(rysone.style.border==="2px solid red"||thick.style.border==="2px solid red"||brush.style.border==="2px solid red"||fur.style.border==="2px solid red")
    {
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";            
    }
    if(eraser.style.border==="2px solid red")
    {
        ctx.strokeStyle="white";
    }
}
function norcol()
{
    grd.style.border="none";
    ngrd.style.border="2px solid red";
    
    ctx.strokeStyle=document.getElementById("color").value;
    if(rysone.style.border==="2px solid red"||thick.style.border==="2px solid red"||brush.style.border==="2px solid red"||fur.style.border==="2px solid red")
    {
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";            
    }
    if(eraser.style.border==="2px solid red")
    {
        ctx.strokeStyle="white";
    }
}







function mouseDown(e)
{
    
    ctx.globalAlpha=document.getElementById("opa").value;
     
    mouse=true;
    mousePosition=getMousePos(e);   
    
    getcanvasImg();       
}

function mouseMove(e)
{
    ctx.globalAlpha=document.getElementById("opa").value;
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
    ctx.globalAlpha=document.getElementById("opa").value;
    cPush();
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
    if(grd.style.border==="2px solid red")
    {
        grad();
    }
    if(ngrd.style.border==="2px solid red")
    {
        norcol();
    }
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
    pendraw();
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
    pendraw();
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
    pendraw();
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
    pendraw();
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
    
pendraw();
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
    pendraw();
}




function saveClick()
{
    var data=canvas.toDataURL();
    console.log(data);
    saveFile.href=data;
    saveFile.download="myImage.png";
}
cPushArray=new Array();
    cStep=-1;

function cPush()
{
    cStep++;
    if(cStep<cPushArray.length)
    {
        cPushArray.length=cStep;
    }
    cPushArray.push(document.getElementById("canvas").toDataURL());
    document.title = cStep + ":" + cPushArray.length;
}
function goBack()
{
    if(cStep>0)   
    {
        cStep--;
        var canvasPic=new Image();
        canvasPic.src=cPushArray[cStep];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasPic.onload=function(){ctx.drawImage(canvasPic,0,0,canvas.width,canvas.height);}
        
    }
    
}
function goForward() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
    }
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