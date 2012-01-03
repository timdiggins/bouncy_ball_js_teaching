function get_canvas(){
   return document.getElementById('the-canvas');  
}
function get_ctx(){
   var canvas = get_canvas();
   return canvas.getContext('2d');  
}
function drawBall(xBall, yBall, fillStyle) {
    clear(); 
    var ctx = get_ctx();
    ctx.beginPath();  

    ctx.arc(xBall, yBall, radius, 0, 7);  
    ctx.fillStyle = style;
    ctx.fill();  
    //ctx.stroke();    
}
function clear(ctx){
    var canvas = get_canvas();
    var ctx = get_ctx();
    // Store the current transformation matrix
    ctx.save();
    
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Restore the transform
    ctx.restore();
}
intervalId = undefined;
function reset(newFrameRate){
    if(newFrameRate){
        frameRate=newFrameRate;
    }
    if(frameRate>60){
        frameRate = 60;
    }
    if (intervalId){
        clearInterval(intervalId);
    }
    intervalId = setInterval(eachFrameWrapper, Math.floor(1000/frameRate));
    return 'reset(frameRate) --  reset framerate to '+ frameRate+"/s";
}
$(function(){
   restart();
   reset();
   help();
});

function eachFrameWrapper(){
    eachFrame();
    $('#x').html(x);
    $('#y').html(y);
    $('#x_direction').html(x_direction);
    $('#y_direction').html(y_direction);
}
function help(){
   console.log("You can use:");
   console.log("\trestart() to put the ball back");
   console.log("\treset(frameRate) to change the framerate")
   console.log("\ttell() to give info") 
   console.log("\thelp() to give this message") 
   return "help()";
}
function tell(){
    console.log("x:  "+x ); 
    console.log("y:  "+y );
    console.log("x_direction: "+x_direction+"/s"); 
    console.log("y_direction: "+y_direction+"/s");
    console.log("ball_colour:  "+ball_colour );
    console.log("--  frameRate: "+frameRate+"/s -- use reset(newframerate) to change"); 
    console.log("--  radius:    "+radius); 
    return "tell() -- output some useful info";
}
function restart(){
    x = 20;
    y = 20,
    x_direction = 5;
    y_direction = 5;
    speed = 5;
    $('#speed').html(speed);
    $('#frame_rate').html(frameRate);
    start();    
    return 'reset() -- restart ball to original position: use tell() to find out';
}
function start(){
    return 'start() -- define your own start function to change x, y, x_direction, y_direction';
}
function printout(something){
    console.log(something);
}

frameRate = 5;
radius = 10;
ball_colour = "black";

// needs:
// grid in the background
// boxes with x,y printed out
// with labelled axes
// box to type in the code with no save and reload (saves) 
// buttons for restart();

// for game with paddles:
