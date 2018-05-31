
$(document).ready(function(){
// hiding and showing post function
    $("#formButton").click(function(){
      $('form.hidden').toggleClass('showing');
    });

    $(".close").click(function(){
      $('form.showing').removeClass('showing');});

});
// refer to map.js for map styling and config
//refer to posts.js for get requests on post runing