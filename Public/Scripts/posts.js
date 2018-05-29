$(document).ready(function(){
console.log('Posts Working!');
    $('#info').ready(function(){
        $.ajax({
            method: 'GET',
            url: "api/posts",
            success: responseSucc,
            error: errorLog
          });
        });

        function errorLog(a,b,c){
            console.log(b);
          };

        function responseSucc(posts) {
            posts.forEach(function(post){
                renderPosts(post);
            });
        };
       function renderPosts(post){
           console.log('rendered:',post);
           var commentHTML = (`<article>
           <image src="#" />
           <p class="comment">${post.comment}</p>
           <p class="date">${post.date}</p>
           <p class="location">${post.location}</p>
         </article>`);
           $('.item3').append(commentHTML);
       };


});


