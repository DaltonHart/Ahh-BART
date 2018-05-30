$(document).ready(function(){


    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

console.log('Posts Working!');


    $("form").submit(function(e) {
    e.preventDefault();
    $.ajax({
        method: 'GET',
        url: "api/stations",
        success: changeVal,
        error: errorLog
    });
 function changeVal(res){
     console.log(` this is :${$('option').val()}`);
    let station = res.find(stations => stations.name === $("option").val());
    console.log(station);
    $('.imgSelector').attr('value',station.img);
    $('#dateSelector').val(new Date().toDateInputValue());
    var str = $("form").serialize();
    console.log(str);
    $.post('api/posts', str) ;
    $("form").each(function() {
      this.reset();
    });
 }

    //window.location.reload();
    });

    $('#info').ready(function(){
        $.ajax({
            method: 'GET',
            url: "api/posts",
            success: responseSucc,
            error: errorLog
          });

        $.ajax({
            method: 'GET',
            url: "api/stations",
            success: gotStations,
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
           //
           console.log('rendered:',post);
           var commentHTML = (`<article>
           <image src="${post.img}" />
           <p class="comment">${post.comment}</p>
           <p class="date">${post.date}</p>
           <p class="location">${post.location}</p>
         </article>`);
           $('.item3').prepend(commentHTML);

       };

       function gotStations(stations) {
        stations.forEach(function(station){
            renderStationsList(station);
        });
    }

    function renderStationsList(station){
        //console.log("rendered:", station.name);
        var listItem = (`<option value="${station.name}">${station.name}</option>`)
        $('#locations').append(listItem);
    }


});
