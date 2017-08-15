//console.log('Loaded!');
//Change the text of the main text div
var element = document.getElementById('main-text');
element.innerHTML = '---';

//move the image
//var img = document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
//    marginLeft=marginLeft+1;
//   img.style.marginLeft=marginLeft +'px'}
//img.onclick=function(){
//    var interval = setInterval(moveRigh//, 50);    }

// COUNTER CODE

var button = document.getElementById("counter");
var counter = 0;

button.onclick=function (){
    
    //Create a request
 var request = new HTMLHttpReqest();
 
     //Capture the response and store it in a variable
 request.onreadystatechange = function (){
     if (request.readystate === XMLHttpRequest.DONE){
         //Take some action
       if(request.status === 200){  
        var counter = request.responseText
        var span= document.getElementById('count');
        span.innerHTML=counter.toString();
    
    
     }
     //Not done yet
 }   
   
    //Make the request
    request.open('GET', 'http://sanvenkat21072017.imad.hasura-app.io/counter')
    request.send(null);
};



