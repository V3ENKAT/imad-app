//console.log('Loaded!');
//Change the text of the main text div
//var element = document.getElementById('main-text');
//element.innerHTML = '---';

//move the image
//var img = document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
//    marginLeft=marginLeft+1;
//   img.style.marginLeft=marginLeft +'px'}
//img.onclick=function(){
//    var interval = setInterval(moveRigh//, 50);    }

// COUNTER CODE

var button = document.getElementById("counter")
button.onclick=function (){
    
    //Make a request to counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter+1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
    
}



