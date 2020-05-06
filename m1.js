$(document).ready(function(){
$(".Ar").hide();
$("#Arbtn").click(function(){
  $(".head1").hide();
  $(".Singers").hide();
  $(".Ar").show();
});

$("#goBack").click(function(){
  $(".head1").show();
  $(".Singers").show();
  $(".Ar").hide();
});

$("audio").bind("play",function (){
  $("audio").not(this).each(function (index, audio) {
    audio.pause();
  });
});


});