
$(document).ready(function(){
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
});
});
});

// $(function(){
// $("[type=file]").change(function(){
//   var file = this.files[0],
//   reader = new FileReader(),
//   img = $(this).siblings('img')
//   reader.onload = function (e) {
//     img.attr('src', e.target.result);
//   }
//   reader.readAsDataURL(file);
// })
// });

// });



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
//
//   });
