// var gametexts = document.getElementsByClassName("gametext");

// var i;
// for(i = 0; i < gametexts.length; i++){
//     gametexts[i].classList.toggle('fadeIn');
// }

$(".gameBlock").hover(function(){
    $(this).find(".gametext").css({"opacity": "1", "transition": "opacity 0.2s"});
}, function(){
    $(this).find(".gametext").css({"opacity": "0", "transition": "opacity 0.2s"});
});