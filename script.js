$(".start-screen").hide();
$(".second-screen-cat").hide();
$(".second-screen-dog").hide();
$(".third-screen-dog").hide();
$(".third-screen-cat").hide();

$(".start").click(function(){
    $(".start-screen").show("slow");
    $(".start").hide("slow");
});
$(".kitten").dblclick(function(){
    $(".start-screen").hide("slow");
    $(".second-screen-cat").show("slow");
});
$(".puppy").dblclick(function(){
    $(".start-screen").hide("slow");
    $(".second-screen-dog").show("slow");
    
    
});
$(".puppy2").hover(function(){
    $(".second-screen-dog").hide("slow");
    $(".third-screen-dog").show("slow");
    $(".ptitle1").text("Puppy life Month 1");
    
    
});
$(".kitten2").hover(function(){
    $(".second-screen-cat").hide("slow");
    $(".third-screen-cat").show("slow");
    $(".ktitle1").text("Kitten life Month 1");
    
    
});
$("button").click(function(){
    $(".second-screen-cat").hide("slow");
    $(".third-screen-cat").hide("slow");
    $(".start-screen").show("slow");
     $(".second-screen-dog").hide("slow");
    $(".third-screen-dog").hide("slow");
});