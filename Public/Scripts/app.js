
$(document).ready(function(){
<<<<<<< HEAD
=======
   // $('main')
      //  .append('<form id="form1"></form>');
    // $('#form1')
    //     // .attr("action","form1") .attr("method","post")
    //     .append('<input type="hidden" name="date" id="text" value="">')
    //     .append('<input type="hidden" name="image" id="image" value="">')
    //     .append('<input type="hidden" name="anecdote" id="anecdote" value="">')

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

>>>>>>> 4441f24a09092bccb79c849bd15f1cbfc6a53178

});

<<<<<<< HEAD
$(function(){
  $("[type=file]").change(function(){
  	var file = this.files[0],
  		reader = new FileReader(),
  		img = $(this).siblings('img')
  	reader.onload = function (e) {
  		img.attr('src', e.target.result);
  	}
  	reader.readAsDataURL(file);
  });
});
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
>>>>>>> 4441f24a09092bccb79c849bd15f1cbfc6a53178

  });
