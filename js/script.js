/* global $ */


// FOR NEXT TIME: WE COULD NOT FIX A BUG "$ IS NOT DEFINED". ASK ONE OF THE VOLUNTEERS!

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

$("#message").html(sneakers("high", " no lace"," open toe"));

});

function sneakers(qr1, qr2, qr3 ){
    var message= "your sneaker is a " + " " + qr1 + " " + qr2 + " " + qr3 + " " + "!";
    return message;

}

 function hightop(q1R) {
    if (q1R=== "high")
    { 
        return 3; }
    else if (q1R=== "low")
    { return 1; 
        
    }
    
    else if (q1R==="medium"){
        return 2;
    }
        
    else{ return 0;
 }
}


console.log(hightop("low"));


function expose (q2R) {
    if (q2R=== "close")
    {return 5;
        
    }
     
     else if (q2R==="open"){
         return 3;
     }
     
     else {
         
        return 0;
     }
}    
     
function option(q3R){  
    if (q3R=== "laces")
    { return 4;
 }
    else if (q3R===" no laces") {
        return 2;
    }

 else { return 0;

 }
}

    

