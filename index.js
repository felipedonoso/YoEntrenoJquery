$(function() {
  /**
   * Submit serach form
   */





 var template = '<ul data-role="listview" data-inset="true">' +
               '<li>' +
                   '<img style="height:50px;width:50px;"   src=":img:"' +
                   '<h2>:name:</h2>' +
                '<li>' +  
               '</ul>';

    

  $.ajax({
    url: 'http://api.tvmaze.com/shows',
    success: function (shows, textStatus, xhr) {
      var $tvShowsContainer = $('#app-body').find('#movie-list');
      shows.forEach(function (show) {
        /*
        var article = template
          .replace(':name:', show.name)
          .replace(':img:', show.image.medium)
        
          $tvShowsContainer.append($(article))*/

          $tvShowsContainer.append('<li>' +
                   '<img style="height:50px;width:50px;"   src="' +show.image.medium+'"' +
                   '<h2>"'+ show.name+'"</h2>' +
            '<li>')
             $('#movie-list').listview('refresh');
      })
    }
  })
})




/*
var ajax = {  
    parseJSONP:function(result){  
        movieInfo.result = result.results;
        $.each(result.results, function(i, row) {
            console.log(JSON.stringify(row));
            $('#movie-list').append('<li><a href="" data-id="' + row.id + '"><img src="http://image.tmdb.org/t/p/w92'+row.poster_path+'"/><h3>' + row.title + 
              '</h3><p>' + row.vote_average + '/10</p></a></li>');
        });
        $('#movie-list').listview('refresh');
    }
}*/