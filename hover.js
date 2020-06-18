gallery();

function gallery (){
    if(window.innerWidth > 600){
        
        //Track mouse pos
        var x, y;
        $(document).mousemove(function(event){
            x = event.clientX;
            y = event.clientY;
        });


        var displayedDiv = null;
        window.onscroll = function(){
            var divs = document.elementsFromPoint(x, y);
            if(divs != null){
                var i;
                var found = false;
                for(i = 0; i < divs.length; i++){                    
                    if(divs[i].className == "gameBlock"){
                        if(displayedDiv == null || divs[i].children[i] != displayedDiv){
                            if(displayedDiv != null){
                                //old div
                                displayedDiv.style.opacity = "0";
                                displayedDiv.style.transition = "opacity 0.5s";
                            }

                            //new div
                            displayedDiv = divs[i].children[0];
                            displayedDiv.style.opacity = "1";
                            displayedDiv.style.transition = "opacity 0.1s";
                            found = true;
                            break;
                        }
                    }
                }                
                if(!found && displayedDiv != null){
                    displayedDiv.style.opacity = "0";
                    displayedDiv.style.transition = "opacity 0.5s";
                }
            }
        }

        

        $(".gameBlock").mouseover(function(){
            $(this).find(".gametext").css({"opacity": "1", "transition": "opacity 0.1s"});
        }).mouseout(function(){
            $(this).find(".gametext").css({"opacity": "0", "transition": "opacity 0.5s"});
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

jQuery(document.links).filter(function() { 
    return this.hostname != window.location.hostname;   
}).attr('target', '_blank');  