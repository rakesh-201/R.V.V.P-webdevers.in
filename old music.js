$(document).ready(function(){
    $(".Md").hide();
    $("#goback").hide();
    $("#Mdbtn").click(function(){
      $(".head1").hide();
      $(".Singers").hide();
      $(".Md").show();
      $("#goback").show();
    });
    $("#goback").click(function(e){
      $(this).hide();
      $(".Md").hide();
      $(".head1").show();
      $(".Singers").show();
    })
    $("audio").bind("play",function (){
      $("audio").not(this).each(function (index, audio) {
        audio.pause();
      });
    });
});