$("h1").addClass("big-title margin-50");
// $("h1").text("bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>Hey</em>");
// $("a").attr("href","https://www.youtube.com");
// $("a").attr("target", "_blank");
$("button").click(function(){
    // $("h1").css("color","purple");
    // $("h1").Toggle();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({margin: 20});
    $("h1").fadeOut().fadeIn().animate({margin:20});
});
// $(document).keypress(function(event){
//     $("h1").text(event.key);
//     console.log(event.key);
// });

// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
// });

// $("h1").before("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").after("<button>New</button");
// $("h1").append("<button>New</button");
// $("button").remove();

