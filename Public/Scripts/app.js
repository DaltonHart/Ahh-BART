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
<<<<<<< HEAD
    $('main')
        .append('<form id="form1"></form>');
  
=======
   // $('main')
      //  .append('<form id="form1"></form>');
    // $('#form1')
    //     // .attr("action","form1") .attr("method","post")
    //     .append('<input type="hidden" name="date" id="text" value="">')
    //     .append('<input type="hidden" name="image" id="image" value="">')
    //     .append('<input type="hidden" name="anecdote" id="anecdote" value="">')

>>>>>>> 7c34e0f2f8408f3a5b656d9e7c0afa7e35852cab
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
<<<<<<< HEAD
//
=======
// $(function(){
// 		$("[type=file]").change(function(){
// 			var file = this.files[0],
// 				reader = new FileReader(),
// 				img = $(this).siblings('img')
// 			reader.onload = function (e) {
// 				img.attr('src', e.target.result);
// 			}
// 			reader.readAsDataURL(file);
// 		})
// 	})

>>>>>>> 7c34e0f2f8408f3a5b656d9e7c0afa7e35852cab
