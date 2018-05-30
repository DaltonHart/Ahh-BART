//from https://stackoverflow.com/questions/32540044/html-display-current-date on how to set up the date

// You have to get the individual components from the date object (day, month & year) and then build and format the string however you wish.
//
// n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
// <article class = "row" id="date">

// read this: http://javascript-coder.com/jsform/jquery-disable-button-on-click-submit.phtml
$(document).ready(function(){
    $('main')
        .append('<form id="form1"></form>');
  
});
$(function(){
  event.preventDefault()
});

$("#formButton").click(function(){
        $('form.hidden').toggleClass('showing');
});

$(function(){
  $("[type=file]").change(function(){
  	var file = this.files[0],
  		reader = new FileReader(),
  		img = $(this).siblings('img')
  	reader.onload = function (e) {
  		img.attr('src', e.target.result);
  	}
  	reader.readAsDataURL(file);
  })
})
//
