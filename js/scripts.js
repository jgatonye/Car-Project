$(document).ready(function() {
$("h1").click(function() {
  alert("This is a header.");
});

$("p").click(function() {
  alert("This is a paragraph.");
});

$("img").click(function() {
  alert("This is an image.");
});
});
$(document).ready(function(){
  $("p").click(function(){
    $("img").show();
  });
});
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").show();
    $(".walrus-hidden").hide();
  });
});
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
