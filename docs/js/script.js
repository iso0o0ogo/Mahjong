$(function() {
   $(".btn").click(function() {
      $(".btn").toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".nav").toggleClass("active");
   });
   $(".overlay").click(function() {
      $(".btn").toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".nav").toggleClass("active");
   });
});