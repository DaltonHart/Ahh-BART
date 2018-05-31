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
     console.log(` this is :${$('select').val()}`);
    let station = res.find(stations => stations.name === ($("select").val()));
    console.log(station);
    $('.imgSelector').attr('value',station.img);
    $('#dateSelector').val(new Date().toDateInputValue());
    var str = $("form").serialize();
    console.log(str);
    $.post('api/posts', str);
    $.post('/upload', $('#photo'));
    console.log($('#photo'));
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
           <image class="item4" src="${post.img}" />
           <p class="comment item5">${post.comment}</p>
           <p class="date item6">${post.date}</p>
           <p class="location item7">${post.location}</p>
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
        var listItem = (`<option class="optionSelect" value="${station.name}">${station.name}</option>`)
        $('#locations').append(listItem);
    }


});
