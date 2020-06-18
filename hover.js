gallery();

function gallery (){
    if(window.innerWidth > 600){
        $(".gameBlock").hover(function(){
            $(this).find(".gametext").css({"opacity": "1", "transition": "opacity 0.2s"});
        }, function(){
            $(this).find(".gametext").css({"opacity": "0", "transition": "opacity 0.2s"});
        });
    } else {
        var gametexts = document.getElementsByClassName("gametext");    
        var i;
        for(i = 0; i < gametexts.length; i++){
            (gametexts[i]).style.opacity = 1;
        }    
    }
}

$( "#viewButton" ).click(function() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
});
  

window.onresize = function(event) {

    gallery();

};